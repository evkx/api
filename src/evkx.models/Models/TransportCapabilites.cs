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

        public decimal? WeightUnladenDINKg { get; set; }

        public decimal? MaxVehicleWeightKg { get; set; }

        public bool? Frunk { get; set; }

        public decimal? FrunkSizeLiter { get; set; }

        public bool? RoofCargo { get; set; }

        public decimal? MaxRoofLoadKg { get; set; }

        public EVFeature? Towbar { get; set; }

        public decimal? TrailerSizeBrakedKg { get; set; }

        public decimal? TrailerSizeUnBrakedKg { get; set; }
        
        public decimal? MaxTowbarDownloadKg { get; set; }

        public decimal? CargoCapacityLiter { get; set; }

        public decimal? CargoCapacitySeatDownLiter { get; set; }

        public decimal? CargoCapacityThirdRowSeatDownLiter { get; set; }

        public decimal? BedVolumeLiter { get; set; }

        public decimal? BedLength { get; set; }

        public decimal? BedWidth { get; set; }

        public decimal? BedMaxWeight { get; set; }


        public decimal? GetMaxLoad()
        {
            if(WeightUnladenDINKg != null && MaxVehicleWeightKg != null)
            {
                return decimal.Subtract(MaxVehicleWeightKg.Value, WeightUnladenDINKg.Value);
            }

            return null;
        }
    }
}
