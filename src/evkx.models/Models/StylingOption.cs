using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class StylingOption
    {
        public string? OptionId { get; set; }

        public Dictionary<string, string>? OptionName { get; set; }

        public string? Description { get; set; }
    }
}
