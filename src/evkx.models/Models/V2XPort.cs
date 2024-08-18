using evdb.models.Enums;
using System;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class V2XPort
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public V2XPortType? Type { get; set; }

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
                dataQualityScore.ReduceScore(10);
            }

            if (Location == null || Location == PortLocation.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (Optional == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;
        }
    }
}
