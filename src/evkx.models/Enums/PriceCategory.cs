using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PriceCategory : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Budget")]
        Budget = 1,

        [EnumMember(Value = "Mid")]
        Mid = 2,

        [EnumMember(Value = "Premium")]
        Premium = 3,

        [EnumMember(Value = "Luxury")]
        Luxury = 4,
    }
}
