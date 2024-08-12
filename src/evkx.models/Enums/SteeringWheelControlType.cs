using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SteeringWheelControlType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "PhysicalButtons")]
        PhysicalButtons = 1,

        [EnumMember(Value = "PhysicalButtonsScrollWheels")]
        PhysicalButtonsScrollWheels = 2,

        [EnumMember(Value = "PhysicalButtonsScrollWheelPaddleShifter")]
        PhysicalButtonsScrollWheelPaddleShifter = 3,

        [EnumMember(Value = "HapticButtonsPaddleShifter")]
        HapticButtonsPaddleShifter = 4,

        [EnumMember(Value = "HapticButtons")]
        HapticButtons = 5,

        [EnumMember(Value = "CapactiveButtonsPaddleShifter")]
        CapactiveButtonsPaddleShifter = 6,

        [EnumMember(Value = "CapactiveButtons")]
        CapactiveButtons = 7,

        [EnumMember(Value = "TwinScrollWheel")]
        TwinScrollWheel = 8,

    }
}
