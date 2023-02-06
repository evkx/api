using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace evkx.models.Models.Search
{
    public class EvSearch
    {
        public int? MinimumWltpRange { get; set; }

        public int? MinimumGrossBattery { get; set; }

        public bool? AllWheelDrive { get; set; }

        public List<string>? Brand { get; set; }

        public bool? NightVision { get; set; }

        public bool? AdaptiveSuspension { get; set; }

        public bool? AirSuspension { get; set; }

        public SortOrder? SortOrder { get; set; }

        public List<EvBodyType>? EvType { get; set; }

        public List<string>? Brands { get; set; }

        public List<string>? SeatConfiguration { get; set; }


        public bool? SeatMassageFirstRow { get; set; }

        public bool? SeatVentilationFirstRow { get; set; }

        public bool? SeatMassageSecondRow { get; set; }

        public bool? SeatVentilationSecondRow { get; set; }

        public bool? InstrumentCluster { get; set; }

    }
}
