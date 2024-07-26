using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines the charging curve type.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ChargingCurveType : int
    {
        /// <summary>
        /// Means the charging curve type is not set.
        /// </summary>
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        /// <summary>
        /// Means the charging curve is for optimal conditions. 
        /// </summary>
        [EnumMember(Value = "Optimal")]
        Optimal = 1,

        /// <summary>
        /// Means the charging curve is for low voltage conditions.(400 volts)
        /// </summary>
        [EnumMember(Value = "LowVoltage")]
        LowVoltage = 2,

        /// <summary>
        /// Means the charging curve is for cold conditions.
        /// </summary>
        [EnumMember(Value = "Cold")]
        Cold = 3,
    }
}
