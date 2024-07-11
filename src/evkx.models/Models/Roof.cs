using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Roof
    {
        public string? Material { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PanoramicRoofType? PanoramicRoofType { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PanoramicRoofShadeType? PanoramicRoofShadeType { get; set; }

        public bool? Standard { get; set; }

        public EVFeature? Rails { get; set; }

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


            return dataQualityScore;
        }
    }
}
