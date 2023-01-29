using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class SteeringWheel
    {
        public Dictionary<string,string>? Name { get; set; }

        public bool? Standard { get; set; }

        public EVFeature? Heated { get; set; }

        public bool? AudioControl { get; set; }

        public bool? ScreenControl { get; set; }

        public string? GetName(string language = "en")
        {
            if(Name != null && Name.ContainsKey(language))
            {
                return Name[language];
            }

            return null;
        }
    }
}
