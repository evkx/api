using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the brakes of a vehicle
    /// </summary>
    public class Brakes
    {
        /// <summary>
        /// Indicates if the brakes are standard
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// The name of the brakes
        /// </summary>
        public string? Name  { get; set; }

        /// <summary>
        /// The type of the front brakes
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeType? FrontBrakeType { get; set; }

        /// <summary>
        /// The type of the front brake discs
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeDiscType? FrontBrakeDiscType { get; set; }

        /// <summary>
        /// The diameter of the front brake discs
        /// </summary>
        public decimal? FrontBrakeDiscDiameter { get; set; }

        /// <summary>
        /// The thickness of the front brake discs
        /// </summary>
        public decimal? FrontBrakeDiscThickness { get; set; }

        /// <summary>
        /// The number of pistons of the front brakes
        /// </summary>
        public int? FrontBrakePistons { get; set; }

        /// <summary>
        /// The type of the rear brakes
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeType? RearBrakeType { get; set; }

        /// <summary>
        /// The type of the rear brake discs
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public BrakeDiscType? RearBrakeDiscType { get; set; }

        /// <summary>
        /// The diameter of the rear brake discs
        /// </summary>
        public decimal? RearBrakeDiscDiameter { get; set; }

        /// <summary>
        /// The thickness of the rear brake discs
        /// </summary>
        public decimal? RearBrakeDiscThickness { get; set; }

        /// <summary>
        /// The number of pistons of the rear brakes
        /// </summary>
        public int? RearBrakePistons { get; set; }

        /// <summary>
        /// Calculates the data quality of the brakes
        /// </summary>
        /// <returns></returns>
        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Brakes" };

            if(Standard == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(string.IsNullOrEmpty(Name))
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakeType == null || FrontBrakeType.Equals(BrakeType.NotSet))
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakeDiscType == null || FrontBrakeDiscType.Equals(BrakeDiscType.NotSet))
            {
                dataQualityScore.DataQuality--;
            }

            if(FrontBrakeDiscDiameter == null)
            {
                dataQualityScore.ReduceScore(2);
            }

            if(FrontBrakeDiscThickness == null)
            {
                dataQualityScore.ReduceScore(1);
            }

            if(FrontBrakePistons == null)
            {
                dataQualityScore.ReduceScore(2);
            }

            if(RearBrakeType == null || RearBrakeType.Equals(BrakeType.NotSet))
            {
                dataQualityScore.ReduceScore(20);
            }

            if(RearBrakeDiscType == null || RearBrakeDiscType.Equals(BrakeDiscType.NotSet))
            {
                dataQualityScore.ReduceScore(10);
            }

            if(RearBrakeDiscDiameter == null && RearBrakeType != BrakeType.Drum)
            {
                dataQualityScore.ReduceScore(2);
            }

            if(RearBrakeDiscThickness == null)
            {
                dataQualityScore.ReduceScore(1);
            }

            if (RearBrakePistons == null)
            {
                dataQualityScore.ReduceScore(2);
            }

            return dataQualityScore;
        }
    }
}
