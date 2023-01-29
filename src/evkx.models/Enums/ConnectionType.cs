using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum ConnectionType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "USBC")]
        USBC = 1,

        [EnumMember(Value = "USBA")]
        USBA = 2,

        [EnumMember(Value = "VOLT12")]
        VOLT12 = 3,

        [EnumMember(Value = "AC230")]
        AC230 = 4,
    }
}
