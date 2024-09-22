using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SteeringWheelDesignType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Circular")]
        Circular = 1,

        [EnumMember(Value = "CircularFlatBottom")]
        CircularFlatBottom = 2,

        [EnumMember(Value = "CircularFlatBottomTop")]
        CircularFlatBottomTop = 3,

        [EnumMember(Value = "Yoke")]
        Yoke = 4,

        [EnumMember(Value = "Oval")]
        Oval = 5,
    }
}
