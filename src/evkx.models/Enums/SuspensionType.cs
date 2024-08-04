using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SuspensionType: int
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

        [EnumMember(Value = "TrailingWishbone")]
        TrailingWishbone = 6,
    }
}
