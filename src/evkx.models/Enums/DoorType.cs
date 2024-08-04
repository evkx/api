using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
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

        [EnumMember(Value = "Gullwing")]
        Gullwing = 7,

        [EnumMember(Value = "Hatchback")]
        Hatchback = 8,

        [EnumMember(Value = "Hood")]
        Hood = 9,

        [EnumMember(Value = "HatchbackLiftgate")]
        HatchbackLiftgate = 10,

        [EnumMember(Value = "Liftgate")]
        Liftgate = 11,

        [EnumMember(Value = "TrunkLid")]
        TrunkLid = 12,

        [EnumMember(Value = "SplitTailgate")]
        SplitTailgate = 13,

        [EnumMember(Value = "SuicideGullwing")]
        SuicideGullwing = 14,

        [EnumMember(Value = "StandardGullwing")]
        StandardGullwing = 15,

        [EnumMember(Value = "Scissor")]
        Scissor = 16,

        [EnumMember(Value = "Butterfly")]
        Butterfly = 17,
    }
}
