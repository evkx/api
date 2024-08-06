using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the headlight options on an EV
    /// </summary>
    public class Headlight
    {
        /// <summary>
        /// Defines if this is a standard headlight option
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// The name of the headlight option
        /// </summary>
        public Dictionary<string,string>? Name { get; set; }

        /// <summary>
        /// The technology used in the headlight
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public LightTechnology? LightTechnology { get; set; }
        
        /// <summary>
        /// Defines if the headlight has auto dimming
        /// </summary>
        public EVFeature? AutoDimming { get; set; }

        /// <summary>
        /// Defines if the headlight has cornering light
        /// </summary>
        public EVFeature? CorneringLight { get; set; }

        /// <summary>
        /// Defines if the headlight is directional and turn headlights after direction
        /// </summary>
        public EVFeature? DirectionalLights { get; set; }

        /// <summary>
        /// Defines if the headlight has a headlight washer
        /// </summary>
        public EVFeature? HeadlightWasher { get; set; }

        /// <summary>
        /// Defines if the headlight has drl light signatures
        /// </summary>
        public EVFeature? DRLLightSignatures { get; set; }

        /// <summary>
        /// Defines the text key for a specific feature description
        /// </summary>
        public string? FeatureDescription { get; set; }

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
            string descriptionKey = "lights.technology";
            if (Standard == true)
            {
                descriptionKey += ".standard";
            }
            else
            {
                descriptionKey += ".option";
            }

            if (LightTechnology == Enums.LightTechnology.LED)
            {
                descriptionKey += ".led";
            }
            else if (LightTechnology == Enums.LightTechnology.OLED)
            {
                descriptionKey += ".oledled";
            }
            else if (LightTechnology == Enums.LightTechnology.LEDMatrixLaser)
            {
                descriptionKey += ".ledmatrixlaser";
            }
            else if (LightTechnology == Enums.LightTechnology.LEDMatrix)
            {
                descriptionKey += ".ledmatrix";
            }
            else if (LightTechnology == Enums.LightTechnology.LEDDigitalMatrix)
            {
                descriptionKey += ".leddigitalmatrix";
            }

            if(CorneringLight != null && CorneringLight.Available())
            {
                descriptionKey += ".corneringlight";
            }

            if (DirectionalLights != null && DirectionalLights.Available())
            {
                descriptionKey += ".turninglights";
            }

            if (DRLLightSignatures != null && DRLLightSignatures.Available())
            {
                descriptionKey += ".drlsignatures";
            }

            return descriptionKey;
        }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore score = new DataQualityScore() { DataArea = "Headlight" };

            if (LightTechnology == null || LightTechnology == Enums.LightTechnology.NotSet)
            {
                score.ReduceScore(30);
            }

            if (AutoDimming == null || AutoDimming.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30);
            }

            if (CorneringLight == null || CorneringLight.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30);
            }

            if (DirectionalLights == null || DirectionalLights.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30);
            }

            if (HeadlightWasher == null || HeadlightWasher.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30);
            }

            if (DRLLightSignatures == null || DRLLightSignatures.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30);
            }

            return score;
        }

    }
}
