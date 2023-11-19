using evdb.models.Enums;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Screen
    {
        public double? ScreenSize { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ScreenLocation? Location { get; set; }

        public List<string>? Content { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ScreenRotation? Rotation { get; set; }

        public bool? Touch { get; set; }

        public string? Resolution { get; set; }

        public bool? Optional { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ScreenCategory? ScreenCategory { get; set; }
    }
}
