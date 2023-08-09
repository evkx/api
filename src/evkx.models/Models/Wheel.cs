using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Wheel
    {
        public string? TireDimensionFront { get; set; }

        public string? TireDimensionRear { get; set; }

        public int? WheelSize { get; set; }

        // Special Case. EG Lucid Air Sapphire
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public int? WheelSizeRear { get; set; }

        public double WheelWidth { get; set; }

        public Dictionary<string,string>? Name { get; set; }

        public int WheelOffset { get; set; }

        public string? OptionId { get; set; }
    
    }
}
