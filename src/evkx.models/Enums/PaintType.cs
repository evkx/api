using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PaintType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Solid")]
        Solid = 1,

        [EnumMember(Value = "Metallic")]
        Metallic = 2,

        [EnumMember(Value = "Pearlescent")]
        Pearlescent = 3,

        [EnumMember(Value = "Matte")]
        Matte = 4,

        [EnumMember(Value = "Candy")]
        Candy = 5,

        [EnumMember(Value = "Wrap")]
        Wrap = 6,

        [EnumMember(Value = "MultiCoat")]   
        MultiCoat = 7,

        [EnumMember(Value = "CrystalEffect")]
        CrystalEffect = 8,

        [EnumMember(Value = "Uni")]
        Uni = 9,

        [EnumMember(Value = "TriCoat")]
        TriCoat = 10,

        [EnumMember(Value = "Satin")]
        Satin = 11,
    }
}
