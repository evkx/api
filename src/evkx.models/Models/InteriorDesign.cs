using evdb.Models;
using System.Collections.Generic;

namespace evdb.models.Models
{
    public class InteriorDesign
    {
        public InteriorDesign()
        {
            SeatMaterials = [new SeatMaterial()];
        }

        public bool? Standard { get; set; }

        public Dictionary<string,string>? Name { get; set; }

        /// <summary>
        /// The different seat materials available
        /// </summary>
        public List<SeatMaterial>? SeatMaterials { get; set; }

        /// <summary>
        /// The different headliner designs available
        /// </summary>
        public List<HeadlinerDesign>? HeadlinerDesigns { get; set; }
    }
}
