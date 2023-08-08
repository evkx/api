using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum OnePedalStoppingMode: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Hold")]
        Hold = 1,

        [EnumMember(Value = "Roll")]
        Roll = 2,

        [EnumMember(Value = "Creep")]
        Creep = 3,

        [EnumMember(Value = "HoldRoll")]
        HoldRoll = 4,

        [EnumMember(Value = "HoldRollCreep")]
        HoldRollCreep = 5,
    }
}
