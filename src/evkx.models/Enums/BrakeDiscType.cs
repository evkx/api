using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum BrakeDiscType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "CastIron")]
        CastIron = 1,

        [EnumMember(Value = "TungstenCarbidCoating")]
        TungstenCarbidCoating = 2,

        [EnumMember(Value = "Ceramic")]
        Ceramic = 3,
    }
}
