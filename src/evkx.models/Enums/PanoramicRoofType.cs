using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines what kind of panoramic roof the car has
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PanoramicRoofType: int
    {
        NotSet,
        FullFixed,
        TwoPartsFullFixed,
        PartialOpenFront,
        TwoPartsFullOpenFront,
        OnlyFrontOpen,
        PartialFixed,
        FourSeperateRemovableGlassPanels,
        FrontAndGlassPanelInGullwingDoors,
        TwoPartPartialFixed,
        PanoramicWindshieldAndRearSkylight,
        TwoSeperatePartPartialFixed,
        PanoramicWindshieldAndRearGlass,
        TwoSeperatePartPartialFrontOpen,
        TwoSeperatePartPartialBothOpen
    }
}
