using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace evdb.Models
{
    /// <summary>
    /// Defines all aspects of an EV. 
    /// </summary>
    public class EV
    {
        /// <summary>
        /// Default constructor for the EV
        /// </summary>
        public EV()
        {
            ModelInfo = new ModelInfo(string.Empty, string.Empty);
            Brand = new Brand() { Name = string.Empty };
            Dimensions = new Dimensions();
            Reviews = new List<EvReview>();
            Drivetrain = new Drivetrain();
            Interior = new Interior();
            Exterior = new Exterior();
            Lights = new Lights();
            Comfort = new Comfort();
            TransportCapabilities = new TransportCapabilities();
            ModelPictures = new List<CloudMedia>();
            Infotainment = new Infotainment();
        }


        private static readonly Regex removeInvalidChars = new Regex($"[{Regex.Escape(new string(Path.GetInvalidFileNameChars()))}]",
   RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.CultureInvariant);


        private string? _md5Hash;

        /// <summary>
        /// The unique identifier for the EV in the EVKX.net database
        /// </summary>
        public Guid? Id { get; set; }

        /// <summary>
        /// Information about the brand of the EV
        /// </summary>
        public Brand Brand { get; set; }

        /// <summary>
        /// Information about the model of the EV
        /// </summary>
        public ModelInfo ModelInfo { get; set; }

        /// <summary>
        /// Defines the dimensions of the EV
        /// </summary>
        public Dimensions Dimensions { get; set; }

        /// <summary>
        /// Defines the transport capabilities of the EV
        /// </summary>
        public TransportCapabilities TransportCapabilities { get; set; }

        /// <summary>
        /// Defines the drivetrain of the EV
        /// </summary>
        public Drivetrain Drivetrain { get; set; }

        /// <summary>
        /// Defines exterior features of the EV
        /// </summary>
        public Exterior Exterior { get; set; }

        /// <summary>
        /// Defines the driver assistance features of the EV
        /// </summary>
        public DriverAssistance? DriverAssistance { get; set; }

        /// <summary>
        /// Defines the user interface and controls of the EV
        /// </summary>
        public UIAndControls? UIAndControls { get; set; }

        /// <summary>
        /// Defines the interior of the EV
        /// </summary>
        public Interior Interior { get; set; }

        /// <summary>
        /// Defines the infotainment system of the EV
        /// </summary>
        public Infotainment Infotainment { get; set; }

        /// <summary>
        /// Defines the comfort features of the EV
        /// </summary>
        public Comfort Comfort { get; set; }

        /// <summary>
        /// Defines the exterior lights of the EV
        /// </summary>
        public Lights Lights { get; set; }

        /// <summary>
        /// List of reviews for the EV
        /// </summary>
        public List<EvReview>? Reviews { get; set; }

        /// <summary>
        /// List of calculations for the EV
        /// </summary>
        public List<EvCalculations>? Calculations { get; set; }

        /// <summary>
        /// List of media for the EV
        /// </summary>
        public List<CloudMedia> ModelPictures { get; set; }

        /// <summary>
        /// Gets the full name of the EV
        /// </summary>
        public string GetFullName()
        {
            if (!string.IsNullOrEmpty(ModelInfo?.Variant))
            {
                if (Brand?.SubBrand != null)
                {
                    return Brand?.SubBrand + " " + ModelInfo?.Variant;
                }

                if (string.IsNullOrEmpty(ModelInfo.LegacyVersion))
                {
                    return Brand?.Name + " " + ModelInfo?.Variant;
                }

                return Brand?.Name + " " + ModelInfo?.Variant + $" ({ModelInfo.LegacyVersion})";
            }

            return Brand?.Name + " " + ModelInfo?.Name;
        }

        public string GetModelName()
        {
            return Brand?.Name + " " + ModelInfo?.Name;
        }


        public string GetVariantName()
        {
            if (!string.IsNullOrEmpty(ModelInfo?.Variant))
            {
                if (!string.IsNullOrEmpty(ModelInfo.LegacyVersion))
                {
                    return ModelInfo.Variant + " " + ModelInfo.LegacyVersion;
                }

                return ModelInfo.Variant;
            }

            return ModelInfo.Name;
        }

        public decimal? GetZeroTo100()
        {
            decimal zeroto100 = 1000;

            if (Drivetrain?.Performance != null && Drivetrain.Performance.Any())
            {
                foreach (Performance performance in Drivetrain.Performance)
                {
                    if (performance.ZeroToHundredKphBoost.HasValue && performance.ZeroToHundredKphBoost.Value < zeroto100)
                    {
                        zeroto100 = performance.ZeroToHundredKphBoost.Value;
                    }
                    else if (performance.ZeroToHundredKph.HasValue && performance.ZeroToHundredKph.Value < zeroto100)
                    {
                        zeroto100 = performance.ZeroToHundredKph.Value;
                    }
                }
            }

            return zeroto100;
        }

        public void SetHash(string hash)
        {
            _md5Hash = hash;
        }


        public string GetHash()
        {
            return _md5Hash;
        }


        public decimal? GetBasicTrimWltpConsumptionReal(int? rangeIndex = null)
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

            if (battery?.NetCapacitykWh == null || range?.BasicTrimWltpRange == null)
            {
                return null;
            }

            return (battery.NetCapacitykWh / (decimal)range.BasicTrimWltpRange) * 100;

        }

        public decimal? GetTopTrimWltpConsumptionReal(int? rangeIndex = null)
        {
            if (Drivetrain.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }


            Battery? battery = Drivetrain.Battery?.First();
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

            return (battery.NetCapacitykWh / (decimal)range.TopTrimWltpRange) * 100;
        }


        public decimal? GetBasicTrimEpaConsumptionReal(int? rangeIndex = null)
        {
            if (Drivetrain.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }

            Battery? battery = Drivetrain.Battery?.FirstOrDefault();

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

            return ((decimal)range.BasicTrimEpaRange) / battery.NetCapacitykWh;

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


        public decimal? GetBasicTrimCLTCConsumptionReal(int? rangeIndex = null)
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

            if (battery?.NetCapacitykWh == null || range?.BasicTrimCLTCRange == null)
            {
                return null;
            }

            return (battery.NetCapacitykWh / (decimal)range.BasicTrimCLTCRange) * 100;
        }


        public decimal? GetConsumption120()
        {
            if (Drivetrain?.RangeAndConsumption != null && Drivetrain.RangeAndConsumption.Any())
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

            if (Drivetrain?.RangeAndConsumption != null)
            {
                foreach (RangeAndConsumption range in Drivetrain.RangeAndConsumption)
                {
                    if (rangeValue == 0 && range.BasicTrimWltpRange.HasValue || range.BasicTrimWltpRange.HasValue && range.BasicTrimWltpRange.Value < rangeValue)
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

        public decimal? Power()
        {
            decimal power = 0;

            if (Drivetrain?.Performance != null)
            {
                foreach (var performance in Drivetrain.Performance)
                {
                    if (performance.PowerKw.HasValue && performance.PowerKw.Value > power)
                    {
                        power = performance.PowerKw.Value;
                    }
                }
            }

            return power;
        }

        public decimal? TopSpeed()
        {
            decimal topSpeed = 0;

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
                foreach (Battery bat in Drivetrain.Battery)
                {
                    if (bat.MaxDCChargeSpeed.HasValue)
                    {
                        maxDCCharging = bat.MaxDCChargeSpeed.Value;
                    }
                }
            }

            return maxDCCharging;
        }

        public decimal TrunkSize()
        {
            decimal size = 0;
            if (TransportCapabilities != null && TransportCapabilities.CargoCapacityLiter.HasValue)
            {
                size = TransportCapabilities.CargoCapacityLiter.Value;
            }

            return size;
        }

        public decimal MaxTrunkSize()
        {
            decimal size = 0;
            if (TransportCapabilities != null && TransportCapabilities.CargoCapacitySeatDownLiter.HasValue)
            {
                size = TransportCapabilities.CargoCapacitySeatDownLiter.Value;
            }

            return size;
        }

        public decimal MaxTrailerSize()
        {
            decimal size = 0;
            if (TransportCapabilities != null && TransportCapabilities.TrailerSizeBrakedKg.HasValue)
            {
                size = TransportCapabilities.TrailerSizeBrakedKg.Value;
            }

            return size;
        }


        public decimal MaxLoadKg()
        {
            decimal size = 0;
            if (TransportCapabilities != null && TransportCapabilities.MaxVehicleWeightKg.HasValue && TransportCapabilities.CurbWeight.HasValue)
            {
                size = TransportCapabilities.MaxVehicleWeightKg.Value - TransportCapabilities.CurbWeight.Value;
            }

            return size;
        }

        public decimal MaxNominalVoltage()
        {
            decimal voltage = 0;
            if (Drivetrain?.Battery != null && Drivetrain.Battery.Count > 0)
            {
                foreach (Battery battery in Drivetrain.Battery)
                {
                    if (battery.NominalVoltage.HasValue && battery.NominalVoltage.Value > voltage)
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
            if (!string.IsNullOrEmpty(ModelInfo.LegacyVersion))
            {
                return ("/models/" + SanitizedFileName(Brand?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Variant) + "_" + SanitizedFileName(ModelInfo?.LegacyVersion) + "/").ToLower();
            }

            return ("/models/" + SanitizedFileName(Brand?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Variant) + "/").ToLower();
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

            if (Drivetrain?.Suspension != null && Drivetrain.Suspension.Any())
            {
                foreach (var d in Drivetrain.Suspension)
                {
                    if (d.MaxGroundClearanceMM.HasValue && d.MaxGroundClearanceMM.Value > maxGroundClearance)
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
                        if ((d.MaxGroundClearanceMM.Value - d.MinGroundClearanceMM.Value) > heightAdjustment)

                            heightAdjustment = d.MaxGroundClearanceMM.Value - d.MinGroundClearanceMM.Value;
                    }
                }

            }

            return heightAdjustment;
        }

        public decimal Length()
        {
            decimal length = 0;
            if (Dimensions != null && Dimensions.Length.HasValue)
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

        public decimal WeightUnladenDINKg()
        {
            decimal weightUnladenDINKg = 0;
            if (TransportCapabilities != null && TransportCapabilities.CurbWeight.HasValue)
            {
                weightUnladenDINKg = TransportCapabilities.CurbWeight.Value;
            }

            return weightUnladenDINKg;
        }

        public string GetBatterySizeText()
        {
            if (Drivetrain?.Battery != null && Drivetrain.Battery.Count == 1 && Drivetrain.Battery[0].GrossCapacitykWh.HasValue)
            {
                return Drivetrain.Battery[0].GrossCapacitykWh + " kWh";
            }

            if (Drivetrain?.Battery != null && Drivetrain.Battery.Count > 1)
            {
                string batteryText = "" +
                Drivetrain.Battery.OrderBy(b => b.GrossCapacitykWh.Value).First().GrossCapacitykWh.Value +
                " - " +
                Drivetrain.Battery.OrderByDescending(b => b.GrossCapacitykWh.Value).First().GrossCapacitykWh.Value +
                " kWh";

                return batteryText;
            }

            return string.Empty;
        }

        public string GetBatteryChargingSpeedText()
        {
            if (Drivetrain?.Battery != null && Drivetrain.Battery.Count == 1 && Drivetrain.Battery[0].GrossCapacitykWh.HasValue)
            {
                return Drivetrain.Battery[0].MaxDCChargeSpeed + " kW";
            }

            if (Drivetrain?.Battery != null && Drivetrain.Battery.Count > 1)
            {
                string batteryText = "" +
                Drivetrain.Battery.OrderBy(b => b.MaxDCChargeSpeed.Value).First().MaxDCChargeSpeed.Value +
                " - " +
                Drivetrain.Battery.OrderByDescending(b => b.MaxDCChargeSpeed.Value).First().MaxDCChargeSpeed.Value +
                " kW";

                return batteryText;
            }

            return string.Empty;
        }

        public string GetDriveAxleText()
        {
            if (Drivetrain?.DriveSetup != null && !Drivetrain.DriveSetup.Equals(DriveSetup.NotSet))
            {
                if(Drivetrain.DriveSetup.Value.Equals(DriveSetup.OneMotorRearAxle))
                {
                    return "RWD";
                }
                else if(Drivetrain.DriveSetup.Value.Equals(DriveSetup.OneMotorFrontAxle))
                {
                    return "FWD";
                }
                else
                {
                    return "AWD";
                }

            }

            return string.Empty;    
        }


        /// <summary>
        /// Calculates the data quality score for the EV
        /// Used to find the EV needed more data
        /// </summary>
        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQuality = new DataQualityScore() { DataArea = GetFullName() };

            if(Drivetrain == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(Drivetrain.CalculateDataQuality());
            }

            if(Exterior == null)
            {

                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(Exterior.CalculateDataQuality());
            }

            if(Interior == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(Interior.CalculateDataQuality());
            }

            if(Comfort == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(Comfort.CalculateDataQuality());
            }

            if(Infotainment == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(Infotainment.CalculateDataQuality());
            }

            if(DriverAssistance == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(DriverAssistance.CalculateDataQuality());
            }

            if(Lights == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(Lights.CalculateDataQuality());
            }

            if(Dimensions == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(Dimensions.CalculateDataQuality());
            }

            if(UIAndControls == null)
            {

            dataQuality.ReduceScore(1000); 
            }
            else
            {
                dataQuality.AddSubScore(UIAndControls.CalculateDataQuality());
            }


            if(TransportCapabilities == null)
            {
                dataQuality.ReduceScore(1000);
            }
            else
            {
                dataQuality.AddSubScore(TransportCapabilities.CalculateDataQuality());
            }


            return dataQuality;
        }
    }
}
