using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace evdb.models.Enums
{
    public enum ScreenCategory : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "DriverInformation")]
        DriverInformation = 1,

        [EnumMember(Value = "Infotainment")]
        Infotainment = 2,

        [EnumMember(Value = "PassengerInfotainment")]
        PassengerInfotainment = 3,

        [EnumMember(Value = "RearSeatInfotainment")]
        RearSeatInfotainment = 4,

        [EnumMember(Value = "HVACControl")]
        HVACControl = 5,
    }
}
