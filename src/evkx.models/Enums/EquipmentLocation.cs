using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum EquipmentLocation: int
    {
        NotSet,

        LeftFrontCorner ,

        RightFrontCorner,

        LeftRearCorner,

        RightRearCorner,

        LeftFrontSide,

        RightFrontSide,

        LeftRearSide,

        RightRearSide,

        Front,

        TopCenterWindshield,

        OnLeftWingMirror,

        OnRightWingMirror,

        OnBumberRearLeftSide,

        OnBumberRearRightSide,

        OnBumberRearLeftCorner,

        OnBumberRearRightCorner,

        OnBumberRear,

        OnBumberFrontLeftSide,

        OnBumberFrontRightSide,

        OnBumberFrontLeftCorner,

        OnBumberFrontRightCorner,

        OnBumberFront,

        RearCenter,

        LeftBPillar,

        RightBPillar,

        CenterRoofOverWindshield,

        CenterRoofOverRearWindow,

        OverheadConsole,

        LeftRoofOverWindshield,

        RightRoofOverWindshield,

    }
}
