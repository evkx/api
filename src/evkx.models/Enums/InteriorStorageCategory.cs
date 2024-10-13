using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorStorageCategory
    {
        NotSet,
        Limited,
        Various,
        LargeRange,

    }
}
