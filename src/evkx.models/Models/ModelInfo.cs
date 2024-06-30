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

    }
}
