using evdb.models.Enums;
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
    }
}
