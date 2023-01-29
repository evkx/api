using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum ScreenRotation : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "Vertical")]
        Vertical = 1,

        [EnumMember(Value = "Horizontal")]
        Horizontal = 2,

        [EnumMember(Value = "Rotatable")]
        Rotatable = 3,

    }
}
