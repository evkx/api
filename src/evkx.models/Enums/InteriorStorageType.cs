using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorStorageType: int
    {
        NotSet,
        DoorPocket,
        SeatbackPocket,
        GloveCompartment,
        CenterConsole,
        UnderSeatStorage,
        UnderFloorStorage,
        CargoNetsAndHooks,
        OverheadStorage,
        CupHolder,
        SideCompartments,
        RemovableTrays,
        FoldFlatSeats,
        HiddenDashStorage,
        RearArmrestStorage,
        ConsoleStorage,
    }
}
