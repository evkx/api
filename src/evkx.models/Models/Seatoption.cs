using evdb.models.Enums;
using System.Collections.Generic;
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
        }

        public bool? Standard { get; set; }
        public string? Name { get; set; }

        public string? OptionId { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SeatCategory? SeatCategory { get; set; }

        public string? SeatSplit { get; set; }
        
        /// <summary>
        /// The seats for this seat option
        /// </summary>
        public List<Seat>? Seat { get; set; }

        public SeatRowFeatureStatus HasForeAndAftAdjustment()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.ForeAndAftAdjustment == null || seat.ForeAndAftAdjustment == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if(seat.ForeAndAftAdjustment == SeatFeatureStatus.Standard 
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.StandardElectric
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.StandardManual
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.ForeAndAftAdjustment == SeatFeatureStatus.Optional
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.OptionalManual
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.OptionalElectric
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasReclineAdjustment()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.ReclineAdjustment == null || seat.ReclineAdjustment == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.ReclineAdjustment == SeatFeatureStatus.Standard
                        || seat.ReclineAdjustment == SeatFeatureStatus.StandardElectric
                        || seat.ReclineAdjustment == SeatFeatureStatus.StandardManual
                        || seat.ReclineAdjustment == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.ReclineAdjustment == SeatFeatureStatus.Optional
                        || seat.ReclineAdjustment == SeatFeatureStatus.OptionalManual
                        || seat.ReclineAdjustment == SeatFeatureStatus.OptionalElectric
                        || seat.ReclineAdjustment == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }


        public SeatRowFeatureStatus HasHeightAdjustment()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.HeightAdjustment == null || seat.HeightAdjustment == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.HeightAdjustment == SeatFeatureStatus.Standard
                        || seat.HeightAdjustment == SeatFeatureStatus.StandardElectric
                        || seat.HeightAdjustment == SeatFeatureStatus.StandardManual
                        || seat.HeightAdjustment == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.HeightAdjustment == SeatFeatureStatus.Optional
                        || seat.HeightAdjustment == SeatFeatureStatus.OptionalManual
                        || seat.HeightAdjustment == SeatFeatureStatus.OptionalElectric
                        || seat.HeightAdjustment == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasSeatCushionAngleAdjustment()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.CushionAngleAdjustment == null || seat.CushionAngleAdjustment == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.CushionAngleAdjustment == SeatFeatureStatus.Standard
                        || seat.CushionAngleAdjustment == SeatFeatureStatus.StandardElectric
                        || seat.CushionAngleAdjustment == SeatFeatureStatus.StandardManual
                        || seat.CushionAngleAdjustment == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.CushionAngleAdjustment == SeatFeatureStatus.Optional
                        || seat.CushionAngleAdjustment == SeatFeatureStatus.OptionalManual
                        || seat.CushionAngleAdjustment == SeatFeatureStatus.OptionalElectric
                        || seat.CushionAngleAdjustment == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasElectricAdjustment()
        {

            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.ForeAndAftAdjustment == null || seat.ForeAndAftAdjustment == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.ForeAndAftAdjustment == SeatFeatureStatus.Standard
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.Optional
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.StandardManual)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.ForeAndAftAdjustment == SeatFeatureStatus.StandardElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.ForeAndAftAdjustment == SeatFeatureStatus.StandardManualOptionalElectric
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.OptionalElectric
                        || seat.ForeAndAftAdjustment == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasElectricLumbarAdjustment()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.LumbarAdjustment == null || seat.LumbarAdjustment == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.LumbarAdjustment == SeatFeatureStatus.Standard
                        || seat.LumbarAdjustment == SeatFeatureStatus.StandardElectric
                        || seat.LumbarAdjustment == SeatFeatureStatus.StandardManual
                        || seat.LumbarAdjustment == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.LumbarAdjustment == SeatFeatureStatus.Optional
                        || seat.LumbarAdjustment == SeatFeatureStatus.OptionalManual
                        || seat.LumbarAdjustment == SeatFeatureStatus.OptionalElectric
                        || seat.LumbarAdjustment == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasMemoryDriverSeat()
        {
            if (Seat != null)
            {
                Seat seat = Seat[0];
                if (seat.Memory == null || seat.Memory == SeatFeatureStatus.NotAvailable)
                {
                    return SeatRowFeatureStatus.NotAvailable;
                }
                else if (seat.Memory == SeatFeatureStatus.Standard
                    || seat.Memory == SeatFeatureStatus.StandardElectric
                    || seat.Memory == SeatFeatureStatus.StandardManual
                    || seat.Memory == SeatFeatureStatus.StandardManualOptionalElectric)
                {
                    return SeatRowFeatureStatus.Standard;
                }
                else if (seat.Memory == SeatFeatureStatus.Optional
                    || seat.Memory == SeatFeatureStatus.OptionalManual
                    || seat.Memory == SeatFeatureStatus.OptionalElectric
                    || seat.Memory == SeatFeatureStatus.OptionalManualOrElectricric)
                {
                    return SeatRowFeatureStatus.Optional;
                }
                
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasMemoryPassengerSeat()
        {
            if (Seat != null)
            {
                Seat seat = Seat[1];
                if (seat.Memory == null || seat.Memory == SeatFeatureStatus.NotAvailable)
                {
                    return SeatRowFeatureStatus.NotAvailable;
                }
                else if (seat.Memory == SeatFeatureStatus.Standard
                    || seat.Memory == SeatFeatureStatus.StandardElectric
                    || seat.Memory == SeatFeatureStatus.StandardManual
                    || seat.Memory == SeatFeatureStatus.StandardManualOptionalElectric)
                {
                    return SeatRowFeatureStatus.Standard;
                }
                else if (seat.Memory == SeatFeatureStatus.Optional
                    || seat.Memory == SeatFeatureStatus.OptionalManual
                    || seat.Memory == SeatFeatureStatus.OptionalElectric
                    || seat.Memory == SeatFeatureStatus.OptionalManualOrElectricric)
                {
                    return SeatRowFeatureStatus.Optional;
                }

            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasHeightAdjustableHeadrest()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.HeightAdjustableHeadrest == null || seat.HeightAdjustableHeadrest == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.HeightAdjustableHeadrest == SeatFeatureStatus.Standard
                        || seat.HeightAdjustableHeadrest == SeatFeatureStatus.StandardElectric
                        || seat.HeightAdjustableHeadrest == SeatFeatureStatus.StandardManual
                        || seat.HeightAdjustableHeadrest == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.HeightAdjustableHeadrest == SeatFeatureStatus.Optional
                        || seat.HeightAdjustableHeadrest == SeatFeatureStatus.OptionalManual
                        || seat.HeightAdjustableHeadrest == SeatFeatureStatus.OptionalElectric
                        || seat.HeightAdjustableHeadrest == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasLengthAdjustableHeadrest()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.LengthAdjustableHeadrest == null || seat.LengthAdjustableHeadrest == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.LengthAdjustableHeadrest == SeatFeatureStatus.Standard
                        || seat.LengthAdjustableHeadrest == SeatFeatureStatus.StandardElectric
                        || seat.LengthAdjustableHeadrest == SeatFeatureStatus.StandardManual
                        || seat.LengthAdjustableHeadrest == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.LengthAdjustableHeadrest == SeatFeatureStatus.Optional
                        || seat.LengthAdjustableHeadrest == SeatFeatureStatus.OptionalManual
                        || seat.LengthAdjustableHeadrest == SeatFeatureStatus.OptionalElectric
                        || seat.LengthAdjustableHeadrest == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasAdjustableThighSupport()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.AdjustableThighSupport == null || seat.AdjustableThighSupport == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.AdjustableThighSupport == SeatFeatureStatus.Standard
                        || seat.AdjustableThighSupport == SeatFeatureStatus.StandardElectric
                        || seat.AdjustableThighSupport == SeatFeatureStatus.StandardManual
                        || seat.AdjustableThighSupport == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.AdjustableThighSupport == SeatFeatureStatus.Optional
                        || seat.AdjustableThighSupport == SeatFeatureStatus.OptionalManual
                        || seat.AdjustableThighSupport == SeatFeatureStatus.OptionalElectric
                        || seat.AdjustableThighSupport == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }


        public SeatRowFeatureStatus HasAdjustableSideSupportBack()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.AdjustableSideSupportBack == null || seat.AdjustableSideSupportBack == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.AdjustableSideSupportBack == SeatFeatureStatus.Standard
                        || seat.AdjustableSideSupportBack == SeatFeatureStatus.StandardElectric
                        || seat.AdjustableSideSupportBack == SeatFeatureStatus.StandardManual
                        || seat.AdjustableSideSupportBack == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.AdjustableSideSupportBack == SeatFeatureStatus.Optional
                        || seat.AdjustableSideSupportBack == SeatFeatureStatus.OptionalManual
                        || seat.AdjustableSideSupportBack == SeatFeatureStatus.OptionalElectric
                        || seat.AdjustableSideSupportBack == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasAdjustableSideSupportBottom()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.AdjustableSideSupportBottom == null || seat.AdjustableSideSupportBottom == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.AdjustableSideSupportBottom == SeatFeatureStatus.Standard
                        || seat.AdjustableSideSupportBottom == SeatFeatureStatus.StandardElectric
                        || seat.AdjustableSideSupportBottom == SeatFeatureStatus.StandardManual
                        || seat.AdjustableSideSupportBottom == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.AdjustableSideSupportBottom == SeatFeatureStatus.Optional
                        || seat.AdjustableSideSupportBottom == SeatFeatureStatus.OptionalManual
                        || seat.AdjustableSideSupportBottom == SeatFeatureStatus.OptionalElectric
                        || seat.AdjustableSideSupportBottom == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasFootrestPassenger()
        {
            if (Seat != null)
            {
                Seat seat = Seat[1];
                if (SeatCategory.HasValue && SeatCategory == models.Enums.SeatCategory.ExecutivePlusTwoSeatBench)
                {
                    seat = Seat[2];
                }

                if (seat.Footrest == null || seat.Footrest == SeatFeatureStatus.NotAvailable)
                {
                    return SeatRowFeatureStatus.NotAvailable;
                }
                else if (seat.Footrest == SeatFeatureStatus.Standard
                    || seat.Footrest == SeatFeatureStatus.StandardElectric
                    || seat.Footrest == SeatFeatureStatus.StandardManual
                    || seat.Footrest == SeatFeatureStatus.StandardManualOptionalElectric)
                {
                    return SeatRowFeatureStatus.Standard;
                }
                else if (seat.Footrest == SeatFeatureStatus.Optional
                    || seat.Footrest == SeatFeatureStatus.OptionalManual
                    || seat.Footrest == SeatFeatureStatus.OptionalElectric
                    || seat.Footrest == SeatFeatureStatus.OptionalManualOrElectricric)
                {
                    return SeatRowFeatureStatus.Optional;
                }
                
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasLegSupportPassenger()
        {
            if (Seat != null)
            {
                Seat seat = Seat[1];
                if(SeatCategory.HasValue && SeatCategory == models.Enums.SeatCategory.ExecutivePlusTwoSeatBench)
                {
                    seat = Seat[2];
                }
                if (seat.LegSupport == null || seat.LegSupport == SeatFeatureStatus.NotAvailable)
                {
                    return SeatRowFeatureStatus.NotAvailable;
                }
                else if (seat.LegSupport == SeatFeatureStatus.Standard
                    || seat.LegSupport == SeatFeatureStatus.StandardElectric
                    || seat.LegSupport == SeatFeatureStatus.StandardManual
                    || seat.LegSupport == SeatFeatureStatus.StandardManualOptionalElectric)
                {
                    return SeatRowFeatureStatus.Standard;
                }
                else if (seat.LegSupport == SeatFeatureStatus.Optional
                    || seat.LegSupport == SeatFeatureStatus.OptionalManual
                    || seat.LegSupport == SeatFeatureStatus.OptionalElectric
                    || seat.LegSupport == SeatFeatureStatus.OptionalManualOrElectricric)
                {
                    return SeatRowFeatureStatus.Optional;
                }

            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasHeating()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.Heating == null || seat.Heating == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.Heating == SeatFeatureStatus.Standard
                        || seat.Heating == SeatFeatureStatus.StandardElectric
                        || seat.Heating == SeatFeatureStatus.StandardManual
                        || seat.Heating == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.Heating == SeatFeatureStatus.Optional
                        || seat.Heating == SeatFeatureStatus.OptionalManual
                        || seat.Heating == SeatFeatureStatus.OptionalElectric
                        || seat.Heating == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasMassage()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.Massage == null || seat.Massage == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.Massage == SeatFeatureStatus.Standard
                        || seat.Massage == SeatFeatureStatus.StandardElectric
                        || seat.Massage == SeatFeatureStatus.StandardManual
                        || seat.Massage == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.Massage == SeatFeatureStatus.Optional
                        || seat.Massage == SeatFeatureStatus.OptionalManual
                        || seat.Massage == SeatFeatureStatus.OptionalElectric
                        || seat.Massage == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }

        public SeatRowFeatureStatus HasVentilation()
        {
            if (Seat != null)
            {
                foreach (var seat in Seat)
                {
                    if (seat.Ventilation == null || seat.Ventilation == SeatFeatureStatus.NotAvailable)
                    {
                        return SeatRowFeatureStatus.NotAvailable;
                    }
                    else if (seat.Ventilation == SeatFeatureStatus.Standard
                        || seat.Ventilation == SeatFeatureStatus.StandardElectric
                        || seat.Ventilation == SeatFeatureStatus.StandardManual
                        || seat.Ventilation == SeatFeatureStatus.StandardManualOptionalElectric)
                    {
                        return SeatRowFeatureStatus.Standard;
                    }
                    else if (seat.Ventilation == SeatFeatureStatus.Optional
                        || seat.Ventilation == SeatFeatureStatus.OptionalManual
                        || seat.Ventilation == SeatFeatureStatus.OptionalElectric
                        || seat.Ventilation == SeatFeatureStatus.OptionalManualOrElectricric)
                    {
                        return SeatRowFeatureStatus.Optional;
                    }
                }
            }

            return SeatRowFeatureStatus.Unknown;
        }
    }
}
