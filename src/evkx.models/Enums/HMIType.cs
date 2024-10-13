using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum HMIType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "ScreenFocusWithStalksAndButtons")]
        ScreenFocusWithStalksAndButtons = 1,

        [EnumMember(Value = "ScreenFocusWithStalksAndLimitedButtons")]
        ScreenFocusWithStalksAndLimitedButtons = 2,

        [EnumMember(Value = "ScreenFocusWithLimitedButtons")]
        ScreenFocusWithLimitedButtons = 3,

        [EnumMember(Value = "ScreensWithStalksAndLotsOfButtons")]
        ScreensWithStalksAndLotsOfButtons = 4,


    }
}
    