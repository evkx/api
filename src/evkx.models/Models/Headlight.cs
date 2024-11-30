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

        public Headlight()
        {
            Name = new Dictionary<string, string>();
            LightTechnology = Enums.LightTechnology.NotSet;
            AutoDimming = new EVFeature();
            CorneringLight = new EVFeature();
            SwivelingLight = new EVFeature();
            HeadlightWasher = new EVFeature();
            DRLLightSignatures = new EVFeature();
        }
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
        public EVFeature? SwivelingLight { get; set; }

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
            else if (LightTechnology == Enums.LightTechnology.Halogen)
            {
                descriptionKey += ".halogen";
            }

            if (CorneringLight != null && CorneringLight.Available())
            {
                descriptionKey += ".corneringlight";
            }

            if (SwivelingLight != null && SwivelingLight.Available())
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
                score.ReduceScore(30, "LightTechnology");
            }

            if (AutoDimming == null || AutoDimming.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30, "AutoDimming");
            }

            if (CorneringLight == null || CorneringLight.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30, "CorneringLight");
            }

            if (SwivelingLight == null || SwivelingLight.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30, "SwivelingLight");
            }

            if (HeadlightWasher == null || HeadlightWasher.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30, "HeadlightWasher");
            }

            if (DRLLightSignatures == null || DRLLightSignatures.FeatureStatus == FeatureStatus.Unknown)
            {
                score.ReduceScore(30, "DRLLightSignatures");
            }

            return score;
        }

    }
}
