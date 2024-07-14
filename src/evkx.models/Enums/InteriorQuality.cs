using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorQuality: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Budget")]
        Budget = 1,

        [EnumMember(Value = "Standard")]
        Standard = 2,

        [EnumMember(Value = "HighQuality")]
        HighQuality = 3,

        [EnumMember(Value = "Premium")]
        Premium = 4,

        [EnumMember(Value = "PremiumPlus")]
        PremiumPlus = 5,

        [EnumMember(Value = "Luxury")]
        Luxury = 6,
    }
}
