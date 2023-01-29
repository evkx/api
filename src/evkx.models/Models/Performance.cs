using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Performance
    {
        public int? PowerKw { get; set; }

        public int? PowerKwBoost { get; set; }

        public int? TorqueNm { get; set; }  

        public int? TorqueNmBoost { get; set; }

        public int? BoostLengthSeconds { get; set; }

        public int? TopSpeed { get; set; }

        public double? ZeroToHundredKph { get; set; }

        public double? ZeroToHundredKphBoost { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PerformanceOptionType? OptionType { get; set; }

        public string? OptionId { get; set; }

    }
}
