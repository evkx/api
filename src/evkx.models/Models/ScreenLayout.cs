using evdb.models.Enums;
using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class ScreenLayout
    {
        public ScreenLocation? ScreenIntegration { get; set; } 

        public List<Screen>? Screens { get; set; }

        public bool? Standard { get; set; }

        public string? OptionId { get; set; }

        public string? LayoutName { get; set; }
    }
}
