using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class RangeAndConsumption
    {

        public int? BasicTrimWltpRange { get; set; }

        public decimal? BasicTrimWltpConsumption { get; set; }
        
        public decimal? BasicTrimRealWltpConsumption { get; set; }

        public int? TopTrimWltpRange { get; set; }

        public decimal? TopTrimWltpConsumption { get; set; }

        public decimal? TopTrimRealWltpConsumption { get; set; }

        public decimal? BasicTrim120KmhConsumption { get; set; }

        public decimal? BasicTrim90KmhConsumption { get; set; }

    }
}
