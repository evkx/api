using evdb.models.Enums;
using evdb.models.Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Reflection;
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
        /// Car segment of the model
        /// </summary>
        public CarSegment? CarSegment { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PriceCategory PriceSegment { get; set; }

        public string? Platform { get; set; }

        public bool? EvOnlyPlatform { get; set; }

        public bool? EvOnlyConstruction { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public EvBodyType BodyType { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ModelStatus? ModelStatus { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SpecStatus? SpecStatus { get; set; } 

        public DateTime? WorldPremiere { get; set; }

        public DateTime? DeliveryStart { get; set; }

        public List<Availability>? Availability {get; set; }

        public List<Pricing>? Pricing { get; set; }

        public List<EvModelReference>? Alternatives { get; set; }

        public List<EvModelReference>? ReplacedBy { get; set; }

        public List<EvModelReference>? Replaces { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public int CalculateDataQuality()
        {
            int counter = 0;

            if(string.IsNullOrEmpty(Name))
            {
                counter-=10;
            }

            if(string.IsNullOrEmpty(Variant))
            {
                counter-=10;
            }


            if (BodyType == EvBodyType.NotSet)
            {
                counter--;
            }

            if (CarSegment == null)
            {
                counter--;
            }

            if(string.IsNullOrEmpty(Platform))
            {
                counter--;
            }

            if (PriceSegment == PriceCategory.NotSet)
            {
                counter--;
            }

            if (EvOnlyConstruction == null)
            {
                counter--;
            }

            if(EvOnlyPlatform == null) {
                counter--;
            }

   


            if(ModelStatus == null)
            {
                counter--;
            }   

            if(SpecStatus == null)
            {
                counter--;
            }

            if(WorldPremiere == null)
            {
                counter--;
            }

            if(DeliveryStart == null)
            {
                counter--;
            }

            if(Availability == null || Availability.Count == 0)
            {
                counter--;
            }

            if(Pricing == null || Pricing.Count == 0)
            {
                counter--;
            }

            if(Alternatives == null || Alternatives.Count == 0)
            {
                counter-=10;
            }

            if(ReplacedBy == null)
            {
                counter--;
            }

            if(Replaces == null)
            {
                counter--;
            }

            return counter;
        }

    }
}
