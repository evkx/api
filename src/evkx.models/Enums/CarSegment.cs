using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum CarSegment : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "A-Segment")]
        A_Segment = 1,

        [EnumMember(Value = "B-Segment")]
        B_Segment = 2,

        [EnumMember(Value = "C-Segment")]
        C_Segment = 3,

        [EnumMember(Value = "D-Segment")]
        D_Segment = 4,

        [EnumMember(Value = "E-Segment")]
        E_Segment = 5,

        [EnumMember(Value = "F-Segment")]
        F_Segment = 6,

        [EnumMember(Value = "SubCompact-Suv")]
        B_SUV = 7,

        [EnumMember(Value = "Compact-Suv")]
        C_SUV = 8,

        [EnumMember(Value = "MidSize-Suv")]
        D_SUV = 9,

        [EnumMember(Value = "FullSize-Suv")]
        E_SUV = 10,

        [EnumMember(Value = "Mini-MPV")]
        Mini_MPV = 11,

        [EnumMember(Value = "Compact-MPV")]
        Compact_MPV = 12,

        [EnumMember(Value = "Large-MPV")]
        Large_MPV = 13,

        [EnumMember(Value = "MidSize-Pickup-Truck")]
        MidSize_Pickup_Truck = 14,

        [EnumMember(Value = "FullSize-Pickup-Truck")]
        FullSize_Pickup_Truck = 15,
    }
}
