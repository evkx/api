using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace evdb.Models
{
    /// <summary>
    /// Defines the battery for an EV.
    /// </summary>
    public class Battery
    {

        private List<ChargeSpeed>? _fullChargeCurve;

        public Battery()
        {
            CellInfo = new CellInfo();
        }

        /// <summary>
        /// Defines if this battery is an optional battery for the EV or standard
        /// </summary>
        public bool? Optional { get; set; }

        /// <summary>
        /// Defines the name for the battery. 
        /// </summary>
        public string? Name { get; set; }


        /// <summary>
        /// Defines the gross capacity of the battery in kWh
        /// </summary>
        public decimal? GrossCapacitykWh { get; set; }

        /// <summary>
        /// Defines the net capacity of the battery in kWh
        /// </summary>
        public decimal? NetCapacitykWh { get; set; }

        /// <summary>
        /// Defines the weight of the battery in kg
        /// </summary>
        public decimal? WeightKg { get; set; }

        /// <summary>
        /// Defines the type of the battery
        /// </summary>
        public string? BatteryType { get; set; }

        /// <summary>
        /// Defines the modules of the battery
        /// </summary>
        public string? Modules { get; set; }

        /// <summary>
        /// Defines the number of cells per module
        /// </summary>
        public string? CellPerModule { get; set; }
 
        /// <summary>
        /// Defines the pack configuration of the battery
        /// </summary>
        public string? PackConfiguration { get; set; }

        /// <summary>
        /// Defines the cell information for the battery
        /// </summary>
        public CellInfo? CellInfo { get; set; }

        /// <summary>
        /// Defines the nominal voltage of the battery
        /// </summary>
        public decimal? NominalVoltage { get; set; }

        /// <summary>
        /// Defines the battery capacity in Ah
        /// </summary>
        public decimal? BatteryCapacityAh { get; set; }

        /// <summary>
        /// Defines the charge curves for the battery
        /// </summary>
        public List<ChargeCurve> ChargeCurves { get; set; } 
        
        /// <summary>
        /// Defines the maximum DC charge speed for the battery
        /// </summary>
        public double? MaxDCChargeSpeed { get; set; }

        /// <summary>
        /// Defines the charging configuration for the battery
        /// </summary>
        public ChargingConfiguration? ChargingConfiguration { get; set; }
        
        /// <summary>
        /// Defines the maximum DC charge speed for low voltage
        /// </summary>
        public double? MaxDCChargeSpeedLowVoltage { get; set; }

        /// <summary>
        /// Calculates the buffer size for the battery
        /// </summary>
        /// <returns></returns>
        public decimal? GetBufferSize()
        {
            if (!NetCapacitykWh.HasValue || !GrossCapacitykWh.HasValue)
            {
                return 0;
            }

            return GrossCapacitykWh.Value - NetCapacitykWh.Value;
        }

        /// <summary>
        /// Calculates the buffer percent for the battery
        /// </summary>
        /// <returns></returns>
        public decimal? GetBufferPercent()
        {
            if(!NetCapacitykWh.HasValue || !GrossCapacitykWh.HasValue)
            {
                return 0;
            }

            return 100-(NetCapacitykWh.Value / GrossCapacitykWh.Value) * 100;
        }

        /// <summary>
        /// Returns the full charge curve for the battery
        /// </summary>
        /// <returns></returns>
        public List<ChargeSpeed> GetFullChargeCurve()
        {
            if(ChargeCurves != null)
            {
                return ChargeCurves[0].GetFullChargeCurve();
            }

            return new List<ChargeSpeed>();
        }

        public void CalculateChargeTime()
        {
            if(ChargeCurves != null)
            {
                foreach(ChargeCurve chargeCurve in ChargeCurves)
                {
                    if(NetCapacitykWh.HasValue)
                    {
                        chargeCurve.CalculateChargeTime(NetCapacitykWh.Value);
                    }
                }
            }
        }


        /// <summary>
        /// Calculates the data quality for the battery
        /// </summary>
        /// <returns></returns>
        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Battery" };


            if (Optional == null)
            {
                dataQualityScore.ReduceScore(5, "Optional");
            }

            if (string.IsNullOrEmpty(Name))
            {
                dataQualityScore.ReduceScore(5, "Name");
            }

            if (!GrossCapacitykWh.HasValue)
            {
                dataQualityScore.ReduceScore(10, "GrossCapacitykWh");
            }

            if (!NetCapacitykWh.HasValue)
            {
                dataQualityScore.ReduceScore(10, "NetCapacitykWh");
            }

            if (!WeightKg.HasValue)
            {
                dataQualityScore.ReduceScore(1, "WeightKg");
            }

            if (string.IsNullOrEmpty(BatteryType))
            {
                dataQualityScore.ReduceScore(1, "BatteryType");
            }

            if (string.IsNullOrEmpty(Modules))
            {
                dataQualityScore.ReduceScore(1, "Modules");
            }

            if(string.IsNullOrEmpty(CellPerModule))
            {
                dataQualityScore.ReduceScore(1, "CellPerModule");
            }

            if(string.IsNullOrEmpty(PackConfiguration))
            {
                dataQualityScore.ReduceScore(1,"PackConfiguration");
            }

            if(CellInfo == null)
            {
                dataQualityScore.ReduceScore(13, "CellInfo");
            }
            else
            {
                dataQualityScore.AddSubScore(CellInfo.CalculateDataQuality());
            }

            if(!NominalVoltage.HasValue)
            {
                dataQualityScore.ReduceScore(5, "NominalVoltage");
            }

            if(!BatteryCapacityAh.HasValue)
            {
                dataQualityScore.ReduceScore(1,"BatteryCapacityAh");
            }

            if(!MaxDCChargeSpeed.HasValue)
            {
                dataQualityScore.ReduceScore(50, "MaxDCChargeSpeed");
            }
           
            if(ChargingConfiguration == null)
            {
                dataQualityScore.ReduceScore(1, "ChargingConfiguration");
            }

            if(!MaxDCChargeSpeedLowVoltage.HasValue)
            {
                dataQualityScore.ReduceScore(1, "MaxDCChargeSpeedLowVoltage");
            }

            return dataQualityScore;

        }
    }
}
