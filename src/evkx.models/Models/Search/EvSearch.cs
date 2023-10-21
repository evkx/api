using evdb.models.Enums;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace evkx.models.Models.Search
{
    public class EvSearch
    {
        [ValidateNever]
        public string? MinimumWltpRange { get; set; }

        public int? MinimumGrossBattery { get; set; }

        public bool? AllWheelDrive { get; set; }

        public bool? FWD { get; set; }

        public bool? RWD { get; set; }

        public List<string>? Brand { get; set; }

        public bool? NightVision { get; set; }

        public bool? AdaptiveSuspension { get; set; }

        public bool? AirSuspension { get; set; }


        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SortOrder? SortOrder { get; set; }

        public List<EvBodyType>? EvType { get; set; }

        public List<string>? Brands { get; set; }

        public List<string>? SeatConfiguration { get; set; }

        public bool? SeatMassageFirstRow { get; set; }

        public bool? SeatVentilationFirstRow { get; set; }

        public bool? SeatMassageSecondRow { get; set; }

        public bool? SeatVentilationSecondRow { get; set; }

        public bool? InstrumentCluster { get; set; }

        public bool? HeadUpDisplay { get; set; }

        public bool? AppleCarPlay { get; set; }

        public bool? AndroidAuto { get; set; }

        public List<string>? Colors { get; set; }

        public bool? RearAxleSteering { get; set; }

        public bool? AdaptiveCruiseControl { get; set; }

        public bool? AutoSteer { get; set; }

        public bool? AutomaticParking { get; set; }

        public bool? BlindSpotMonitoring { get; set; }

        public bool? AutomatedLaneChange { get; set; }

        public bool? DriverDrowsinessDetection { get; set; }

        public bool? DriverMonitoringSystem { get; set; }

        public bool? RearCrossTrafficAlert { get; set; }

        public bool? ExitWarning { get; set; }

        public bool? TrafficSignRecognition { get; set; }

        public bool? EfficiencyAssist { get; set; }

        public bool? LfpChemistry { get; set; }

        public bool? BatteryHeatingNavigation { get; set; }

        public bool? BatteryHeatingManual { get; set; }

        public bool? FirstRowSeatsHeating { get; set; }

        public bool? FirstRowSeatsVentilation { get; set; }

        public bool? FirstRowSeatsMassage { get; set; }

        public bool? FirstRowAdjustableThighSupport { get; set; }

        public bool? SecondRowSeatsHeating { get; set; }

        public bool? SecondRowSeatsVentilation { get; set; }

        public bool? SecondRowSeatsMassage { get; set; }

        public bool? SecondRowRecline { get; set; }

        public bool? SecondRowExecutiveSeat { get; set; }

        public bool? ChargePortFront { get; set; }

        public bool? ChargePortFrontLeft { get; set; }

        public bool? ChargePortFrontRight { get; set; } 

        public bool? ChargePortRearLeft { get; set; }   

        public bool? ChargePortRearRight { get; set; }

        public bool? LiftOfRegen { get; set; }

        public bool? LiftOfRegenWithHoldMode { get; set; }

        public bool? BlendedBrakes { get; set; }

        public bool? AdaptiveRegen { get; set; }

        public bool? LiftOfRegenLevels { get; set; }

        public bool? Coasting { get; set; }

        public bool? IncludeDiscontinued { get; set; }

        public string? MinimumHp { get; set; }

        public string? MinimumTrailerWeight { get; set; }

    }
}
