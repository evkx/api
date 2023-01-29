using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum PortLocation: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "FirstRowCenterConsol")]
        FirstRowCenterConsol = 1,

        [EnumMember(Value = "FirstRowArmRest")]
        FirstRowArmRest = 2,

        [EnumMember(Value = "SecondRowCenterConsol")]
        SecondRowCenterConsol = 3,

        [EnumMember(Value = "FirstRowSeatBack")]
        FirstRowSeatBack = 4,

        [EnumMember(Value = "ThirdRowLeftSide")]
        ThirdRowLeftSide = 5,

        [EnumMember(Value = "ThirdRowRightSide")]
        ThirdRowRightSide = 6,

        [EnumMember(Value = "TrunkLeftSide")]
        TrunkLeftSide = 7,

        [EnumMember(Value = "TrunkRightSide")]
        TrunkRightSide = 8,

        [EnumMember(Value = "BackOfDriverSeat")]
        BackOfDriverSeat = 9,

        [EnumMember(Value = "BackOfPassengerSeat")]
        BackOfPassengerSeat = 10,

        [EnumMember(Value = "PassengerDoor")]
        PassengerDoor = 11,

        [EnumMember(Value = "Dashboard")]
        Dashboard = 12,

        [EnumMember(Value = "LeftSecondRowDoor")]
        LeftSecondRowDoor = 13,

        [EnumMember(Value = "RightSecondRowDoor")]
        RightSecondRowDoor = 14,
    }
}
