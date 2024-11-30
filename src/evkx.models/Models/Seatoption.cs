using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// A specific seat option for a given row of seats
    /// </summary>
    public class Seatoption
    {

        public Seatoption()
        {
            SeatCategory = models.Enums.SeatCategory.None;
            Skihatch = new EVFeature() { FeatureStatus = FeatureStatus.Unknown };
        }

        /// <summary>
        /// Defines if this seat option is standard
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// The name of the seat option
        /// </summary>
        public string? Name { get; set; }

        /// <summary>
        /// The seat category for this seat option
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SeatCategory? SeatCategory { get; set; }

        /// <summary>
        /// Defines the seat split for this seat option when it is a bench
        /// </summary>
        public string? SeatSplit { get; set; }

        /// <summary>
        /// Defines if this has a ski hatch when it is a bench
        /// </summary>
        public EVFeature Skihatch { get; set; } 
        
        /// <summary>
        /// The seats for this seat option
        /// </summary>
        public List<Seat>? Seat { get; set; }

        public SeatRowFeatureStatus HasForeAndAftAdjustment()
        {
            return GetSeatRowFeatureStatus("ForeAndAftAdjustment");
        }

        public SeatRowFeatureStatus HasReclineAdjustment()
        {
            return GetSeatRowFeatureStatus("ReclineAdjustment");
        }

        public SeatRowFeatureStatus HasHeightAdjustment()
        {
            return GetSeatRowFeatureStatus("HeightAdjustment");
        }

        public SeatRowFeatureStatus HasSeatCushionAngleAdjustment()
        {
            return GetSeatRowFeatureStatus("CushionAngleAdjustment");
        }

        public SeatRowFeatureStatus HasElectricLumbarAdjustment()
        {
            return GetSeatRowFeatureStatus("LumbarAdjustment");
        }

        public SeatRowFeatureStatus HasMemory()
        {
            return GetSeatRowFeatureStatus("Memory");
        }

        public SeatRowFeatureStatus HasHeightAdjustableHeadrest()
        {
            return GetSeatRowFeatureStatus("HeightAdjustableHeadrest");
        }

        public SeatRowFeatureStatus HasLengthAdjustableHeadrest()
        {
            return GetSeatRowFeatureStatus("LengthAdjustableHeadrest");
        }

        public SeatRowFeatureStatus HasAdjustableThighSupport()
        {
            return GetSeatRowFeatureStatus("AdjustableThighSupport");
        }


        public SeatRowFeatureStatus HasAdjustableSideSupportBack()
        {
            return GetSeatRowFeatureStatus("AdjustableSideSupportBack");
        }

        public SeatRowFeatureStatus HasAdjustableSideSupportBottom()
        {
            return GetSeatRowFeatureStatus("AdjustableSideSupportBottom");
        }

        public SeatRowFeatureStatus HasFootrestPassenger()
        {
            return GetSeatRowFeatureStatus("Footrest");
        }

        public SeatRowFeatureStatus HasLegSupportPassenger()
        {
            return GetSeatRowFeatureStatus("LegSupport");
        }

        public SeatRowFeatureStatus HasHeating()
        {
            return GetSeatRowFeatureStatus("Heating");
        }

        public SeatRowFeatureStatus HasMassage()
        {
            return GetSeatRowFeatureStatus("Massage");
        }

        public SeatRowFeatureStatus HasVentilation()
        {
            return GetSeatRowFeatureStatus("Ventilation");
        }

        public SeatRowFeatureStatus HasIsofix()
        {
            return GetSeatRowFeatureStatus("Isofix");
        }

        internal SeatRowFeatureStatus GetSeatRowFeatureStatus(string featureName)
        {

            Dictionary<string, List<SeatPosition>> featureStatusList = new Dictionary<string, List<SeatPosition>>();

            bool isFirstRow = false;

            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    string featureStatusKey = string.Empty;

                    Type current = seat.GetType();
                    PropertyInfo? property = current.GetProperty(featureName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

                    if (property == null)
                    {
                        string errorMessage = $"Could not prefill the field {featureName}, property {featureName} is not defined in the data model";
                        throw new Exception(errorMessage);
                    }

                    SeatFeatureStatus?  featureStatus = (SeatFeatureStatus?)property.GetValue(seat, null);

                    if (seat.Position == null)
                    {
                        return SeatRowFeatureStatus.Unknown;
                    }

                    if (seat.Position == SeatPosition.Driver)
                    {
                        isFirstRow = true;
                    }

                    if (featureStatus == null)
                    {
                        featureStatusKey = SeatFeatureStatus.Unknown.ToString();
                    }
                    else
                    {
                        featureStatusKey = featureStatus.Value.ToString();
                    }

                    if (featureStatusList.ContainsKey(featureStatusKey))
                    {
                        featureStatusList[featureStatusKey].Add(seat.Position.Value);
                    }
                    else
                    {
                        featureStatusList.Add(featureStatusKey, new List<SeatPosition>() { seat.Position.Value });
                    }

                }
            }

            if (featureStatusList.Count == 0)
            {
                return SeatRowFeatureStatus.Unknown;
            }

            if (featureStatusList.Count == 1)
            {
                return Enum.Parse<SeatRowFeatureStatus>(featureStatusList.First().Key);
            }

            if(featureStatusList.ContainsKey(SeatFeatureStatus.Unknown.ToString()))
            {
                return SeatRowFeatureStatus.Unknown;
            }

            if (featureStatusList.Count == 2)
            {
                
                if (featureStatusList.ContainsKey(SeatFeatureStatus.StandardElectric.ToString()) && featureStatusList.ContainsKey(SeatFeatureStatus.NotAvailable.ToString())
                    && (featureStatusList[SeatFeatureStatus.StandardElectric.ToString()].Count == 1 && featureStatusList[SeatFeatureStatus.NotAvailable.ToString()].Count == 1))
                {
                        // Two different seat location on this row where feature is available on only one of them. 

                        if (isFirstRow && featureStatusList[SeatFeatureStatus.StandardElectric.ToString()][0] == SeatPosition.Driver)
                        {
                            return SeatRowFeatureStatus.StandardElectricDriverNotAvailablePassenger;
                        }
                        else if (isFirstRow && featureStatusList[SeatFeatureStatus.StandardElectric.ToString()][0] == SeatPosition.FrontPassenger)
                        {
                            return SeatRowFeatureStatus.StandardElectricPassengerSeat;
                        }
                    

                }
                else if (featureStatusList.ContainsKey(SeatFeatureStatus.Standard.ToString()) && featureStatusList.ContainsKey(SeatFeatureStatus.NotAvailable.ToString())
                    && (featureStatusList[SeatFeatureStatus.Standard.ToString()].Count == 1 && featureStatusList[SeatFeatureStatus.NotAvailable.ToString()].Count == 1))
                {
              
                        // Two different seat location on this row where feature is available on only one of them. 
                        if (isFirstRow && featureStatusList[SeatFeatureStatus.Standard.ToString()][0] == SeatPosition.Driver)
                        {
                            return SeatRowFeatureStatus.StandardDriverNotAvailablePassenger;
                        }
                        else if (isFirstRow && featureStatusList[SeatFeatureStatus.Standard.ToString()][0] == SeatPosition.FrontPassenger)
                        {
                            return SeatRowFeatureStatus.StandardPassengerSeat;
                        }
              
                }
                else if (featureStatusList.ContainsKey(SeatFeatureStatus.StandardElectric.ToString()) && featureStatusList.ContainsKey(SeatFeatureStatus.StandardManual.ToString())
                    && (featureStatusList[SeatFeatureStatus.StandardElectric.ToString()].Count == 1 && featureStatusList[SeatFeatureStatus.StandardManual.ToString()].Count == 1))
                {
                  
                        // Two different seat location on this row where feature is available on only one of them. 

                        if (isFirstRow)
                        {
                            return SeatRowFeatureStatus.StandardElectricDriverStandardManualPassenger;
                        }

                }
                else if (featureStatusList.ContainsKey(SeatFeatureStatus.StandardElectric.ToString()) && featureStatusList.ContainsKey(SeatFeatureStatus.Standard.ToString())
                && (featureStatusList[SeatFeatureStatus.StandardElectric.ToString()].Count == 1 && featureStatusList[SeatFeatureStatus.Standard.ToString()].Count == 1))
                {

                    // Two different seat location on this row where feature is available on only one of them. 

                    if (isFirstRow)
                    {
                        return SeatRowFeatureStatus.StandardElectricDriverStandardManualPassenger;
                    }

                }
                else if (featureStatusList.ContainsKey(SeatFeatureStatus.Standard.ToString()) && featureStatusList.ContainsKey(SeatFeatureStatus.NotAvailable.ToString())
                    && (featureStatusList[SeatFeatureStatus.Standard.ToString()].Count == 2 && featureStatusList[SeatFeatureStatus.NotAvailable.ToString()].Count == 1))
                {
                    // Two different seat location on this row where feature is available on only one of them. 
                    if (featureStatusList[SeatFeatureStatus.NotAvailable.ToString()][0] == SeatPosition.Middle)
                    {
                        return SeatRowFeatureStatus.StandardOuterSeats;
                    }
                }

            }
            // Place to debug
            return SeatRowFeatureStatus.Unknown;
        }



        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Seatoption" };

            if (SeatCategory == null || SeatCategory == models.Enums.SeatCategory.None)
            {
                dataQualityScore.ReduceScore(100, "SeatCategory");
            }

            if(Seat == null || Seat.Count == 0)
            {
                dataQualityScore.ReduceScore(100, "Seat");
            }
            else
            {
                foreach (Seat seat in Seat)
                {
                    dataQualityScore.AddSubScore(seat.CalculateDataQuality());
                }
            }

            return dataQualityScore;
        }
    }
}
