using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Region: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Africa")]
        Africa = 1,

        [EnumMember(Value = "Americas")]
        Americas = 2,

        [EnumMember(Value = "Asia")]
        Asia = 3,

        [EnumMember(Value = "Europe")]
        Europe = 4,

        [EnumMember(Value = "Oceania")]
        Oceania = 5,
    }
}
