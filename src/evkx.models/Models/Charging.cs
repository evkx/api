using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    public class Charging
    {
        public Charging() 
        {

            ManualTriggerHeating = new EVFeature();
            HeatingWhenNavigateToCharger = new EVFeature();
        }

        public List<Chargeport>? Chargeports { get; set; }

        public List<Charger>? OnBoardChargers { get; set; }

        public BatterySwap? BatterySwap { get; set; }

        public EVFeature? ManualTriggerHeating { get; set; }

        public EVFeature? HeatingWhenNavigateToCharger { get; set; }
    }
}
