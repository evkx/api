using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    public class Exterior
    {
        public Exterior()
        {
            PaintColors = new List<PaintColor>();
            PaintColors.Add(new PaintColor());
            WheelOptions = new List<Wheel>();
            WheelOptions.Add(new Wheel());
            Styling = new List<StylingOption>();
            Doors = new List<Door>();
            Doors.Add(new Door());
            Windows = new Windows();
        }

        public List<PaintColor>? PaintColors { get; set; }

        public List<Wheel>? WheelOptions { get; set; }

        public List<StylingOption>? Styling { get; set; }

        public List<Roof>? RoofOptions { get; set; }

        public List<Door>? Doors { get; set; }

        public Windows? Windows { get; set; }
    }
}
