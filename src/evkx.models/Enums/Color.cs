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
        [EnumMember(Value = "NotSet")]
        NotSet = 0,
        [EnumMember(Value = "Amber")]
        Amber = 1,
        [EnumMember(Value = "Antracite")]
        Antracite = 2,
        [EnumMember(Value = "Beige")]
        Beige = 3,
        [EnumMember(Value = "Black")]
        Black = 4,
        [EnumMember(Value = "Blue")]
        Blue = 5,
        [EnumMember(Value = "Brown")]
        Brown = 6,
        [EnumMember(Value = "Burgundy")]
        Burgundy = 7,
        [EnumMember(Value = "Caramel")]
        Caramel = 8,
        [EnumMember(Value = "Charcoal")]
        Charcoal = 9,
        [EnumMember(Value = "Cognac")]
        Cognac = 10,
        [EnumMember(Value = "Coral")]
        Coral = 11,
        [EnumMember(Value = "Cyan")]
        Cyan = 12,
        [EnumMember(Value = "Gold")]
        Gold = 13,
        [EnumMember(Value = "Gray")]
        Gray = 14,
        [EnumMember(Value = "Green")]
        Green = 15,
        [EnumMember(Value = "Indigo")]
        Indigo = 16,
        [EnumMember(Value = "Ivory")]
        Ivory = 17,
        [EnumMember(Value = "Lavender")]
        Lavender = 18,
        [EnumMember(Value = "Lime")]
        Lime = 19,
        [EnumMember(Value = "Magenta")]
        Magenta = 20,
        [EnumMember(Value = "Maroon")]
        Maroon = 21,
        [EnumMember(Value = "Mint")]
        Mint = 22,
        [EnumMember(Value = "Mocha")]
        Mocha = 23,
        [EnumMember(Value = "Navy")]
        Navy = 24,
        [EnumMember(Value = "Olive")]
        Olive = 25,
        [EnumMember(Value = "Orange")]
        Orange = 26,
        [EnumMember(Value = "Oyster")]
        Oyster = 27,
        [EnumMember(Value = "Peach")]
        Peach = 28,
        [EnumMember(Value = "Pink")]
        Pink = 29,
        [EnumMember(Value = "Plum")]
        Plum = 30,
        [EnumMember(Value = "Purple")]
        Purple = 31,
        [EnumMember(Value = "Red")]
        Red = 32,
        [EnumMember(Value = "Rose")]
        Rose = 33,
        [EnumMember(Value = "Silver")]
        Silver = 34,
        [EnumMember(Value = "Smoke")]
        Smoke = 35,
        [EnumMember(Value = "Tan")]
        Tan = 36,
        [EnumMember(Value = "Teal")]
        Teal = 37,
        [EnumMember(Value = "Truffle")]
        Truffle = 38,
        [EnumMember(Value = "Turquoise")]
        Turquoise = 39,
        [EnumMember(Value = "Violet")]
        Violet = 40,
        [EnumMember(Value = "White")]
        White = 41,
        [EnumMember(Value = "Yellow")]
        Yellow = 42,
        [EnumMember(Value = "Lilac")]
        Lilac = 43,
        [EnumMember(Value = "DarkGray")]
        DarkGray = 44,
        [EnumMember(Value = "LightGray")]
        LightGray = 45
    }
}
