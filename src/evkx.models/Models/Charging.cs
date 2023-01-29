using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    public class Charging
    {
        public List<Chargeport>? Chargeports { get; set; }

        public List<Charger>? OnBoardChargers { get; set; }

        public int? Charge5To80SocInSeconds { get; set; }

        public int? Charge20To80SocInSeconds { get; set; }

        public BatterySwap? BatterySwap { get; set; }
    }
}
