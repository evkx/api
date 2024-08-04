using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DamperType : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Monotube")]
        Monotube = 1,

        [EnumMember(Value = "Magnetorheological")]
        Magnetorheological = 2,

        [EnumMember(Value = "ElectronicallyControlled")]
        ElectronicallyControlled = 3,

        [EnumMember(Value = "ActiveHydraulic")]
        ActiveHydraulic = 4,
    }
}
