using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Motor
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public MotorLocation? Location { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public MotorType? Type { get; set; }

        public int? Power { get; set; }

        public int? PeakPower { get; set; }

        public int? ContinuousPower { get; set; }

        public int? Torque { get; set; }

        public string? Model { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Motor" };
            if(Location == null || Location.Equals(MotorLocation.None))
            {
                dataQualityScore.DataQuality--;
            }

            if(Type == null || Type.Equals(MotorType.None))
            {
                dataQualityScore.DataQuality--;
            }

            if(Power == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(PeakPower == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(ContinuousPower == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(Torque == null)
            {
                dataQualityScore.DataQuality--;
            }

            if(string.IsNullOrEmpty(Model))
            {
                dataQualityScore.DataQuality--;
            }

            return dataQualityScore;
        }
    }
}
