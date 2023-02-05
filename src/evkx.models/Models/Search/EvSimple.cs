using System;
using System.Collections.Generic;
using System.Text;

namespace evkx.models.Models.Search
{
    public class EvSimple
    {
        public string? Name { get; set; }

        public string? SortParameter { get; set; }

        public string? SortValue { get; set; }

        public string? InfoUri { get; set; }

        public int? TopSpeedKph { get; set; }

        public int? MaxPowerKw { get; set; }

        public List<BatterySR>? Battery {get; set; }
    }
}
