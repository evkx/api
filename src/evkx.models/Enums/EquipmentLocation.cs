using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum EquipmentLocation: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "LeftFrontCorner")]
        LeftFrontCorner = 1,

        [EnumMember(Value = "RightFrontCorner")]
        RightFrontCorner = 2,

        [EnumMember(Value = "LeftRearCorner")]
        LeftRearCorner = 3,

        [EnumMember(Value = "RightRearCorner")]
        RightRearCorner = 4,

        [EnumMember(Value = "LeftFrontSide")]
        LeftFrontSide = 5,

        [EnumMember(Value = "RightFrontSide")]
        RightFrontSide = 6,

        [EnumMember(Value = "LeftRearSide")]
        LeftRearSide = 7,

        [EnumMember(Value = "RightRearSide")]
        RightRearSide = 8,

        [EnumMember(Value = "Front")]
        Front = 9,

        [EnumMember(Value = "TopCenterWindshield")]
        TopCenterWindshield = 10,

        [EnumMember(Value = "OnLeftWingMirror")]
        OnLeftWingMirror = 11,

        [EnumMember(Value = "OnRightWingMirror")]
        OnRightWingMirror = 12,

        [EnumMember(Value = "OnBumberRearLeftSide")]
        OnBumberRearLeftSide = 13,

        [EnumMember(Value = "OnBumberRearRightSide")]
        OnBumberRearRightSide = 14,

        [EnumMember(Value = "OnBumberRearLeftCorner")]
        OnBumberRearLeftCorner = 15,

        [EnumMember(Value = "OnBumberRearRightCorner")]
        OnBumberRearRightCorner = 16,

        [EnumMember(Value = "OnBumberRear")]
        OnBumberRear = 17,

        [EnumMember(Value = "OnBumberFrontLeftSide")]
        OnBumberFrontLeftSide = 18,

        [EnumMember(Value = "OnBumberFrontRightSide")]
        OnBumberFrontRightSide = 19,

        [EnumMember(Value = "OnBumberFrontLeftCorner")]
        OnBumberFrontLeftCorner = 20,

        [EnumMember(Value = "OnBumberFrontRightCorner")]
        OnBumberFrontRightCorner = 21,

        [EnumMember(Value = "OnBumberFront")]
        OnBumberFront = 22,

        [EnumMember(Value = "RearCenter")]
        RearCenter = 23,

        [EnumMember(Value = "LeftBPillar")]
        LeftBPillar = 24,

        [EnumMember(Value = "RightBPillar")]
        RightBPillar = 25,

        [EnumMember(Value = "CenterRoofOverWindshield")]
        CenterRoofOverWindshield = 26,

        [EnumMember(Value = "CenterRoofOverRearWindow")]
        CenterRoofOverRearWindow = 27,

    }
}
