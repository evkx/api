using evdb.models.Enums;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class SeatMaterial
    {
        public string? Name { get; set; }

        public bool? AnimalFree { get; set; }

        public string? Color { get; set; }

        public string? Material { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public InteriorMaterialType? MaterialType { get; set; } 

        public string? OptionId { get; set; }

        public List<string>? SeatOption { get; set; }
    }
}
