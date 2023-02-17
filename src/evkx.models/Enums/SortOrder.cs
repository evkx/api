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

        [EnumMember(Value = "PowerDesc")]
        PowerDesc = 6,

        [EnumMember(Value = "TopSpeedDesc")]
        TopSpeedDesc = 7,

        [EnumMember(Value = "MaxDCCharging")]
        MaxDCCharging = 8,

        [EnumMember(Value = "NominalVoltage")]
        NominalVoltage = 9,

        [EnumMember(Value = "ZeroTo100")]
        ZeroTo100 = 10,

        [EnumMember(Value = "DrivingTime1000kmChallenge")]
        DrivingTime1000kmChallenge = 11,

        [EnumMember(Value = "AverageSpeed1000kmChallengeDesc")]
        AverageSpeed1000kmChallengeDesc = 12,

        [EnumMember(Value = "TravelSpeedWltpDesc")]
        TravelSpeedWltpDesc = 13,

        [EnumMember(Value = "TravelSpeed120kmhDesc")]
        TravelSpeed120kmhDesc = 14,

        [EnumMember(Value = "AverageChargingSpeedDesc")]
        AverageChargingSpeedDesc = 15,

        [EnumMember(Value = "AverageChargingSpeed10100Desc")]
        AverageChargingSpeed10100Desc = 16,

        [EnumMember(Value = "AverageChargingSpeed1080Desc")]
        AverageChargingSpeed1080Desc = 17,
    }
}
