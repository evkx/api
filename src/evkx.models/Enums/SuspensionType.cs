using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum SuspensionType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "SteelSprings")]
        SteelSprings = 1,

        [EnumMember(Value = "AirSuspension")]
        AirSuspension = 2,

        [EnumMember(Value = "SteelSpringsWithOilDampers")]
        SteelSpringsWithOilDampers = 3,

    }
}
