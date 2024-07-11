using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class ActiveAero
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ActiveAeroType? ActiveAeroType { get; set; }
    }
}
