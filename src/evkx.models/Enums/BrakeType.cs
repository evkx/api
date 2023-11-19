using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum BrakeType : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Drum")]
        Drum = 1,

        [EnumMember(Value = "FixedCaliperDisc")]
        FixedCaliperDisc = 2,

        [EnumMember(Value = "FloatingCaliperDisc")]
        FloatingCaliperDisc = 3,
    }
}
