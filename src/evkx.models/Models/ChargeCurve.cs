using evdb.models.Enums;
using evdb.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines charge curve for the battery
    /// 
    /// </summary>
    public class ChargeCurve
    {
        private List<ChargeSpeed>? _fullChargeCurve;


        public ChargeCurve()
        {
            ChargeSpeed = new List<ChargeSpeed>();
            for (int i = 0; i < 101; i++)
            {
                ChargeSpeed chargeSpeed = new ChargeSpeed();
                chargeSpeed.SOC = i;
                ChargeSpeed.Add(chargeSpeed);
            }
        }

        /// <summary>
        /// Defines the charge curve for the battery
        /// </summary>
        public List<ChargeSpeed>? ChargeSpeed { get; set; }

        /// <summary>
        /// Defines the status of the curve
        /// </summary>
        public CurveStatus? CurveStatus { get; set; }

        /// <summary>
        /// Defines the type of the curve
        /// </summary>
        public ChargingCurveType? ChargingCurveType { get; set; }   


        /// <summary>
        /// Returns the full charge curve for the battery
        /// </summary>
        /// <returns></returns>
        public List<ChargeSpeed> GetFullChargeCurve()
        {
            if (_fullChargeCurve == null)
            {
                List<ChargeSpeed> calculatedCurve = new List<ChargeSpeed>();

                if (ChargeSpeed != null)
                {
                    List<ChargeSpeed> sortedCurve = ChargeSpeed.OrderBy(r => r.SOC).ToList();
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

        /// <summary>
        /// Finds the missing charge speeds for the battery
        /// </summary>
        /// <param name="sortedCurve"></param>
        /// <returns></returns>
        private static List<ChargeSpeed> FindMissingChargeSpeeds(List<ChargeSpeed> sortedCurve)
        {
            List<ChargeSpeed> fullCurve = new List<ChargeSpeed>();
            int index = 0;
            decimal lastValidKwSpeed = 0;

            if (sortedCurve.Count == 101 && !sortedCurve.Any(sortedCurve => !sortedCurve.SpeedKw.HasValue || sortedCurve.SpeedKw.Value == 0))
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
