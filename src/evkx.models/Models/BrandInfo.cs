using System.Collections.Generic;

namespace evdb.models.Models
{
    public class BrandInfo
    {
        public string? Name { get; set; }

        public List<string>? SubBrands { get; set; }

        public string? Nationality { get; set; }

        public string? Homepage { get; set; }

        public string? PressPage { get; set; }

        public string? BrandImage { get; set; }

        public Dictionary<string,string>? Description { get; set; }

        public Dictionary<string, string>? Intro { get; set; }
    }
}
