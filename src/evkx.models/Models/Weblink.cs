using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Weblink
    {
        public Dictionary<string, string> Name { get; set; }

        public string Url { get; set; } = string.Empty; 

        public Country? Country { get; set; }    
    }
}
