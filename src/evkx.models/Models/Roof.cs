using evdb.models.Enums;
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
    }
}
