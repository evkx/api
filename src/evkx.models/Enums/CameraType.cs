using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum CameraType : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "FrontView")]
        FrontView = 1,

        [EnumMember(Value = "RearView")]
        RearView = 2,

        [EnumMember(Value = "SurroundView")]
        SurroundView = 3,

        [EnumMember(Value = "SideView")]
        SideView = 4,

        [EnumMember(Value = "ReversingView")]
        ReversingView = 5,

        [EnumMember(Value = "InfraredFrontView")]
        InfraredFrontView = 6,
    }
}
