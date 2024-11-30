using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;
using System.Linq;

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
        /// Defines the steering wheel control type
        /// </summary>
        public SteeringWheelControlType ControlType { get; set; }

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
        /// List of controls of the steering wheel
        /// </summary>
        public List<string>? Controls { get; set; }

        public string? GetName(string language = "en")
        {
            if(Name != null && Name.ContainsKey(language))
            {
                return Name[language];
            }

            return null;
        }

        public string GetDescriptionKey()
        {
            string baseKey = "uicontrols.steeringwheel";
            string featureKey = string.Empty;
            
            if(SteeringWheelDesign != SteeringWheelDesignType.NotSet)
            {
                featureKey = "."+ SteeringWheelDesign.ToString().ToLower();
            }
            if (ControlType != SteeringWheelControlType.NotSet)
            {
                featureKey += "." + ControlType.ToString().ToLower();
            }

            if (Heated != null && Heated.FeatureStatus == FeatureStatus.Optional)
            {
                featureKey += ".optionalheating";
            }
            else if(Heated != null && Heated.FeatureStatus == FeatureStatus.Standard)
            {
                featureKey += ".heating"; 
            }

            if (Controls != null)
            {
                foreach (var control in Controls.Order())
                {
                    featureKey += "." + control.ToLower();
                }
            }

            return baseKey + featureKey;    
        }


        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "SteeringWheel" };

            if (Standard == null)
            {
                dataQualityScore.ReduceScore(10, "Standard");
            }

            if(Heated == null || Heated.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "Heated");
            }

            if(Controls == null || Controls.Count == 0)
            {
                dataQualityScore.ReduceScore(10, "Controls");
            }

            if(SteeringWheelDesign == SteeringWheelDesignType.NotSet)
            {
                dataQualityScore.ReduceScore(20, "SteeringWheelDesign");
            }

            if(SteeringWheelControlType.NotSet == ControlType)
            {
                dataQualityScore.ReduceScore(20, "ControlType");
            }

            return dataQualityScore;
        }
    }
}
