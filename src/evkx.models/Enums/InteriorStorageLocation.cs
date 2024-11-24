using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorStorageLocation: int
    {
        NotSet,
        FirstRowCenterConsol,
        LeftFrontDoor,
        RightFrontDoor,
        LeftRearDoor,
        RightRearDoor,
        SecondRowCenterConsol,
        SecondRowArmrest,
        DashPassengerSide,
        Trunk,
        ThirdRowRightSide,
        ThirdRowLeftSide,
    }
}
