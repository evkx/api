using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Motor
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public MotorLocation? Location { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public MotorType? Type { get; set; }

        public string? Power { get; set; }

        public int? PeakPower { get; set; }

        public int? ContinuousPower { get; set; }

        public int? Torque { get; set; }

        public string? Model { get; set; }

        public string? Mount { get; set; }

    }
}
