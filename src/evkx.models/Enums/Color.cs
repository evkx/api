using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines base colors for exterior and interior of vehicles.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Color : int
    {
        NotSet,
        Amber,
        Antracite,
        Beige,
        Black,
        Blue,
        Bronze,
        Brown,
        Burgundy,
        Caramel,
        Charcoal,
        Cognac,
        Copper,
        Coral,
        Cyan,
        DarkGray,
        Gold,
        Gray,
        Green,
        Indigo,
        Ivory,
        Lavender,
        Lilac,
        Lime,
        LightGray,
        Magenta,
        Maroon,
        Mint,
        Mocha,
        Navy,
        Olive,
        Orange,
        Oyster,
        Peach,
        Pink,
        Plum,
        Purple,
        Red,
        Rose,
        Silver,
        Smoke,
        Steel,
        Tan,
        Teal,
        Truffle,
        Turquoise,
        Violet,
        White,
        Yellow
    }
}
