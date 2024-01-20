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

        public decimal? BasicTrim120KmhRange { get; set; }

        public decimal? BasicTrim120KmhConsumption { get; set; }

        public decimal? BasicTrim90KmhRange { get; set; }

        public decimal? BasicTrim90KmhConsumption { get; set; }

        public decimal? BasicTrim70MphRange { get; set; }

        public decimal? BasicTrim70MphConsumption { get; set; }

        public int? BasicTrimEpaRange { get; set; }

        public decimal? BasicTrimEpaRealConsumption { get; set; }

        public int? TopTrimEpaRange { get; set; }

        public decimal? TopTrimEpaRealConsumption { get; set; }

        public int? BasicTrimCLTCRange { get; set; }

        public decimal? BasicTrimCLTCRealConsumption { get; set; }


        public decimal? GetImperialBasicTrimEpaRealConsumption()
        {
            return ConvertToImperialConsumption(BasicTrimEpaRealConsumption); 
        }

        public decimal? GetImperialTopTrimEpaRealConsumption()
        {
            return ConvertToImperialConsumption(TopTrimEpaRealConsumption);
        }

        public decimal? GetImperialTopTrimWltpRealConsumption()
        {
            return ConvertToImperialConsumption(TopTrimRealWltpConsumption);
        }

        public decimal? GetImperialBasicTrimWltpRealConsumption()
        {
            return ConvertToImperialConsumption(BasicTrimRealWltpConsumption);
        }

        public decimal? GetImperialBasicTrim120KmhConsumption()
        {
            return ConvertToImperialConsumption(BasicTrim120KmhConsumption);
        }

        public decimal? GetImperialBasicTrim70MphConsumption()
        {
            return ConvertToImperialConsumption(BasicTrim70MphConsumption);
        }

        public decimal? GetImperialBasicTrim90KmhConsumption()
        {
            return ConvertToImperialConsumption(BasicTrim90KmhConsumption);
        }

        private decimal? ConvertToImperialConsumption(decimal? metric)
        {
            if(metric == null)
            {
                return metric;
            }

            return decimal.Round(decimal.Divide(new decimal(62.1371), metric.Value),1);

        }
     }
}
