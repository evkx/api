using evdb.Models;
using System.Collections.Generic;

namespace evdb.models.Models
{
    public class ScreenLayout
    {
        public ScreenLayout()
        {
            Screens = new List<Screen>
            {
                new Screen()
            };
        }

        public List<Screen>? Screens { get; set; }

        public bool? Standard { get; set; }

        public string? LayoutName { get; set; }
    }
}
