using evdb.models.Enums;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class ModelDetails
    {
        public ModelDetails(string brand, string name)
        {
            Brand = brand;
            Name = name;
            SaleStart = null;
            ModelYear = null;
            ProductionStart = null;
            CarSegment = null;
            Variants = new List<string>();
            BodyType = new List<EvBodyType>();
        }

        public string Brand { get; set; }

        public string Name { get; set; }    

        public string? VinPattern { get; set; } 

        public string? SaleStart { get; set; }

        public string? ModelYear { get; set; }

        public string? ProductionStart { get; set; }

        public string? CarSegment { get; set; }

        public string? Platform { get; set; }

        public bool? EvOnlyPlatform { get; set; }
        
        public bool? EvOnlyConstruction { get; set; }

        public string? Thumb { get; set; }

        public int? ThumbHeight { get; set; }

        public List<string> Variants { get; set; }

        public List<EvBodyType> BodyType { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PriceCategory? PriceSegment { get; set; }
    }
}
