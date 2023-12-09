using System.Runtime.Serialization;

namespace evdb.models.Enums
{
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
    }
}
