using System.Collections.Generic;

namespace evdb.Models
{
    public class PaintColor
    {
        public string? Color { get; set; }

        public Dictionary<string,string>? Name { get; set; }    

        public string? ColorId { get; set; }

        public string? ColorCode { get; set; }

        public bool? Metallic { get; set; }

        public string? PaintType { get; set; }

        public bool? StandardPalette { get; set; }

        public string? SpecialColor { get; set; }

    }
}
