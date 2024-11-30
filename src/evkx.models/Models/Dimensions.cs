namespace evdb.models.Models
{
    /// <summary>
    /// Defines the dimmensions of an EV
    /// </summary>
    public class Dimensions
    {
        /// <summary>
        /// Defines the length of the EV
        /// </summary>
        public decimal? Length { get; set; }

        /// <summary>
        /// Defines the height of the EV
        /// </summary>
        public decimal? Height { get; set; }

        /// <summary>
        /// Defines the widht of the EV excluding mirrors
        /// </summary>
        public decimal? WidthExcludingMirrors { get; set; }

        /// <summary>
        /// Defines the widht of the EV including mirrors
        /// </summary>
        public decimal? WidhtIncludingMirrors { get; set; }

        /// <summary>
        /// Defines the wheelbase of the EV
        /// </summary>
        public decimal? Wheelbase { get; set; }

        /// <summary>
        /// Defines the track width of the EV in the front
        /// </summary>
        public decimal? TrackWidthFront { get; set; }

        /// <summary>
        /// Defines the track width of the EV in the rear
        /// </summary>
        public decimal? TrackWidthRear  { get; set; }

        /// <summary>
        /// Defines the drag coefficient of the EV
        /// </summary>
        public decimal? DragCoefficient { get; set; }

        /// <summary>
        /// Defines the frontal area of the EV in m2
        /// </summary>
        public decimal? FrontalArea { get; set; }

        /// <summary>
        /// Defines the overhange angle front
        /// </summary>
        public decimal? ApproachAngle { get;  set; }

        /// <summary>
        /// Defines the overhange angle rear
        /// </summary>
        public decimal? DepartureAngle { get; set; }

        /// <summary>
        /// Defines the turning circle of the EV
        /// </summary>
        public decimal? TurningCircle { get; set; }


        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Dimensions" };

            if (Length == null || Length == 0)
            {
                dataQualityScore.ReduceScore(100, "Length");
            }

            if (Height == null || Height == 0)
            {
                dataQualityScore.ReduceScore(100, "Height");
            }

            if (WidthExcludingMirrors == null || WidthExcludingMirrors == 0)
            {
                dataQualityScore.ReduceScore(100, "WidthExcludingMirrors");
            }

            if (WidhtIncludingMirrors == null || WidhtIncludingMirrors == 0)
            {
                dataQualityScore.ReduceScore(100, "WidhtIncludingMirrors");
            }

            if (Wheelbase == null || Wheelbase == 0)
            {
                dataQualityScore.ReduceScore(100, "Wheelbase");
            }

            if (TrackWidthFront == null || TrackWidthFront == 0)
            {
                dataQualityScore.ReduceScore(5, "TrackWidthFront");
            }

            if (TrackWidthRear == null || TrackWidthRear == 0)
            {
                dataQualityScore.ReduceScore(5, "TrackWidthRear");
            }

            if (DragCoefficient == null || DragCoefficient == 0)
            {
                dataQualityScore.ReduceScore(10, "DragCoefficient");
            }

            if (FrontalArea == null || FrontalArea == 0)
            {
                dataQualityScore.ReduceScore(5, "FrontalArea");
            }

            if (ApproachAngle == null || ApproachAngle == 0)
            {
                dataQualityScore.ReduceScore(5, "ApproachAngle");
            }

            if (DepartureAngle == null || DepartureAngle == 0)
            {
                dataQualityScore.ReduceScore(5, "DepartureAngle");
            }

            if (TurningCircle == null || TurningCircle == 0)
            {
                dataQualityScore.ReduceScore(30, "TurningCircle");
            }

            return dataQualityScore;
        }

    }
}
