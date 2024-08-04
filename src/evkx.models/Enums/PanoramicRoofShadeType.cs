using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PanoramicRoofShadeType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "TonedGlass")]
        TonedGlass = 1,

        [EnumMember(Value = "ManualCurtain")]
        ManualCurtain = 2,

        [EnumMember(Value = "ElectricCurtain")]
        ElectricCurtain = 3,

        [EnumMember(Value = "Electrochromic")]
        Electrochromic = 4,

        [EnumMember(Value = "ElectrochromicPattern")]
        ElectrochromicPattern = 5,

        [EnumMember(Value = "ElectrochromicMultipleLevels")]
        ElectrochromicMultipleLevels = 6,

    }
}
