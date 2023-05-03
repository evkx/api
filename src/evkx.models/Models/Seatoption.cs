using evdb.models.Enums;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Seatoption
    {

        public Seatoption()
        {
            SeatCategory = models.Enums.SeatCategory.None;
            ElectricAdjustment = new EVFeature();
            ElectricLumbarAdjustment = new EVFeature();
            Massage = new EVFeature();
            Ventilation = new EVFeature();
            SeatHeating = new EVFeature();
            MemoryDriverSeat = new EVFeature();
            MemoryPassangerSeat = new EVFeature();
            IntegratedHeadrest = new EVFeature();
            HeightAdjustableHeadrest = new EVFeature();
            LengthAdjustableHeadrest = new EVFeature();
            AdjustableThighSupport = new EVFeature();
            ReclineAdjustment = new EVFeature();
            ElectricAdjustableThighSupport = new EVFeature();
            AdjustableSideSupportBack = new EVFeature();
            AdjustableSideSupportBottom = new EVFeature();
            EasyAccessDriverSeat = new EVFeature();
            EasyAccessPassenger = new EVFeature();
            FootrestPassenger = new EVFeature();
            LegSupportPassenger = new EVFeature();
            Foldable = new EVFeature();
            ElectricFoldable = new EVFeature();
        }

        public bool? Standard { get; set; }
        public string? Name { get; set; }

        public string? OptionId { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SeatCategory? SeatCategory { get; set; }

        public string? SeatSplit { get; set; }

        public EVFeature? ForeAndAftAdjustment { get; set; }

        public EVFeature? HeightAdjustment { get; set; }

        public EVFeature? SeatCushionAngleAdjustment { get; set; }

        public EVFeature? ElectricAdjustment { get; set; }

        public EVFeature? ElectricLumbarAdjustment { get; set; }

        public EVFeature? Massage { get; set; }

        public EVFeature? Ventilation { get; set; }

        public EVFeature? SeatHeating { get; set; }

        public EVFeature? MemoryDriverSeat { get; set; }

        public EVFeature? MemoryPassangerSeat { get; set; }

        public EVFeature? IntegratedHeadrest { get; set; }

        public EVFeature? HeightAdjustableHeadrest { get; set; }

        public EVFeature? LengthAdjustableHeadrest { get; set; }

        public EVFeature? AdjustableThighSupport { get; set; }

        public EVFeature? ReclineAdjustment { get; set; }

        public EVFeature? ElectricAdjustableThighSupport { get; set; }

        public EVFeature? AdjustableSideSupportBack { get; set; }

        public EVFeature? AdjustableSideSupportBottom { get; set; }

        public EVFeature? EasyAccessDriverSeat { get; set; }

        public EVFeature? EasyAccessPassenger { get; set; }

        public EVFeature? FootrestPassenger { get; set; }

        public EVFeature? LegSupportPassenger { get; set; }

        public EVFeature? Foldable { get; set; }

        public EVFeature? ElectricFoldable { get; set; }
    }
}
