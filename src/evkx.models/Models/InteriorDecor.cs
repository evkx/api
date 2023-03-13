using System.Collections.Generic;

namespace evdb.Models
{
    public class InteriorDecor
    {
        public Dictionary<string,string>? Name { get; set; }

        public bool? AnimalFree { get; set; }

        public string? Color { get; set; }

        public string? Material { get; set; }

        public string? OptionId { get; set; }
    }
}
