using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum PanoramicRoofType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "FullFixed")]
        FullFixed = 1,

        [EnumMember(Value = "TwoPartsFullFixed")]
        TwoPartsFullFixed = 2,

        [EnumMember(Value = "PartialOpenFront")]
        PartialOpenFront = 3,

        [EnumMember(Value = "TwoPartsFullOpenFront")]
        TwoPartsFullOpenFront = 4,

        [EnumMember(Value = "OnlyFrontOpen")]
        OnlyFrontOpen = 5,

        [EnumMember(Value = "PartialFixed")]
        PartialFixed = 6,

        [EnumMember(Value = "FourSeperateRemovableGlassPanels")]
        FourSeperateRemovableGlassPanels = 7,

        [EnumMember(Value = "FrontAndGlassPanelInGullwingDoors")]
        FrontAndGlassPanelInGullwingDoors = 8,

        [EnumMember(Value = "TwoPartPartialFixed")]
        TwoPartPartialFixed = 9,

        [EnumMember(Value = "PanoramicWindshieldAndRearSkylight")]
        PanoramicWindshieldAndRearSkylight = 10,

        [EnumMember(Value = "TwoSeperatePartPartialFixed")]
        TwoSeperatePartPartialFixed = 11,

        [EnumMember(Value = "PanoramicWindshieldAndRearGlass")]
        PanoramicWindshieldAndRearGlass = 12,

        [EnumMember(Value = "TwoSeperatePartPartialFrontOpen")]
        TwoSeperatePartPartialFrontOpen = 13

    }
}
