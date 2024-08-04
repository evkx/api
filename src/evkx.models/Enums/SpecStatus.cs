using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SpecStatus : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Complete")]
        Complete = 1,

        [EnumMember(Value = "InComplete")]
        InComplete = 2,
    }
}
