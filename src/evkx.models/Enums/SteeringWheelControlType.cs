using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SteeringWheelControlType: int
    {
        NotSet,

        PhysicalButtons,

        PhysicalButtonsPaddleShifter,

        PhysicalButtonsScrollWheels,

        PhysicalButtonsScrollWheelPaddleShifter,

        PhysicalButtonsToggleSwitchPaddleShifter,

        PhysicalButtonsToggleSwitch,

        HapticButtonsPaddleShifter,

        HapticButtons,

        CapactiveButtonsPaddleShifter,

        CapactiveButtons,

        TwinScrollWheel,

    }
}
