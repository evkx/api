using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ConnectionType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "USBC")]
        USBC = 1,

        [EnumMember(Value = "USBA")]
        USBA = 2,

        [EnumMember(Value = "VOLT12")]
        VOLT12 = 3,
    }
}
