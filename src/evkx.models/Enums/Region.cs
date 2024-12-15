using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Region: int
    {
        NotSet,

        Africa,

        Americas,

        Asia,

        Europe,

        Oceania,

        World
    }
}
