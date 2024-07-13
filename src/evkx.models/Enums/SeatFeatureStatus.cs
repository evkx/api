using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SeatFeatureStatus: int
    {
        [EnumMember(Value = "Unknown")]
        Unknown = 0,

        [EnumMember(Value = "NotAvailable")]
        NotAvailable = 1,

        [EnumMember(Value = "Standard")]
        Standard = 3,

        [EnumMember(Value = "StandardManual")]
        StandardManual = 4,

        [EnumMember(Value = "StandardManualOptionalElectric")]
        StandardManualOptionalElectric = 5,

        [EnumMember(Value = "StandardElectric")]
        StandardElectric = 6,

        [EnumMember(Value = "Optional")]
        Optional = 7,

        [EnumMember(Value = "OptionalManual")]
        OptionalManual = 8,

        [EnumMember(Value = "OptionalElectric")]
        OptionalElectric = 9,

        [EnumMember(Value = "OptionalManualOrElectric")]
        OptionalManualOrElectricric = 10,
    }
}
