using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace evdb.models.Models
{
    public class Regen
    {
        public int? MaxRegenKw { get; set; }

        public bool? LiftUpRegen { get; set; }

        public bool? Coasting { get; set; }

        public bool? AdaptiveRegen { get; set; }

        public bool? RegenPaddles { get; set; }

        public OnePedalStoppingMode? OnePedalStoppingMode { get; set; }

        public List<string>? LiftOfRegenLevels { get; set; }

        public bool? BlendedBrakes { get; set; }

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
