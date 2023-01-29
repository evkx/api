namespace evdb.Models
{
    public class Roof
    {
        public string? Material { get; set; }

        public bool? PanoramicRoof { get; set; }

        public string? TypePanoramicRoof { get; set; }

        public bool? PanoramicRoofCanBeOpened { get; set; }

        public bool? CoverPanoramicRoof { get; set; }  

        public string? TypeCoverPanroamicRoof { get; set; }

        public bool? Standard { get; set; }

        public EVFeature? Rails { get; set; }
    }
}
