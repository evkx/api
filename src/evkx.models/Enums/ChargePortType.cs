using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum ChargePortType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "J1772")]
        J1772 = 1,

        [EnumMember(Value = "Type2")]
        Type2 = 2,

        [EnumMember(Value = "CHAdeMO")]
        LeftRearCorner = 3,

        [EnumMember(Value = "CCS1")]
        CCS1 = 4,

        [EnumMember(Value = "CCS2")]
        CCS2 = 5,

        [EnumMember(Value = "NACS")]
        NACS = 6,
    }
}
