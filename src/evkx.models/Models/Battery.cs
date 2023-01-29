using System.Collections.Generic;

namespace evdb.Models
{
    public class Battery
    {
        public Battery()
        {
            ChargeCurve = new List<ChargeSpeed>();
            for(int i = 0; i < 101; i++)
            {
                ChargeSpeed chargeSpeed = new ChargeSpeed();
                chargeSpeed.SOC = i;
                ChargeCurve.Add(chargeSpeed);
            }
            CellInfo = new CellInfo();
        }

        /// <summary>
        /// 
        /// </summary>
        /// 
        public bool? Optional { get; set; }

        public string? Name { get; set; }

        public decimal? GrossCapacitykWh { get; set; }

        public decimal? NetCapacitykWh { get; set; }

        public decimal? WeightKg { get; set; }

        public string? BatteryType { get; set; }

        public string? Modules { get; set; }

        public string? CellPerModule { get; set; }
 
        public string? CellArchitecture { get; set; }

        public CellInfo? CellInfo { get; set; }

        public decimal? NominalVoltage { get; set; }

        public decimal? BatteryCapacityAh { get; set; }

        public List<ChargeSpeed>? ChargeCurve { get; set; }

        public double? MaxDCChargeSpeed { get; set; }

        public EVFeature? Heating { get; set; }

        public EVFeature? ManualTriggerHeating { get; set; }

        public EVFeature? HeatingWhenNavigateToCharger { get; set; }

        public decimal? GetBufferSize()
        {
            if (!NetCapacitykWh.HasValue || !GrossCapacitykWh.HasValue)
            {
                return 0;
            }

            return GrossCapacitykWh.Value - NetCapacitykWh.Value;
        }

        public decimal? GetBufferPercent()
        {
            if(!NetCapacitykWh.HasValue || !GrossCapacitykWh.HasValue)
            {
                return 0;
            }

            return 100-(NetCapacitykWh.Value / GrossCapacitykWh.Value) * 100;
        }

    }
}
