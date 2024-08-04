using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PerformanceOptionType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "BatteryOption")]
        BatteryOption = 1,

        [EnumMember(Value = "PerformanceOption")]
        PerformanceOption = 2,
    }
}
