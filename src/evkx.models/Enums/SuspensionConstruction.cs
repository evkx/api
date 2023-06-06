using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum SuspensionConstruction: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "MacPhersonStrut")]
        MacPhersonStrut = 1,

        [EnumMember(Value = "Multilink")]
        Multilink = 2,

        [EnumMember(Value = "DoubleWishbone")] 
        DoubleWishbone = 3,

        [EnumMember(Value = "Leaf")]
        Leaf = 4,

        [EnumMember(Value = "TorsionBeam")]
        TorsionBeam = 5,
    }
}
