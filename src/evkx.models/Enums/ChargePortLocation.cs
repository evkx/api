using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum ChargePortLocation: int
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
    }
}
