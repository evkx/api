using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum AvailableStatus: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Announced")]
        Announced = 1,

        [EnumMember(Value = "Available")]
        Available = 2,

        [EnumMember(Value = "NotAvailable")]
        NotAvailable = 3,

        [EnumMember(Value = "Discontinued")]
        Discontinued = 4,

    }
}
