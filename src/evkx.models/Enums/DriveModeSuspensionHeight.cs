using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DriveModeSuspensionHeight : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Normal")]
        Normal = 1,

        [EnumMember(Value = "High1")]
        High1 = 2,

        [EnumMember(Value = "High2")]
        High2 = 3,

        [EnumMember(Value = "High3")]
        High3 = 4,

        [EnumMember(Value = "Low1")]
        Low1 = 2,

        [EnumMember(Value = "Low2")]
        Low2 = 3,

        [EnumMember(Value = "Low3")]
        Low3 = 4,
    }
}
