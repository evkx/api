using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace evdb.Models
{
    public class EV
    {
        public EV()
        {
            ModelInfo = new ModelInfo();
            Brand = new Brand();
            Dimensions =  new Dimensions();
            Reviews = new List<EvReview>();
            Reviews.Add(new EvReview());
        }


        private static readonly Regex removeInvalidChars = new Regex($"[{Regex.Escape(new string(Path.GetInvalidFileNameChars()))}]",
   RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.CultureInvariant);

        public Guid? Id { get; set; }


        public Brand? Brand { get; set; }

        public ModelInfo? ModelInfo { get; set; }

        public Dimensions? Dimensions { get; set; }

        public TransportCapabilities? TransportCapabilities { get; set; }

        public Drivetrain? Drivetrain { get; set; }

        public Exterior? Exterior { get; set; }

        public DriverAssistance? DriverAssistance { get; set; }

        public UIAndControls? UIAndControls { get; set; }

        public Interior? Interior { get; set; }

        public Infotainment? Infotainment { get; set; }

        public Comfort? Comfort { get; set; }

        public Lights? Lights { get; set; }

        public List<EvReview>? Reviews { get; set; }

        public List<EvCalculations>? Calculations { get; set; }

        public List<CloudMedia> ModelPictures { get; set; }
        
        public string GetFullName()
        {
            if(!string.IsNullOrEmpty(ModelInfo?.Variant))
            {
                if(Brand?.SubBrand != null)
                {
                    return Brand?.SubBrand + " " + ModelInfo?.Variant;
                }

                if(string.IsNullOrEmpty(ModelInfo.LegacyVersion))
                {
                    return Brand?.Name + " " + ModelInfo?.Variant;
                }

                return Brand?.Name + " " + ModelInfo?.Variant + $" ({ModelInfo.LegacyVersion})";
            }

            return Brand?.Name + " " + ModelInfo?.Name;
        }


        public string? GetVariantName()
        {
            if (!string.IsNullOrEmpty(ModelInfo?.Variant))
            {
                if (!string.IsNullOrEmpty(ModelInfo.LegacyVersion))
                {
                    return ModelInfo.Variant + " " + ModelInfo.LegacyVersion;
                }

                return ModelInfo.Variant;
            }

            return ModelInfo?.Name;
        }

        public double? GetZeroTo100()
        {
            double zeroto100 = 1000;

           if(Drivetrain?.Performance != null && Drivetrain.Performance.Any())
            {
                foreach(Performance performance in Drivetrain.Performance)
                {
                    if(performance.ZeroToHundredKphBoost.HasValue && performance.ZeroToHundredKphBoost.Value < zeroto100)
                    {
                        zeroto100 = performance.ZeroToHundredKphBoost.Value;
                    }
                    else if(performance.ZeroToHundredKph.HasValue && performance.ZeroToHundredKph.Value < zeroto100)
                    {
                        zeroto100 = performance.ZeroToHundredKph.Value;
                    }
                }
            }

            return zeroto100;
        }
        

        public decimal? GetBasicTrimWltpConsumptionReal(int? rangeIndex = null)
        {
            if(Drivetrain?.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }

            Battery? battery = Drivetrain?.Battery?.FirstOrDefault();

            if(rangeIndex != null && rangeIndex.Value != 0)
            {
                if(Drivetrain.Battery.Count > (rangeIndex +1))
                {
                    battery = Drivetrain.Battery[rangeIndex.Value];
                }
            }

            RangeAndConsumption? range = Drivetrain?.RangeAndConsumption?.FirstOrDefault();

            if(battery?.NetCapacitykWh == null || range?.BasicTrimWltpRange == null)
            {
                return null;
            }

            return (battery.NetCapacitykWh / (decimal) range.BasicTrimWltpRange)*100;
            
        }

        public decimal? GetTopTrimWltpConsumptionReal(int? rangeIndex = null)
        {
            if (Drivetrain?.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }


            Battery? battery = Drivetrain?.Battery?.First();
            RangeAndConsumption? range = Drivetrain?.RangeAndConsumption?.FirstOrDefault();

            if (rangeIndex != null && rangeIndex.Value != 0)
            {
                if (Drivetrain.Battery.Count > (rangeIndex + 1))
                {
                    battery = Drivetrain.Battery[rangeIndex.Value];
                }
            }

            if (battery?.NetCapacitykWh == null || range?.TopTrimWltpRange == null)
            {
                return null;
            }

            return (battery.NetCapacitykWh / (decimal)range.TopTrimWltpRange)*100;
        }


        public decimal? GetBasicTrimEpaConsumptionReal(int? rangeIndex = null)
        {
            if (Drivetrain?.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }

            Battery? battery = Drivetrain?.Battery?.FirstOrDefault();

            if (rangeIndex != null && rangeIndex.Value != 0)
            {
                if (Drivetrain.Battery.Count > (rangeIndex + 1))
                {
                    battery = Drivetrain.Battery[rangeIndex.Value];
                }
            }

            RangeAndConsumption? range = Drivetrain?.RangeAndConsumption?.FirstOrDefault();

            if (battery?.NetCapacitykWh == null || range?.BasicTrimEpaRange == null)
            {
                return null;
            }

            return ( (decimal)range.BasicTrimEpaRange) / battery.NetCapacitykWh ;

        }

        public decimal? GetTopTrimEpaConsumptionReal(int? rangeIndex = null)
        {
            if (Drivetrain?.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }


            Battery? battery = Drivetrain?.Battery?.First();
            RangeAndConsumption? range = Drivetrain?.RangeAndConsumption?.FirstOrDefault();

            if (rangeIndex != null && rangeIndex.Value != 0)
            {
                if (Drivetrain.Battery.Count > (rangeIndex + 1))
                {
                    battery = Drivetrain.Battery[rangeIndex.Value];
                }
            }

            if (battery?.NetCapacitykWh == null || range?.TopTrimEpaRange == null)
            {
                return null;
            }

            return ((decimal)range.TopTrimEpaRange) / battery.NetCapacitykWh;
        }


        public decimal? GetConsumption120()
        {
            if(Drivetrain?.RangeAndConsumption != null && Drivetrain.RangeAndConsumption.Any())
            {

                if (Drivetrain.RangeAndConsumption[0].BasicTrim120KmhConsumption.HasValue)
                {
                    return Drivetrain.RangeAndConsumption[0].BasicTrim120KmhConsumption.Value;
                }
            }

            return null;
        }

        public int? MinimumWltpRangeBasicTrim()
        {
            int? rangeValue = 0;

            if(Drivetrain?.RangeAndConsumption != null)
            {
                foreach(RangeAndConsumption range in Drivetrain.RangeAndConsumption)
                {
                    if(rangeValue == 0 && range.BasicTrimWltpRange.HasValue || range.BasicTrimWltpRange.HasValue && range.BasicTrimWltpRange.Value < rangeValue)
                    {
                        rangeValue = range.BasicTrimWltpRange.Value;
                    }
                }
            }

            return rangeValue;
        }


        public decimal? NetBatterySizeStandardBattery()
        {
            decimal? netsize = 0;
            if (Drivetrain?.Battery != null)
            {
               netsize = Drivetrain.Battery[0].NetCapacitykWh; 
            }
            return netsize;
        }

        public decimal? WltpConsumptionBasicTrim()
        {
            decimal? wltpConsumption = 0;
            if (Drivetrain?.RangeAndConsumption != null)
            {
                wltpConsumption = Drivetrain.RangeAndConsumption[0].BasicTrimRealWltpConsumption;
            }

            return wltpConsumption;
        }

        public int? Power()
        {
            int power = 0;

            if(Drivetrain?.Performance != null)
            {
                foreach(var performance in Drivetrain.Performance)
                {
                    if(performance.PowerKw.HasValue && performance.PowerKw.Value > power)
                    {
                        power = performance.PowerKw.Value;
                    }
                }
            }

            return power;
        }

        public int? TopSpeed()
        {
            int topSpeed = 0;

            if (Drivetrain?.Performance != null)
            {
                foreach (var performance in Drivetrain.Performance)
                {
                    if (performance.TopSpeed.HasValue && performance.TopSpeed.Value > topSpeed)
                    {
                        topSpeed = performance.TopSpeed.Value;
                    }
                }
            }

            return topSpeed;
        }

        public double? MaxDCCharging()
        {
            double maxDCCharging = 0;

            if (Drivetrain?.Battery != null)
            {
                foreach(Battery bat in Drivetrain.Battery)
                {
                    if (bat.MaxDCChargeSpeed.HasValue)
                    {
                        maxDCCharging = bat.MaxDCChargeSpeed.Value;
                    }
                }
            }

            return maxDCCharging;
        }

        public int TrunkSize()
        {
            int size = 0;
            if(TransportCapabilities != null && TransportCapabilities.CargoCapacityLiter.HasValue)
            {
                size = TransportCapabilities.CargoCapacityLiter.Value;
            }

            return size;
        }

        public int MaxTrunkSize()
        {
            int size = 0;
            if (TransportCapabilities != null && TransportCapabilities.CargoCapacitySeatDownLiter.HasValue)
            {
                size = TransportCapabilities.CargoCapacitySeatDownLiter.Value;
            }

            return size;
        }

        public int MaxTrailerSize()
        {
            int size = 0;
            if (TransportCapabilities != null && TransportCapabilities.TrailerSizeBrakedKg.HasValue)
            {
                size = TransportCapabilities.TrailerSizeBrakedKg.Value;
            }

            return size;
        }


        public int MaxLoadKg()
        {
            int size = 0;
            if (TransportCapabilities != null && TransportCapabilities.MaxVehicleWeightKg.HasValue && TransportCapabilities.WeightUnladenDINKg.HasValue)
            {
                size = TransportCapabilities.MaxVehicleWeightKg.Value - TransportCapabilities.WeightUnladenDINKg.Value;
            }

            return size;
        }

        public decimal MaxNominalVoltage()
        {
            decimal voltage = 0;
            if (Drivetrain?.Battery != null && Drivetrain.Battery.Count > 0)
            {
                foreach(Battery battery in Drivetrain.Battery)
                {
                    if(battery.NominalVoltage.HasValue && battery.NominalVoltage.Value > voltage)
                    {
                        voltage = battery.NominalVoltage.Value;
                    }
                }
            }

            return voltage;
        }


        public string? GetVariantId()
        {
            string variantId = Brand.Name + " " + GetVariantName();

            return removeInvalidChars.Replace(variantId, "_").Replace(" ", "_").Replace("+", "plus").Replace("#", "hash");
        }

        public string GetEvPath()
        {
            if(!string.IsNullOrEmpty(ModelInfo.LegacyVersion))
            {
                return ("/models/" + SanitizedFileName(Brand?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Variant) + "_" + SanitizedFileName(ModelInfo?.LegacyVersion) + "/").ToLower();
            }

            return ("/models/" + SanitizedFileName(Brand?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Name.ToLower()) +"/" + SanitizedFileName(ModelInfo?.Variant)+ "/").ToLower();
        }

        public string GetRelativeVariantPath()
        {
            if (!string.IsNullOrEmpty(ModelInfo.LegacyVersion))
            {
                return (SanitizedFileName(ModelInfo?.Variant) + "_" + SanitizedFileName(ModelInfo?.LegacyVersion) + "/").ToLower();
            }

            return (SanitizedFileName(ModelInfo?.Variant) + "/").ToLower();
        }

        public string SanitizedFileName(string? fileName, string replacement = "_")
        {
            if (fileName == null)
            {
                return null;
            }

            return removeInvalidChars.Replace(fileName, replacement).Replace(" ", "_").Replace("+", "plus").Replace("#", "hash");
        }

        public int MaxGroundClearance()
        {
            int maxGroundClearance = 0;

            if(Drivetrain?.Suspension != null && Drivetrain.Suspension.Any())
            {
                foreach(var d in Drivetrain.Suspension)
                {
                    if(d.MaxGroundClearanceMM.HasValue && d.MaxGroundClearanceMM.Value > maxGroundClearance)
                    {
                        maxGroundClearance = d.MaxGroundClearanceMM.Value;
                    }
                }

            }

            return maxGroundClearance;
        }

        public int MinGroundClearance()
        {
            int minGroundClearance = 1337;

            if (Drivetrain?.Suspension != null && Drivetrain.Suspension.Any())
            {
                foreach (var d in Drivetrain.Suspension)
                {
                    if (d.MinGroundClearanceMM.HasValue && d.MinGroundClearanceMM.Value < minGroundClearance)
                    {
                        minGroundClearance = d.MinGroundClearanceMM.Value;
                    }
                }

            }

            return minGroundClearance;
        }

        public int SuspensionAdjustment()
        {
            int heightAdjustment = 0;

            if (Drivetrain?.Suspension != null && Drivetrain.Suspension.Any())
            {
                foreach (var d in Drivetrain.Suspension)
                {
                    if (d.MinGroundClearanceMM.HasValue && d.MaxGroundClearanceMM.HasValue)
                    {
                        if((d.MaxGroundClearanceMM.Value - d.MinGroundClearanceMM.Value) > heightAdjustment)

                        heightAdjustment = d.MaxGroundClearanceMM.Value - d.MinGroundClearanceMM.Value;
                    }
                }

            }

            return heightAdjustment;
        }

        public decimal Length()
        {
            decimal length = 0;
            if(Dimensions != null && Dimensions.Length.HasValue)
            {
                length = Dimensions.Length.Value;
            }

            return length;
        }

        public decimal Wheelbase()
        {
            decimal wheelbase = 0;
            if (Dimensions != null && Dimensions.Wheelbase.HasValue)
            {
                wheelbase = Dimensions.Wheelbase.Value;
            }

            return wheelbase;
        }

        public int WeightUnladenDINKg()
        {
            int weightUnladenDINKg = 0;
            if (TransportCapabilities != null && TransportCapabilities.WeightUnladenDINKg.HasValue)
            {
                weightUnladenDINKg = TransportCapabilities.WeightUnladenDINKg.Value;
            }

            return weightUnladenDINKg;
        }

    }
}
