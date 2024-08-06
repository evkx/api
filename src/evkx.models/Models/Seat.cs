using evdb.models.Enums;
using evdb.models.Models;

namespace evdb.Models
{
    /// <summary>
    /// Defines a specific seat on a seat row and its features 
    /// </summary>
    public class Seat
    {
        /// <summary>
        /// Creates a new instance of a seat
        /// </summary>
        public Seat()
        {
            Position = models.Enums.SeatPosition.NotSet;
            ForeAndAftAdjustment = models.Enums.SeatFeatureStatus.Unknown;
            ReclineAdjustment = models.Enums.SeatFeatureStatus.Unknown;
            HeightAdjustment = models.Enums.SeatFeatureStatus.Unknown;
            CushionAngleAdjustment = models.Enums.SeatFeatureStatus.Unknown;
            HeightAdjustableHeadrest = models.Enums.SeatFeatureStatus.Unknown;
            LengthAdjustableHeadrest = models.Enums.SeatFeatureStatus.Unknown;
            AdjustableThighSupport = models.Enums.SeatFeatureStatus.Unknown;
            AdjustableSideSupportBack = models.Enums.SeatFeatureStatus.Unknown;
            AdjustableSideSupportBottom = models.Enums.SeatFeatureStatus.Unknown;
            LumbarAdjustment = models.Enums.SeatFeatureStatus.Unknown;
            Heating = models.Enums.SeatFeatureStatus.Unknown;
            Ventilation = models.Enums.SeatFeatureStatus.Unknown;
            Massage = models.Enums.SeatFeatureStatus.Unknown;
            Memory = models.Enums.SeatFeatureStatus.Unknown;
            EasyAccess = models.Enums.SeatFeatureStatus.Unknown;
            Footrest = models.Enums.SeatFeatureStatus.Unknown;
            LegSupport = models.Enums.SeatFeatureStatus.Unknown;
            Foldable = models.Enums.SeatFeatureStatus.Unknown;
            Isofix  = models.Enums.SeatFeatureStatus.Unknown;
        }

        /// <summary>
        /// Defines the seat position
        /// </summary>
        public SeatPosition? Position { get; set; }

        /// <summary>
        /// Defines if the seat can be adjusted fore and aft.
        /// </summary>
        public SeatFeatureStatus? ForeAndAftAdjustment { get; set; }

        /// <summary>
        /// Defines if the seat back can be reclined.
        /// </summary>
        public SeatFeatureStatus? ReclineAdjustment { get; set; }

        /// <summary>
        /// Defines if the seat height can be adjusted.
        /// </summary>
        public SeatFeatureStatus? HeightAdjustment { get; set; }

        /// <summary>
        /// Defines if the seat cushion angle can be adjusted.
        /// </summary>
        public SeatFeatureStatus? CushionAngleAdjustment { get; set; }

        /// <summary>
        /// Defines if the height of the headrest can be adjusted.
        /// </summary>
        public SeatFeatureStatus? HeightAdjustableHeadrest { get; set; }

        /// <summary>
        /// Defines if the length of the headrest can be adjusted.
        /// </summary>
        public SeatFeatureStatus? LengthAdjustableHeadrest { get; set; }

        /// <summary>
        /// Defines if the thigh support can be adjusted.
        /// </summary>
        public SeatFeatureStatus? AdjustableThighSupport { get; set; }

        /// <summary>
        /// Defines if the side support of the seat back can be adjusted.
        /// </summary>
        public SeatFeatureStatus? AdjustableSideSupportBack { get; set; }

        /// <summary>
        /// Defines if the side support of the seat bottom can be adjusted.
        /// </summary>
        public SeatFeatureStatus? AdjustableSideSupportBottom { get; set; }

        /// <summary>
        /// Defines if the seat has lumbar adjustment.
        /// </summary>
        public SeatFeatureStatus? LumbarAdjustment { get; set; }

        /// <summary>
        /// Defines if the seat has heating
        /// </summary>
        public SeatFeatureStatus? Heating { get; set; }

        /// <summary>
        /// Defines if the seath has ventilation
        /// </summary>
        public SeatFeatureStatus? Ventilation { get; set; }

        /// <summary>
        /// Defines if the seat has massage
        /// </summary>
        public SeatFeatureStatus? Massage { get; set; }

        /// <summary>
        /// Defines if the seat has memory
        /// </summary>
        public SeatFeatureStatus? Memory { get; set; }

        /// <summary>
        /// Defines if the seat has easy access function
        /// </summary>
        public SeatFeatureStatus? EasyAccess { get; set; }

        /// <summary>
        /// Defines if the seat has a footrest
        /// </summary>
        public SeatFeatureStatus? Footrest { get; set; }

        /// <summary>
        /// Defines if the seat has leg support
        /// </summary>
        public SeatFeatureStatus? LegSupport { get; set; }

        /// <summary>
        /// Defines if the seat is foldable
        /// </summary>
        public SeatFeatureStatus? Foldable { get; set; }

        /// <summary>
        /// Defines if the seat has isofix
        /// </summary>
        public SeatFeatureStatus? Isofix { get; set; }

        /// <summary>
        /// Calculates the data quality score for the seat
        /// </summary>
        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore score = new DataQualityScore() { DataArea = "Seat" };

            if(Position == null || Position.Equals(SeatPosition.NotSet))
            {
                score.ReduceScore(100);
            }
            
            if (ForeAndAftAdjustment == null || ForeAndAftAdjustment.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (ReclineAdjustment == null || ReclineAdjustment.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (HeightAdjustment == null || HeightAdjustment.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (CushionAngleAdjustment == null || CushionAngleAdjustment.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (HeightAdjustableHeadrest == null || HeightAdjustableHeadrest.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (LengthAdjustableHeadrest == null || LengthAdjustableHeadrest.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (AdjustableThighSupport == null || AdjustableThighSupport.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (AdjustableSideSupportBack == null || AdjustableSideSupportBack.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (AdjustableSideSupportBottom == null || AdjustableSideSupportBottom.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (LumbarAdjustment == null || LumbarAdjustment.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (Heating == null || Heating.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (Ventilation == null || Ventilation.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (Massage == null || Massage.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (Memory == null || Memory.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (EasyAccess == null || EasyAccess.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (Footrest == null || Footrest.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (LegSupport == null || LegSupport.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            if (Foldable == null || Foldable.Equals(SeatFeatureStatus.Unknown))
            {
                score.ReduceScore(10);
            }

            return score;
        }
    }
}
