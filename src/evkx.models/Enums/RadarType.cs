using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum RadarType : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "ShortRange")]
        ShortRange = 1,

        [EnumMember(Value = "MidRange")]
        MidRange = 2,

        [EnumMember(Value = "LongRange")]
        LongRange = 3,
    }
}
