using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorStorageSize: int
    {
        NotSet,
        Small,
        Medium,
        Large,
        Adaptive,
    }
}
