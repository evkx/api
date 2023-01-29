using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum SortOrder: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Name")]
        Name = 1,

        [EnumMember(Value = "RangeMinimumWltp")]
        RangeMinimumWltp = 2,

        [EnumMember(Value = "NetBattery")]
        NetBattery = 3,

        [EnumMember(Value = "NetBatteryDesc")]
        NetBatteryDesc = 4,

        [EnumMember(Value = "WltpBasicConsumption")]
        WltpBasicConsumption = 5,
    }
}
