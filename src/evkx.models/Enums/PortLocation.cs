using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PortLocation: int
    {
        NotSet,

        FirstRowCenterConsol,

        FirstRowArmRest,

        SecondRowCenterConsol,

        FirstRowSeatBack,

        ThirdRowLeftSide,

        ThirdRowRightSide,

        TrunkLeftSide,

        TrunkRightSide,

        BackOfDriverSeat,

        BackOfPassengerSeat,

        PassengerDoor,

        Dashboard,

        LeftSecondRowDoor,

        RightSecondRowDoor,

        SecondRowArmRest,

        ThirdRowArmRest,

        BelowSecondRowSeat,

        Glowbox,

        BedLeftSide,

        BedRightSide,

        FrunkLeftSide,

        FrunkRightSide,
    }
}
