using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines the type of paint
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PaintType: int
    {
        NotSet,

        Solid,

        Metallic,

        Pearlescent,

        Matte,

        Candy,

        Wrap,

        MultiCoat,

        CrystalEffect,

        Uni,

        TriCoat,

        Satin,
    }
}
