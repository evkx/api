using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum EvBodyType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Sedan")]
        Sedan = 1,

        [EnumMember(Value = "Coupe")]
        Coupe = 2,

        [EnumMember(Value = "Hatchback")]
        Hatchback = 3,

        [EnumMember(Value = "Sport")]
        Sport = 4,

        [EnumMember(Value = "StationWagon")]
        StationWagon = 5,

        [EnumMember(Value = "SUV")]
        SUV = 6,

        [EnumMember(Value = "CoupeSUV")]
        CoupeSUV = 7,


        [EnumMember(Value = "Convertible")]
        Convertible = 8,


        [EnumMember(Value = "Minivan")]
        Minivan = 9,


        [EnumMember(Value = "PickupTruck")]
        PickupTruck = 10,


        [EnumMember(Value = "Crossover")]
        Crossover = 11,


        [EnumMember(Value = "Roadster")]
        Roadster = 12,

        [EnumMember(Value = "MPV")]
        MPV = 13,

        [EnumMember(Value = "SuperCar")]
        SuperCar = 14,

        [EnumMember(Value = "HyperCar")]
        HyperCar = 15,
    }
}

// https://www.engineeringchoice.com/types-of-cars/