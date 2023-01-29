using System;
using System.Collections.Generic;
using System.Text;

namespace evkx.models.Models
{
    public class EvSearchOptions
    {
        public List<string>? Brands { get; set; }

        public List<string>? SeatConfiguration { get; set; }

        public List<string>? BodyTypes { get; set; }
    }
}
