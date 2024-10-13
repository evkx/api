using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// The placement of the light source in an EV.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum LightSourcePlacement
    {
        NotSet,
        Footwell,
        AcrossDashboard,
        UnderSeat,
        DoorPanels,
        Roof,
        Trunk,
        CupHolder,
        GloveBox,
        Console,
    }
}
