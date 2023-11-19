using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class EvCalculations
    {
        public decimal? AverageChargingSpeed { get; set; }

        public decimal? AverageChargingSpeed10100 { get; set; }

        public decimal? AverageChargingSpeed1080 { get; set; }

        public decimal? AverageChargingSpeed1090 { get; set; }

        public decimal? TravelSpeed120kmh { get; set; }

        public decimal? TravelSpeed90kmh { get; set; }

        public decimal? TravelSpeedWltp { get; set; }

        public decimal? DriveTime1000kmChallenge { get; set; }

        public decimal? AverageSpeed1000kmChallenge { get; set; }

        public decimal? EnergyChargedFrom10Percent10minutes { get; set; }
        
        public decimal? EnergyChargedFrom10Percent15Minutes { get; set; }
        
        public decimal? EnergyChargedFrom10Percent20minutes { get; set; }

        public decimal? EnergyChargedFrom10Percent25minutes { get; set; }

        public decimal? EnergyChargedFrom10Percent30minutes { get; set; }

        public decimal? AverageCRating { get; set; }

        public decimal? MaxCRating { get; set; }

    }
}
