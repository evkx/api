using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorCategory: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "DriverFocused")]
        DriverFocused = 1,

        [EnumMember(Value = "Minimalistic")]
        Minimalistic = 2,

        [EnumMember(Value = "Functional")]
        Functional = 3,
    }
}
