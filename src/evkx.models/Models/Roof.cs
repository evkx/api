using evdb.models.Enums;
using evdb.models.Models;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines the roof for an ev
    /// </summary>
    public class Roof
    {

        public Roof()
        {
            Rails = new EVFeature() { FeatureStatus = FeatureStatus.Unknown };
        }
        
        /// <summary>
        /// Defines the material of the roof
        /// </summary>
        public string? Material { get; set; }

        /// <summary>
        /// What type of panoramic roof is installed in this roof
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PanoramicRoofType? PanoramicRoofType { get; set; }

        /// <summary>
        /// What type of shade is installed in this panoramic roof
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PanoramicRoofShadeType? PanoramicRoofShadeType { get; set; }

        /// <summary>
        /// Is this roof standard
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// Defines if the roof has rails
        /// </summary>
        public EVFeature? Rails { get; set; }


        /// <summary>
        /// Calculate the data quality score for this roof
        /// </summary>
        /// <returns></returns>
        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Roof" };

            if(string.IsNullOrWhiteSpace(Material))
            {
                dataQualityScore.ReduceScore(2);
            }

           if(Rails == null || Rails.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(PanoramicRoofType != null && PanoramicRoofType == models.Enums.PanoramicRoofType.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(PanoramicRoofType != null && (PanoramicRoofShadeType == null || PanoramicRoofShadeType == models.Enums.PanoramicRoofShadeType.NotSet))
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;
        }
    }
}
