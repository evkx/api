using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace evdb.models.Enums
{
    public enum ScreenLocation : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "BehindSteeringWheelInDash")]
        BehindSteeringWheelInDash = 1,

        [EnumMember(Value = "BehindSteeringWheelOnDash")]
        BehindSteeringWheelOnDash = 2,

        [EnumMember(Value = "BehindSteeringWheelLeftSideOfSharedFrameTopOfDash")]
        BehindSteeringWheelLeftSideOfSharedFrameTopOfDash = 3,

        [EnumMember(Value = "RightSideOfSharedFrameTopOfDash")]
        RightSideOfSharedFrameTopOfDash = 4,

        [EnumMember(Value = "PassengerSideInDash")]
        PassengerSideInDash = 5,

        [EnumMember(Value = "TopCenterConsole")]
        TopCenterConsole = 6,

        [EnumMember(Value = "BottomCenterConsole")]
        BottomCenterConsole = 7,

        [EnumMember(Value = "CenterConsole")]
        CenterConsole = 8,

        [EnumMember(Value = "OnCenterOfDash")]
        OnCenterOfDash = 9,

        [EnumMember(Value = "InCenterOfDash")]
        InCenterOfDash = 10,

        [EnumMember(Value = "OnTopOfSteeringWheelColumn")]
        OnTopOfSteeringWheelColumn = 11,

        [EnumMember(Value = "RearCenterConsole")]
        RearCenterConsole = 12,

        [EnumMember(Value = "BehindSteeringWheelCenterOfSharedFrameTopOfDash")]
        BehindSteeringWheelCenterOfSharedFrameTopOfDash = 13,

        [EnumMember(Value = "LeftSideOfSharedFrameTopOfDash")]
        LeftSideOfSharedFrameTopOfDash = 14,

        [EnumMember(Value = "PassengerSideOnDash")]
        PassengerSideOnDash = 15,

        [EnumMember(Value = "BehindSteeringWheelToCenterOnDash")]
        BehindSteeringWheelToCenterOnDash = 16,

        [EnumMember(Value = "SecondRowCenterConsole")]
        SecondRowCenterConsole = 17,

        [EnumMember(Value = "BehindFirstRowSeatsInRoof")]
        BehindFirstRowSeatsInRoof = 18,

        [EnumMember(Value = "BackOfFirstRowSeat")]
        BackOfFirstRowSeat = 19,

        [EnumMember(Value = "CenterOfSharedFrameTopOfDash")]
        CenterOfSharedFrameTopOfDash = 20,

    }
}
