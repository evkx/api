using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ScreenRotation : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "Vertical")]
        Vertical = 1,

        [EnumMember(Value = "Horizontal")]
        Horizontal = 2,

        [EnumMember(Value = "Rotatable")]
        Rotatable = 3,

    }
}
