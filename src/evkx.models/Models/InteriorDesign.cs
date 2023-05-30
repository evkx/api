using evdb.models.Enums;
using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class InteriorDesign
    {
        public bool? Standard { get; set; }

        public Dictionary<string,string>? Name { get; set; }

        public List<SeatMaterial>? SeatMaterials { get; set; }

        public List<HeadlinerDesign>? HeadlinerDesigns { get; set; }

    }
}
