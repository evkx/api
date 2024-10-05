using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DriveModeRegenMode : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Strong")]
        Strong = 1,

        [EnumMember(Value = "Medium")]
        Medium = 2,

        [EnumMember(Value = "Low")]
        Low = 3,

        [EnumMember(Value = "Off")]
        Off = 4,

        [EnumMember(Value = "Adaptive")]
        Adaptive = 5,

        [EnumMember(Value = "Custom")]
        Custom = 6,
    }
}
