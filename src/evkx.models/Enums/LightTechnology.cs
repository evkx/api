using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum LightTechnology: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "LED")]
        LED = 1,

        [EnumMember(Value = "LEDMatrix")]
        LEDMatrix = 2,

        [EnumMember(Value = "LEDDigitalMatrix")]
        LEDDigitalMatrix = 3,

        [EnumMember(Value = "LEDMatrixLaser")]
        LEDMatrixLaser = 4,

        [EnumMember(Value = "Halogen")]
        Halogen = 5,

        [EnumMember(Value = "OLED")]
        OLED = 6
    }
}
