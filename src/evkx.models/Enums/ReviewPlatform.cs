using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace evdb.models.Enums
{
    public enum ReviewPlatform: int
    {
        [EnumMember(Value = "None")]
        None = 0,

        [EnumMember(Value = "YouTube")]
        YouTube = 1,

        [EnumMember(Value = "Vimeo")]
        Vimeo = 2,

        [EnumMember(Value = "Web")]
        Web = 3
    }
}
