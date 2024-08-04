using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DashboardDesign: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "IntegratedScreens")]
        IntegratedScreen = 1,

        [EnumMember(Value = "NonIntegratedScreens")]
        NonIntegratedScreens = 2,

        [EnumMember(Value = "MinimalisticNonIntegratedScreen")]
        MinimalisticNonIntegratedScreen = 3,
    }
}
