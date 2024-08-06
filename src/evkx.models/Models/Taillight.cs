using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the taillight of an EV
    /// </summary>
    public class Taillight
    {
        /// <summary>
        /// Defines if this is the standard option
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// The name of this option
        /// </summary>
        public Dictionary<string, string>? Name { get; set; }

        /// <summary>
        /// The description of this feature referncing to a custom description
        /// </summary>
        public string? FeatureDescription { get; set; }

        /// <summary>
        /// The types of light technology
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public LightTechnology? LightTechnology { get; set; }

        /// <summary>
        /// Defines if it support different types of light signatures 
        /// </summary>
        public EVFeature? LightSignatures { get; set; }

        public string? GetName(string language = "en")
        {
            if (Name != null && Name.ContainsKey(language))
            {
                return Name[language];
            }

            return null;
        }

        public string GetDescriptionKey()
        {
            string descriptionKey = "lights.taillight.technology";
            if(Standard == true)
            {
                descriptionKey += ".standard";
            }
            else
            {
                descriptionKey += ".option";
            }

            if(LightTechnology == Enums.LightTechnology.LED)
            {
                descriptionKey += ".led";
            }
            else if (LightTechnology == Enums.LightTechnology.OLED)
            {
                descriptionKey += ".oledled";
            }

            return descriptionKey;
        }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore score = new DataQualityScore() { DataArea = "Taillights" };

            if (LightTechnology == null || LightTechnology == Enums.LightTechnology.NotSet)
            {
                score.ReduceScore(100);
            }

            if(LightSignatures == null || LightSignatures.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(20);
            }

            return score;
        }

    }
}
