using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines the placement of the airbag.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum AirbagPlacement
    {
        NotSet,
        SteeringWheel,
        InDashFrontOfPassenger,
        LeftWindows,
        RightWindows,
        SideDriver,
        SidePassenger,
        LeftSideSecondRow,
        RightSideSecondRow,
        BetweenFrontSeats,
    }
}
