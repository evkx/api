using System.Runtime.Serialization;

namespace evdb.models.Enums
{
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
