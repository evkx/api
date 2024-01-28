using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ChargePortConnector: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "J1772")]
        J1772 = 1,

        [EnumMember(Value = "Type2")]
        Type2 = 2,

        [EnumMember(Value = "CHAdeMO")]
        CHAdeMO = 3,

        [EnumMember(Value = "CCS1")]
        CCS1 = 4,

        [EnumMember(Value = "CCS2")]
        CCS2 = 5,

        [EnumMember(Value = "NACS")]
        NACS = 6,

        [EnumMember(Value = "GBT")]
        GBT = 7,
    }
}
