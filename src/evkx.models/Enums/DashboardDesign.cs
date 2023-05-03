using System.Runtime.Serialization;

namespace evdb.models.Enums
{
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
