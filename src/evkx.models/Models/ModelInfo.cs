using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Basic model information
    /// </summary>
    public class ModelInfo
    {
        public ModelInfo(string name, string variant)
        {
            Name = name;
            Variant = variant;
            CarSegment = null;
            PriceSegment = PriceCategory.NotSet;
            BodyType = EvBodyType.NotSet;
        }

        /// <summary>
        /// Model name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Model variant
        /// </summary>
        public string? Variant { get; set; }

        /// <summary>
        /// Legacy version of the model if discontinued and replaced by new
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? LegacyVersion { get; set; }

        /// <summary>
        /// Ignore this model in the database
        /// </summary>
        public bool? Ignore { get; set; }

        /// <summary>
        /// Ignore this model in the database
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool? ForceGeneration { get; set; }

        /// <summary>
        /// Car segment of the model
        /// </summary>
        public CarSegment? CarSegment { get; set; }

        /// <summary>
        /// Defines the price segment
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PriceCategory PriceSegment { get; set; }

        /// <summary>
        /// Platform of the model
        /// </summary>
        public string? Platform { get; set; }

        /// <summary>
        /// Defines if the model is only available as EV
        /// </summary>
        public bool? EvOnlyPlatform { get; set; }

        /// <summary>
        /// Defines if this is a EV only construction
        /// </summary>
        public bool? EvOnlyConstruction { get; set; }

        /// <summary>
        /// Defines the body type of the SUV
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public EvBodyType BodyType { get; set; }

        /// <summary>
        /// Defines the model status
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ModelStatus? ModelStatus { get; set; }

        /// <summary>
        /// Defines the spec status of the model
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SpecStatus? SpecStatus { get; set; } 

        /// <summary>
        /// Defines the world premiere date
        /// </summary>
        public DateOnly? WorldPremiere { get; set; }

        /// <summary>
        /// Defines when delivery start
        /// </summary>
        public DateOnly? DeliveryStart { get; set; }

        /// <summary>
        /// Defines the availability of the model
        /// </summary>
        public List<Availability>? Availability {get; set; }

        /// <summary>
        /// Defines the pricing of the model
        /// </summary>
        public List<Pricing>? Pricing { get; set; }

        /// <summary>
        /// Defines alternatives to this model
        /// </summary>
        public List<EvModelReference>? Alternatives { get; set; }

        /// <summary>
        /// Defines which models this is replaced by
        /// </summary>
        public List<EvModelReference>? ReplacedBy { get; set; }

        /// <summary>
        /// Defines 
        /// </summary>
        public List<EvModelReference>? Replaces { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "ModelInfo" };

            if(string.IsNullOrEmpty(Name))
            {
                dataQualityScore.ReduceScore(1000, "Name");
            }

            if(string.IsNullOrEmpty(Variant))
            {
                dataQualityScore.ReduceScore(1000, "Variant");
            }

            if (BodyType == EvBodyType.NotSet)
            {
                dataQualityScore.ReduceScore(1000, "BodyType");
            }

            if (CarSegment == null)
            {
                dataQualityScore.ReduceScore(200, "CarSegment");
            }

            if(string.IsNullOrEmpty(Platform))
            {
                dataQualityScore.ReduceScore(50, "Platform");
            }

            if (PriceSegment == PriceCategory.NotSet)
            {
                dataQualityScore.ReduceScore(100, "PriceSegment");
            }

            if (EvOnlyConstruction == null)
            {
                dataQualityScore.ReduceScore(50, "EvOnlyConstruction");
            }

            if(EvOnlyPlatform == null) {
                dataQualityScore.ReduceScore(50, "EvOnlyPlatform");
            }

            if(ModelStatus == null || ModelStatus == models.Enums.ModelStatus.NotSet)
            {
                dataQualityScore.ReduceScore(200, "ModelStatus");
            }   

            if(SpecStatus == null)
            {
                dataQualityScore.ReduceScore(50, "SpecStatus");
            }

            if(WorldPremiere == null)
            {
                dataQualityScore.ReduceScore(100, "WorldPremiere");
            }

            if(DeliveryStart == null)
            {
                dataQualityScore.ReduceScore(100, "DeliveryStart");
            }

            if (Availability == null || Availability.Count == 0)
            {
                if (ModelStatus != models.Enums.ModelStatus.Discontinued)
                {
                    dataQualityScore.ReduceScore(100, "Availability");
                }
            }
            else
            {
                foreach (Availability availability in Availability)
                {
                    dataQualityScore.AddSubScore(availability.CalculateDataQuality());
                }
            }

            if (Pricing == null || Pricing.Count == 0)
            {
                if(ModelStatus != models.Enums.ModelStatus.Discontinued)
                {
                    dataQualityScore.ReduceScore(100, "Pricing");
                }
            }

            if (Alternatives == null || Alternatives.Count == 0)
            {
                if (ModelStatus != models.Enums.ModelStatus.Discontinued)
                {
                    dataQualityScore.ReduceScore(100, "Alternatives");
                }
            }
            else
            {
                foreach (EvModelReference evModelReference in Alternatives)
                {
                    dataQualityScore.AddSubScore(evModelReference.CalculateDataQuality());
                }
            }

            return dataQualityScore;
        }

    }
}
