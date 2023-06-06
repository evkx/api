using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Windows
    {
        public Windows()
        {
            TintedFromBPillar = new EVFeature();
            DoubleGlazedWindshield = new EVFeature();
            DoubleGlazedFirstRow = new EVFeature(); 
            DoubleGlazedSecondRow = new EVFeature();
            HeatedWindshield = new EVFeature();
            HeatedRearWindow = new EVFeature();
        }

        public EVFeature? TintedFromBPillar { get; set; }

        public EVFeature? DoubleGlazedWindshield { get; set; }

        public EVFeature? DoubleGlazedFirstRow { get; set; }

        public EVFeature? DoubleGlazedSecondRow { get; set; }

        public EVFeature? HeatedWindshield { get; set; }

        public EVFeature? HeatedRearWindow { get; set; }
    }
}
