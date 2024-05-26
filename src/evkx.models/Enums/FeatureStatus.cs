using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum FeatureStatus: int
    {
        [EnumMember(Value = "Unknown")]
        Unknown = 0,

        [EnumMember(Value = "NotAvailable")]
        NotAvailable = 1,

        [EnumMember(Value = "Optional")]
        Optional = 2,

        [EnumMember(Value = "Standard")]
        Standard = 3,

        [EnumMember(Value = "RequiresSoftwareUpdate")]
        RequiresSoftwareUpdate = 4,
    }
}
