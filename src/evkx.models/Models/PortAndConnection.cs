using evdb.models.Enums;
using System;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class PortAndConnection
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ConnectionType? Type { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PortLocation? Location { get; set; }

        public bool? Optional { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Region? Region { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "PortAndConnection" };

            if (Type == null)
            {
                dataQualityScore.ReduceScore(10, "Type");
            }

            if (Location == null || Location == PortLocation.NotSet)
            {
                dataQualityScore.ReduceScore(10, "Location");
            }

            if (Optional == null)
            {
                dataQualityScore.ReduceScore(10, "Optional");
            }

            return dataQualityScore;
        }
    }
}
