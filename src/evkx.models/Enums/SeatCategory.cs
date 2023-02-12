using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace evdb.models.Enums
{
    public enum SeatCategory : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "PassengerAndDriver")]
        PassengerAndDriver = 1,

        [EnumMember(Value = "ThreeSeatBench")]
        ThreeSeatBench = 2,

        [EnumMember(Value = "TwoSeatBench")]
        TwoSeatBench = 3,

        [EnumMember(Value = "TwoCaptainChairs")]
        TwoCaptainChairs = 4,

        [EnumMember(Value = "TwoIntegratedSeatBench")]
        TwoIntegratedSeatBench = 5,

        [EnumMember(Value = "TwoPlusOneIntegratedSeatBench")]
        TwoPlusOneIntegratedSeatBench = 6,


        [EnumMember(Value = "ExecutivePlusTwoSeatBench")]
        ExecutivePlusTwoSeatBench = 7,
    }
}
