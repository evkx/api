using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class ModelInfo
    {
        public ModelInfo()
        {
            Name = null;
            VinPattern = null;
            SaleStart = null;
            ModelYear = null;
            ProductionStart = null;
            Variant = null;
            CarSegment = null;
            PriceSegment = null;
            BodyType = null;
        }

        public string? Name { get; set; }    

        public string? VinPattern { get; set; } 

        public string? SaleStart { get; set; }

        public string? ModelYear { get; set; }

        public string? ProductionStart { get; set; }

        public string? Variant { get; set; }

        public string? CarSegment { get; set; }

        public string? PriceSegment { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public EvBodyType? BodyType { get; set; }

    }
}
