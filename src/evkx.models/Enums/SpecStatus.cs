using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum SpecStatus : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Complete")]
        Complete = 1,

        [EnumMember(Value = "InComplete")]
        InComplete = 2,
    }
}
