using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum PaintArea: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Roof")]
        Roof = 1,

        [EnumMember(Value = "UpperBody")]
        UpperBody = 2,

        [EnumMember(Value = "RoofAndHood")]
        RoofAndHood = 3,
    }
}
