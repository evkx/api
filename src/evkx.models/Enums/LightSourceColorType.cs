using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum LightSourceColorType
    {
        NotSet,
        White,
        Red,
        MultiColor,
    }
}
