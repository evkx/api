using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
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

        [EnumMember(Value = "TrunkSizeDesc")]
        TrunkSizeDesc = 18,

        [EnumMember(Value = "MaxTrunkSizeDesc")]
        MaxTrunkSizeDesc = 19,

        [EnumMember(Value = "MaxTrailerSizeDesc")]
        MaxTrailerSizeDesc = 20,

        [EnumMember(Value = "MaxLoadDesc")]
        MaxLoadDesc = 21,

        [EnumMember(Value = "MaxGroundClearanceDesc")]
        MaxGroundClearanceDesc = 22,

        [EnumMember(Value = "MinGroundClearance")]
        MinGroundClearance = 23,

        [EnumMember(Value = "SuspensionHeightAdjustment")]
        SuspensionHeightAdjustment = 24,

        [EnumMember(Value = "Length")]
        Length = 25,

        [EnumMember(Value = "Wheelbase")]
        Wheelbase = 26,

        [EnumMember(Value = "WeightUnladenDINKg")]
        WeightUnladenDINKg = 27,

        [EnumMember(Value = "EnergyCharged10Percent10Min")]
        EnergyCharged10Percent10Min = 28,

        [EnumMember(Value = "EnergyCharged10Percent15Min")]
        EnergyCharged10Percent15Min = 29,

        [EnumMember(Value = "EnergyCharged10Percent20Min")]
        EnergyCharged10Percent20Min = 30,

        [EnumMember(Value = "EnergyCharged10Percent25Min")]
        EnergyCharged10Percent25Min = 31,

        [EnumMember(Value = "EnergyCharged10Percent30Min")]
        EnergyCharged10Percent30Min = 32,

        [EnumMember(Value = "DrivingDistance120kmhCharged10Percent10Min")]
        DrivingDistance120kmhCharged10Percent10Min = 33,

        [EnumMember(Value = "DrivingDistance120kmhCharged10Percent15Min")]
        DrivingDistance120kmhCharged10Percent15Min = 34,

        [EnumMember(Value = "DrivingDistance120kmhCharged10Percent20Min")]
        DrivingDistance120kmhCharged10Percent20Min = 35,

        [EnumMember(Value = "DrivingDistance120kmhCharged10Percent25Min")]
        DrivingDistance120kmhCharged10Percent25Min = 36,

        [EnumMember(Value = "DrivingDistance120kmhCharged10Percent30Min")]
        DrivingDistance120kmhCharged10Percent30Min = 38,

        [EnumMember(Value = "DrivingDistanceWltpCharged10Percent10Min")]
        DrivingDistanceWltpCharged10Percent10Min = 37,

        [EnumMember(Value = "DrivingDistanceWltpCharged10Percent15Min")]
        DrivingDistanceWltpCharged10Percent15Min = 38,

        [EnumMember(Value = "DrivingDistanceWltpCharged10Percent20Min")]
        DrivingDistanceWltpCharged10Percent20Min = 39,

        [EnumMember(Value = "DrivingDistanceWltpCharged10Percent25Min")]
        DrivingDistanceWltpCharged10Percent25Min = 40,

        [EnumMember(Value = "DrivingDistanceWltpCharged10Percent30Min")]
        DrivingDistanceWltpCharged10Percent30Min = 41,

        [EnumMember(Value = "MaxCRating")]
        MaxCRating = 42,

        [EnumMember(Value = "AverageCRating")]
        AverageCRating = 43,

    }
}
