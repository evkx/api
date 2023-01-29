using System.Collections.Generic;

namespace evdb.Models
{
    public class Wheel
    {
        public string? TireDimensionFront { get; set; }

        public string? TireDimensionRear { get; set; }

        public int WheelSize { get; set; }
        
        public double WheelWidth { get; set; }

        public Dictionary<string,string>? Name { get; set; }

        public int WheelOffset { get; set; }

        public string? OptionId { get; set; }
    
    }
}
