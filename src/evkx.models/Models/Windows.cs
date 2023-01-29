using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Windows
    {
        public EVFeature? TintedFromBPillar { get; set; }

        public EVFeature? DoubleGlazedWindshield { get; set; }

        public EVFeature? DoubleGlazedFirstRow { get; set; }

        public EVFeature? DoubleGlazedSecondRow { get; set; }

        public EVFeature? HeatedWindshield { get; set; }

        public EVFeature? HeatedRearWindow { get; set; }
    }
}
