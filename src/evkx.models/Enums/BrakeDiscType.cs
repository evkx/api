using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum BrakeDiscType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "CastIron")]
        CastIron = 1,

        [EnumMember(Value = "TungstenCarbidCoating")]
        TungstenCarbidCoating = 2,

        [EnumMember(Value = "Ceramic")]
        Ceramic = 3,
    }
}
