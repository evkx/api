using evdb.models.Enums;
using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the regen capabilites of an EV
    /// </summary>
    public class Regen
    {
        /// <summary>
        /// Max regen in kW
        /// </summary>
        public int? MaxRegenKw { get; set; }

        /// <summary>
        /// Defines if the vehicle has lift up regen
        /// </summary>
        public bool? LiftUpRegen { get; set; }

        /// <summary>
        /// Defines if the vehicle has coasting
        /// </summary>
        public bool? Coasting { get; set; }

        /// <summary>
        /// Defines if the vehicle has adaptive regen
        /// </summary>
        public bool? AdaptiveRegen { get; set; }

        /// <summary>
        /// Defines if the vehicle has regen paddles
        /// </summary>
        public bool? RegenPaddles { get; set; }

        /// <summary>
        /// Defines if the vehicle has one pedal stopping mode
        /// </summary>
        public OnePedalStoppingMode? OnePedalStoppingMode { get; set; }

        /// <summary>
        /// Defines the lift of regen levels
        /// </summary>
        public List<string>? LiftOfRegenLevels { get; set; }

        /// <summary>
        /// Defines if the vehicle has blended brakes
        /// </summary>
        public bool? BlendedBrakes { get; set; }

        /// <summary>
        /// Defines if the vehicle has blending brake on lift up regen
        /// </summary>
        public bool? BlendingBrakeOnLiftUpRegen { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Regen" };

            if(MaxRegenKw == null)
            {
                dataQualityScore.ReduceScore(5);
            }

            if(LiftUpRegen == null)
            {
                dataQualityScore.ReduceScore(20);
            }

            if(Coasting == null)
            {
                dataQualityScore.ReduceScore(20);
            }

            if(AdaptiveRegen == null)
            {
                dataQualityScore.ReduceScore(20);
            }

            if(RegenPaddles == null)
            {
                dataQualityScore.ReduceScore(20);
            }

            if(OnePedalStoppingMode == null || OnePedalStoppingMode.Equals(Enums.OnePedalStoppingMode.NotSet))
            {
                dataQualityScore.ReduceScore(20);
            }

            if(LiftOfRegenLevels == null || LiftOfRegenLevels.Count == 0)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(BlendedBrakes == null)
            {
                dataQualityScore.ReduceScore(20);
            }

            if(BlendingBrakeOnLiftUpRegen == null)
            {
                dataQualityScore.ReduceScore(5);
            }

            return dataQualityScore;
        }
    }
}
