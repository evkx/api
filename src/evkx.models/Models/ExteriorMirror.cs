using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evdb.models.Models
{
    public class ExteriorMirror
    {
        public bool? Standard { get; set; }

        public ExteriorMirrorType Type {get; set;}
    }
}
