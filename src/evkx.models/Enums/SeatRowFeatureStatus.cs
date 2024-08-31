using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SeatRowFeatureStatus: int
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
        OptionalManualOrElectric = 10,


        [EnumMember(Value = "StandardElectricDriver")]
        StandardElectricDriver = 11,

        [EnumMember(Value = "StandardElectricDriverStandardManualPassenger")]
        StandardElectricDriverStandardManualPassenger = 12,

        [EnumMember(Value = "StandardElectricDriverNotAvailablePassenger")]
        StandardElectricDriverNotAvailablePassenger = 13,

        [EnumMember(Value = "StandardDriverNotAvailablePassenger")]
        StandardDriverNotAvailablePassenger = 14,

        [EnumMember(Value = "StandardOuterSeats")]
        StandardOuterSeats = 15,

        [EnumMember(Value = "StandardElectricPassengerSeat")]
        StandardElectricPassengerSeat = 16,

        [EnumMember(Value = "StandardPassengerSeat")]
        StandardPassengerSeat = 17,
    }
}
