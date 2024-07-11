using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class Brakes
    {
        public bool? Standard { get; set; }

        public string? Name  { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeType? FrontBrakeType { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeDiscType? FrontBrakeDiscType { get; set; }

        public decimal? FrontBrakeDiscDiameter { get; set; }

        public decimal? FrontBrakeDiscThickness { get; set; }

        public int? FrontBrakePistons { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeType? RearBrakeType { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeDiscType? RearBrakeDiscType { get; set; }

        public decimal? RearBrakeDiscDiameter { get; set; }

        public decimal? RearBrakeDiscThickness { get; set; }

        public int? RearBrakePistons { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Brakes" };

            if(Standard == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(string.IsNullOrEmpty(Name))
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakeType == null || FrontBrakeType.Equals(BrakeType.NotSet))
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakeDiscType == null || FrontBrakeDiscType.Equals(BrakeDiscType.NotSet))
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakeDiscDiameter == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakeDiscThickness == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakePistons == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(RearBrakeType == null || RearBrakeType.Equals(BrakeType.NotSet))
            {
                dataQualityScore.DataQuality--;
            }

            if(RearBrakeDiscType == null || RearBrakeDiscType.Equals(BrakeDiscType.NotSet))
            {
                dataQualityScore.DataQuality--;
            }

            if(RearBrakeDiscDiameter == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(RearBrakeDiscThickness == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(RearBrakePistons == null)
            {
                dataQualityScore.DataQuality--;
            }

            return dataQualityScore;
        }
    }
}
