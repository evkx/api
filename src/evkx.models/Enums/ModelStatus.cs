using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ModelStatus: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Rumoured")]
        Rumoured = 1,

        [EnumMember(Value = "Confirmed")]
        Confirmed = 2,

        [EnumMember(Value = "Announced")]
        Announced = 4,

        [EnumMember(Value = "InProduction")]
        InProduction = 5,

        [EnumMember(Value = "Discontinued")]
        Discontinued = 6,
    }
}
