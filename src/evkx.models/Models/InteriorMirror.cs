using evdb.models.Enums;

namespace evdb.models.Models
{
    public class InteriorMirror
    {
        public bool? Standard { get; set; }

        public InteriorMirrorType Type {get; set;}

        public bool? AutomaticDimming { get; set; }
    }
}
