using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum V2XPortType: int
    {
        [EnumMember(Value = "TypeA")]
        TypeA = 4,

        [EnumMember(Value = "TypeB")]
        TypeB = 5,

        [EnumMember(Value = "TypeC")]
        TypeC = 6,

        [EnumMember(Value = "TypeD")]
        TypeD = 7,

        [EnumMember(Value = "TypeE")]
        TypeE = 8,

        [EnumMember(Value = "TypeF")]
        TypeF = 9,

        [EnumMember(Value = "TypeG")]
        TypeG = 10,

        [EnumMember(Value = "TypeH")]
        TypeH = 11,

        [EnumMember(Value = "TypeI")]
        TypeI = 12,

        [EnumMember(Value = "TypeJ")]
        TypeJ = 13,

        [EnumMember(Value = "TypeK")]
        TypeK = 14,

        [EnumMember(Value = "TypeL")]
        TypeL = 15,

        [EnumMember(Value = "TypeM")]
        TypeM = 16,

        [EnumMember(Value = "TypeN")]
        TypeN = 17,

        [EnumMember(Value = "TypeO")]
        TypeO = 18,

        [EnumMember(Value = "NEMA520")]
        NEMA520 = 19,

        [EnumMember(Value = "NEMA1450")]
        NEMA1450 = 20,
    }
}
