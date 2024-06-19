using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum CurveStatus: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Estimated")]
        Estimated = 1,

        [EnumMember(Value = "PublicTest")]
        PublicTest = 2,

        [EnumMember(Value = "EvkxTest")]
        EvkxTest = 3,

        [EnumMember(Value = "CrowdSourcing")]
        CrowdSourcing = 4,
    }
}
