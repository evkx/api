using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class BatterySwap
    {
        public int? BatterySwapTime { get; set; }

        public int? BatterySwapSoc { get; set; }

        public bool? BatteryAsAService { get; set; }
    }
}
