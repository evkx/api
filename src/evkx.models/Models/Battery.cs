using evkx.models.Models.Search;
using System;
using System.Collections.Generic;
using System.Linq;

namespace evdb.Models
{
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
 
        public string? PackConfiguration { get; set; }

        public CellInfo? CellInfo { get; set; }

        public decimal? NominalVoltage { get; set; }

        public decimal? BatteryCapacityAh { get; set; }

        public List<ChargeSpeed>? ChargeCurve { get; set; }

        public double? MaxDCChargeSpeed { get; set; }

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

        public List<ChargeSpeed>? GetFullChargeCurve()
        {
            if(ChargeCurve == null)
            {
                return null;
            }

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
                    lastValidKwSpeed = chargeSpeed.SpeedKw.Value;
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
