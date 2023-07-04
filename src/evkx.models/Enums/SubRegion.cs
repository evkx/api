using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum SubRegion: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "NorthernAfrica")]
        NorthernAfrica = 1,

        [EnumMember(Value = "EasternAfrica")]
        EasternAfrica = 2,

        [EnumMember(Value = "CentralOrMiddleAfrica")]
        CentralOrMiddleAfrica = 3,

        [EnumMember(Value = "SouthernAfrica")]
        SouthernAfrica = 4,

        [EnumMember(Value = "WesternAfrica")]
        WesternAfrica = 5,

        [EnumMember(Value = "Caribbean")]
        Caribbean = 6,

        [EnumMember(Value = "CentralAmerica")]
        CentralAmerica = 7,

        [EnumMember(Value = "SouthAmerica")]
        SouthAmerica = 8,

        [EnumMember(Value = "NorthernAmerica")]
        NorthernAmerica = 9,

        [EnumMember(Value = "CentralAsia")]
        CentralAsia = 10,

        [EnumMember(Value = "EasternAsia")]
        EasternAsia = 11,

        [EnumMember(Value = "SouthEasternAsia")]
        SouthEasternAsia = 12,

        [EnumMember(Value = "SouthernAsia")]
        SouthernAsia = 13,

        [EnumMember(Value = "WesternAsia")]
        WesternAsia = 14,

        [EnumMember(Value = "EasternEurope")]
        EasternEurope = 15,

        [EnumMember(Value = "NorthernEurope")]
        NorthernEurope = 16,

        [EnumMember(Value = "WesternEurope")]
        WesternEurope = 17,

        [EnumMember(Value = "AustraliaAndNewZealand")]
        AustraliaAndNewZealand = 18,

        [EnumMember(Value = "Melanesia")]
        Melanesia = 19,

        [EnumMember(Value = "Micronesia")]
        Micronesia = 20,

        [EnumMember(Value = "Polynesia")]
        Polynesia = 21,


    }
}
