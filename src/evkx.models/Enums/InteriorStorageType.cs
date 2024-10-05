using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorStorageType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet,

        [EnumMember(Value = "DoorPocket")]
        DoorPocket,

        [EnumMember(Value = "SeatbackPocket")]
        SeatbackPocket,

        [EnumMember(Value = "GloveCompartment")]
        GloveCompartment,

        [EnumMember(Value = "CenterConsole")]
        CenterConsole,

        [EnumMember(Value = "UnderSeatStorage")]
        UnderSeatStorage,

        [EnumMember(Value = "UnderFloorStorage")]
        UnderFloorStorage,

        [EnumMember(Value = "CargoNetsAndHooks")]
        CargoNetsAndHooks,

        [EnumMember(Value = "OverheadStorage")]
        OverheadStorage,

        [EnumMember(Value = "CupHolder")]
        CupHolder,

        [EnumMember(Value = "SideCompartment")]
        SideCompartments,

        [EnumMember(Value = "RemovableTray")]
        RemovableTrays,

        [EnumMember(Value = "FoldFlatSeats")]
        FoldFlatSeats,

        [EnumMember(Value = "HiddenDashStorage")]
        HiddenDashStorage,

        [EnumMember(Value = "RearArmrestStorage")]
        RearArmrestStorage
    }
}
