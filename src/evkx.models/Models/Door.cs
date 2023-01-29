using evdb.models.Enums;
using evdb.Models;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class Door
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DoorLocation? Location { get; set; }

        public EVFeature? SoftClose { get; set; }

        public EVFeature? KickSensor { get; set; }

        public EVFeature? PoweredOpenClose { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DoorType? Type { get; set; }

    }
}
