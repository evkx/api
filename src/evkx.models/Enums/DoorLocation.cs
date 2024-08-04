using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DoorLocation: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "FrontLeft")]
        FrontLeft = 1,

        [EnumMember(Value = "FrontRight")]
        FrontRight = 2,

        [EnumMember(Value = "RearLeft")]
        RearLeft = 3,

        [EnumMember(Value = "RearRight")]
        RearRight = 4,

        [EnumMember(Value = "Tail")]
        Tail = 5,

        [EnumMember(Value = "Hood")]
        Hood = 6,
    }
}
