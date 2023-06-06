using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class TransportCapabilities
    {
        public TransportCapabilities()
        {
            Towbar = new EVFeature();
        }

        public int? WeightUnladenDINKg { get; set; }

        public int? MaxVehicleWeightKg { get; set; }

        public bool? Frunk { get; set; }

        public int? FrunkSizeLiter { get; set; }

        public bool? RoofCargo { get; set; }

        public int? MaxRoofLoadKg { get; set; }

        public EVFeature? Towbar { get; set; }

        public int? TrailerSizeBrakedKg { get; set; }

        public int? TrailerSizeUnBrakedKg { get; set; }
        
        public int? MaxTowbarDownloadKg { get; set; }

        public int? CargoCapacityLiter { get; set; }

        public int? CargoCapacitySeatDownLiter { get; set; }

        public int? CargoCapacityThirdRowSeatDownLiter { get; set; }

        public decimal? BedVolumeLiter { get; set; }

        public decimal? BedLength { get; set; }

        public decimal? BedWidth { get; set; }

        public decimal? BedMaxWeight { get; set; }

    }
}
