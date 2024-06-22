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

        public string? OptionId { get; set; }

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
    }
}
