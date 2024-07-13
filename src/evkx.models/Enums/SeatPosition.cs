using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SeatPosition: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Driver")]
        Driver = 1,

        [EnumMember(Value = "FrontPassenger")]
        FrontPassenger = 2,

        [EnumMember(Value = "BehindDriver")]
        BehindDriver = 4,

        [EnumMember(Value = "BehindPassenger")]
        BehindPassenger = 5,

        [EnumMember(Value = "Middle")]
        Middle = 6,

        [EnumMember(Value = "Left")]
        Left = 7,

        [EnumMember(Value = "Right")]
        Right = 8
    }
}
