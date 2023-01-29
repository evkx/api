using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class ClimateControlSystem
    {
        public ClimateControlSystem()
        {
        }

        public bool? Standard { get; set; }

        public Dictionary<string, string>? Name { get; set; }

        public string[]? Zones { get; set; }

        public string? GetName(string language = "en")
        {
            if (Name != null && Name.ContainsKey(language))
            {
                return Name[language];
            }

            return null;
        }
    }
}
