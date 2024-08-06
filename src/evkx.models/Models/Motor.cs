using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines a motor in an EV
    /// </summary>
    public class Motor
    {
        /// <summary>
        /// The motor location in the EV
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public MotorLocation? Location { get; set; }

        /// <summary>
        /// The type of motor in the EV
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public MotorType? Type { get; set; }

        /// <summary>
        /// The peak power in KW
        /// </summary>
        public int? PeakPower { get; set; }

        /// <summary>
        /// The max torque in Nm
        /// </summary>
        public int? Torque { get; set; }

        /// <summary>
        /// Name of model type
        /// </summary>
        public string? Model { get; set; }

        /// <summary>
        /// Calculates the data quality score for the motor
        /// </summary>
        /// <returns></returns>
        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Motor" };
            if(Location == null || Location.Equals(MotorLocation.None))
            {
                dataQualityScore.DataQuality--;
            }

            if(Type == null || Type.Equals(MotorType.None))
            {
                dataQualityScore.ReduceScore(50);
            }

            if(PeakPower == null)
            {
                dataQualityScore.ReduceScore(20);
            }

            if(Torque == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;
        }
    }
}
