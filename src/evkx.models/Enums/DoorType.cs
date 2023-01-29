using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum DoorType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Standard")]
        Standard = 1,

        [EnumMember(Value = "Tailgate")]
        Tailgate = 2,

        [EnumMember(Value = "Falcon")]
        Falcon = 3,

        [EnumMember(Value = "Suicide")]
        Suicide = 4,

        [EnumMember(Value = "Bootlid")]
        Bootlid = 5,

        [EnumMember(Value = "Sliding")]
        Sliding = 6,
    }
}
