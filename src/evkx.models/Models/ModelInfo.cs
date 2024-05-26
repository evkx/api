using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
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

        public string Name { get; set; }

        public string? Variant { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? LegacyVersion { get; set; }

        public bool? Ignore { get; set; }

        public string? CarSegment { get; set; }

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
