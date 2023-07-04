using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace evdb.models.Enums
{
    public enum InteriorMaterialType : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "Fabric")]
        Fabric = 1,

        [EnumMember(Value = "Microfiber")]
        Microfiber = 2,

        [EnumMember(Value = "Alcantara")]
        Alcantara = 3,

        [EnumMember(Value = "Dinamica")]
        Dinamica = 4,

        [EnumMember(Value = "Leatherette")]
        Leatherette = 5,

        [EnumMember(Value = "Leather")]
        Leather = 6,

        [EnumMember(Value = "NappaLeather")]
        NappaLeather = 7,

        [EnumMember(Value = "DinamicaLeatherette")]
        DinamicaLeatherette = 8,

        [EnumMember(Value = "AlcantaraLeatherette")]
        AlcantaraLeatherette = 9,

        [EnumMember(Value = "Wool")]
        Wool = 10,

        [EnumMember(Value = "WoolLeather")]
        WoolLeather = 11,

        [EnumMember(Value = "MicrofiberLeatherette")]
        MicrofiberLeatherette = 12,

        [EnumMember(Value = "FabricLeatherette")]
        FabricLeatherette = 13,

        [EnumMember(Value = "WoolLeatherette")]
        WoolLeatherette = 14,

        [EnumMember(Value = "NappaLeatherMicrofiber")]
        NappaLeatherMicrofiber = 15,
    }
}
