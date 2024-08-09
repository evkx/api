using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the steering wheel option
    /// </summary>
    public class SteeringWheel
    {
        /// <summary>
        /// Defines the steering wheel design
        /// </summary>
        public SteeringWheelDesignType SteeringWheelDesign { get; set; }

        /// <summary>
        /// The name of the steering wheel options
        /// </summary>
        public Dictionary<string,string>? Name { get; set; }

        /// <summary>
        /// Defines if this is the standard steering wheel
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// Defines if this steering wheel is heated
        /// </summary>
        public EVFeature? Heated { get; set; }

        /// <summary>
        /// Defines if this steering wheel has audi control
        /// </summary>
        public bool? AudioControl { get; set; }

        /// <summary>
        /// Defines if this steering wheel has screenscontrol
        /// </summary>
        public bool? ScreenControl { get; set; }

        public string? GetName(string language = "en")
        {
            if(Name != null && Name.ContainsKey(language))
            {
                return Name[language];
            }

            return null;
        }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "SteeringWheel" };

            if (Standard != null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(Heated == null || Heated.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(AudioControl == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(ScreenControl == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(SteeringWheelDesign == SteeringWheelDesignType.NotSet)
            {
                dataQualityScore.ReduceScore(20);
            }
           
            return dataQualityScore;
        }
    }
}
