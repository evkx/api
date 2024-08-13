using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorMirrorType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Traditional")]
        Traditional = 1,

        [EnumMember(Value = "Screen")]
        Screen = 2,

        [EnumMember(Value = "ScreenMirror")]
        ScreenMirror = 3,
    }
}
