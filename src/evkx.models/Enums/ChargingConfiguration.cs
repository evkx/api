using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ChargingConfiguration : int
    {
        NotSet,

        SplitBattery,

        CombineBattery,

        VoltageConversion,

        ChargerMatching,
    }
}
