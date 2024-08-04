using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ModelVariant : int
    {

        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Entry")]
        Entry = 1,

        [EnumMember(Value = "Performance")]
        Performance = 2,

        [EnumMember(Value = "LongRangeAWD")]
        LongRangeAWD = 3,

        [EnumMember(Value = "LongRange2WD")]
        LongRange2WD = 4,
    }
}
