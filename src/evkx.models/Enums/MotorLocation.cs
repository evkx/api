using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace evdb.models.Enums
{
    public enum MotorLocation : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "FrontAxle")]
        FrontAxle = 1,

        [EnumMember(Value = "RearAxle")]
        RearAxle = 2,
    }
}
