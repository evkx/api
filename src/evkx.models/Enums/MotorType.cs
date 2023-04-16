using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace evdb.models.Enums
{
    public enum MotorType : int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "PSM")]
        PSM = 1,

        [EnumMember(Value = "ASM")]
        ASM = 2,

        [EnumMember(Value = "PMSM")]
        PMSM = 3,

        [EnumMember(Value = "WRSM")]
        WRSM = 4,

        [EnumMember(Value = "EESM")]
        EESM = 5,
    }
}
