using System;
using System.Collections.Generic;
using System.Text;

namespace evkx.models.Models.Search
{
    public class EvSimple
    {
        public string? EvId { get; set; }

        public string? Name { get; set; }

        public string? SortParameter { get; set; }

        public string? SortValue { get; set; }

        public string? InfoUri { get; set; }

        public string? ThumbUri { get; set; }

        public decimal? TopSpeedKph { get; set; }

        public decimal? MaxPowerKw { get; set; }

        public decimal? ZeroTo100 { get; set; }

        public decimal? NetBattery { get; set; }

        public decimal? WltpConsumption { get; set; }

        public decimal? WltpRange { get; set;  }

        public List<BatterySR>? Battery {get; set; }

        public decimal? MaxDcChargingSpeed { get; set; }

        public decimal? AverageDcChargingSpeed { get; set; }
    }
}
