using System.Collections.Generic;

namespace evdb.Models
{
    public class ModelDetails
    {
        public ModelDetails()
        {
            Brand = null;
            Name = null;
            SaleStart = null;
            ModelYear = null;
            ProductionStart = null;
            CarSegment = null;
            PriceSegment = null;
        }

        public string? Brand { get; set; }

        public string? Name { get; set; }    

        public string? VinPattern { get; set; } 

        public string? SaleStart { get; set; }

        public string? ModelYear { get; set; }

        public string? ProductionStart { get; set; }

        public string? CarSegment { get; set; }

        public string? PriceSegment { get; set; }

        public string? Platform { get; set; }

        public bool? EvOnlyPlatform { get; set; }
        
        public bool? EvOnlyConstruction { get; set; }

        public string? Thumb { get; set; }

        public int? ThumbHeight { get; set; }

        public List<string> Variants { get; set; }
    }
}
