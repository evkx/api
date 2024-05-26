using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ChargingConfiguration : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "SplitBattery")]
        SplitBattery = 1,

        [EnumMember(Value = "CombineBattery")]
        CombineBattery = 2,

        [EnumMember(Value = "VoltageConversion")]
        VoltageConversion = 3,
    }
}
