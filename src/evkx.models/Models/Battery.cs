using evdb.models.Enums;
using evdb.models.Models;
using evkx.models.Models.Search;
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
        /// Defines if this battery is an optional battery for the EV or standard
        /// </summary>
        public bool? Optional { get; set; }

        /// <summary>
        /// Defines the name for the battery. 
        /// </summary>
        public string? Name { get; set; }

        public decimal? GrossCapacitykWh { get; set; }

        public decimal? NetCapacitykWh { get; set; }

        public decimal? WeightKg { get; set; }

        public string? BatteryType { get; set; }

        public string? Modules { get; set; }

        public string? CellPerModule { get; set; }
 
        public string? PackConfiguration { get; set; }

        public CellInfo? CellInfo { get; set; }

        public decimal? NominalVoltage { get; set; }

        public decimal? BatteryCapacityAh { get; set; }

        public List<ChargeSpeed>? ChargeCurve { get; set; }

        public CurveStatus? CurveStatus { get; set; }   

        public double? MaxDCChargeSpeed { get; set; }

        public ChargingConfiguration? ChargingConfiguration { get; set; }
        
        public double? MaxDCChargeSpeedLowVoltage { get; set; }

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

        public List<ChargeSpeed> GetFullChargeCurve()
        {
            if (_fullChargeCurve == null)
            {
                List<ChargeSpeed> calculatedCurve = new List<ChargeSpeed>();

                if (ChargeCurve != null)
                {
                    List<ChargeSpeed> sortedCurve = ChargeCurve.OrderBy(r => r.SOC).ToList();
                    calculatedCurve = FindMissingChargeSpeeds(sortedCurve);
                }
                _fullChargeCurve = calculatedCurve;

                return _fullChargeCurve;
            }
            else
            {
                return _fullChargeCurve;
            }
        }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Battery" };


            if (Optional == null)
            {
                dataQualityScore.DataQuality--;
            }

            if (string.IsNullOrEmpty(Name))
            {
                dataQualityScore.DataQuality--;
            }

            if (!GrossCapacitykWh.HasValue)
            {
                dataQualityScore.DataQuality -= 10;
            }

            if (!NetCapacitykWh.HasValue)
            {
                dataQualityScore.DataQuality -= 10;
            }

            if (!WeightKg.HasValue)
            {
                dataQualityScore.DataQuality--;
            }

            if (string.IsNullOrEmpty(BatteryType))
            {
                dataQualityScore.DataQuality--;
            }

            if (string.IsNullOrEmpty(Modules))
            {
                dataQualityScore.DataQuality--;
            }

            if(string.IsNullOrEmpty(CellPerModule))
            {
                dataQualityScore.DataQuality--;
            }

            if(string.IsNullOrEmpty(PackConfiguration))
            {
                dataQualityScore.DataQuality--;
            }

            if(CellInfo == null)
            {
                dataQualityScore.DataQuality -=13;
            }
            else
            {
                dataQualityScore.AddSubScore(CellInfo.CalculateDataQuality());
            }

            if(!NominalVoltage.HasValue)
            {
                dataQualityScore.DataQuality -= 5;
            }

            if(!BatteryCapacityAh.HasValue)
            {
                dataQualityScore.DataQuality--;
            }

            if(ChargeCurve == null || ChargeCurve.Count != 101)
            {
                dataQualityScore.DataQuality -= 10;
            }

            if(CurveStatus == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(!MaxDCChargeSpeed.HasValue)
            {
                dataQualityScore.DataQuality -= 10;
            }
           
            if(ChargingConfiguration == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(!MaxDCChargeSpeedLowVoltage.HasValue)
            {
                dataQualityScore.DataQuality--;
            }

            return dataQualityScore;

        }

        private static List<ChargeSpeed> FindMissingChargeSpeeds(List<ChargeSpeed> sortedCurve)
        {
            List<ChargeSpeed> fullCurve = new List<ChargeSpeed>();
            int index = 0;
            decimal lastValidKwSpeed = 0;

            if(sortedCurve.Count == 101 && !sortedCurve.Any(sortedCurve => !sortedCurve.SpeedKw.HasValue || sortedCurve.SpeedKw.Value == 0))
            {
                // There is no missing. 
                return sortedCurve;
            }

            foreach (ChargeSpeed chargeSpeed in sortedCurve)
            {
                if (!chargeSpeed.SpeedKw.HasValue && chargeSpeed.SOC != 100)
                {
                    // If the value is null for speed for a given SOC we throw that away
                    continue;
                }

                if (chargeSpeed.SOC == 100 && !chargeSpeed.SpeedKw.HasValue)
                {
                    chargeSpeed.SpeedKw = lastValidKwSpeed;
                }

                if (chargeSpeed.SOC == index)
                {
                    fullCurve.Add(chargeSpeed);
                    if (chargeSpeed.SpeedKw != null)
                    {
                        lastValidKwSpeed = chargeSpeed.SpeedKw.Value;
                    }
                    index++;
                }
                else
                {
                    decimal avgSpeed = (chargeSpeed.SpeedKw.Value + lastValidKwSpeed) / 2;

                    int numberOfMissingChargingPoints = chargeSpeed.SOC - index;
                    decimal difference = chargeSpeed.SpeedKw.Value - lastValidKwSpeed;
                    decimal differencePerMissing = difference / (numberOfMissingChargingPoints + 1);

                    decimal current = lastValidKwSpeed;
                    for (int i = 0; i < numberOfMissingChargingPoints; i++)
                    {
                        current = current + differencePerMissing;
                        ChargeSpeed missingChargeSpeed = new ChargeSpeed() { SOC = index + i, SpeedKw = current };
                        fullCurve.Add(missingChargeSpeed);
                    }

                    fullCurve.Add(chargeSpeed);
                    lastValidKwSpeed = chargeSpeed.SpeedKw.Value;
                    index = chargeSpeed.SOC;
                    index++;
                }

            }

            if (fullCurve.Count != 101)
            {
                Console.WriteLine("OH NO. Charge curve not complete");
            }

            return fullCurve;
        }

    }
}
