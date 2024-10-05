using evdb.models.Enums;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the range and consumption
    /// </summary>
    public class RangeAndConsumption
    {
        /// <summary>
        /// Defines the basic trim WLTP range
        /// </summary>
        public int? BasicTrimWltpRange { get; set; }

        /// <summary>
        /// Defines the basic trim wltp consumption including charging losses
        /// </summary>
        public decimal? BasicTrimWltpConsumption { get; set; }
        
        /// <summary>
        /// Defines the basic trim real wltp consumption
        /// </summary>
        public decimal? BasicTrimRealWltpConsumption { get; set; }

        /// <summary>
        /// Defines the top trim WLTP range
        /// </summary>
        public int? TopTrimWltpRange { get; set; }

        /// <summary>
        /// Defines the top trim wltp consumption including charging losses
        /// </summary>
        public decimal? TopTrimWltpConsumption { get; set; }

        /// <summary>
        /// Defines the top trim real wltp consumption
        /// </summary>
        public decimal? TopTrimRealWltpConsumption { get; set; }

        /// <summary>
        /// The basic trim 120 km/h range
        /// </summary>
        public decimal? BasicTrim120KmhRange { get; set; }

        /// <summary>
        /// The basic trim 120 km/h consumption
        /// </summary>
        public decimal? BasicTrim120KmhConsumption { get; set; }

        /// <summary>
        /// The basic trim 90 km/h range
        /// </summary>
        public decimal? BasicTrim90KmhRange { get; set; }

        /// <summary>
        /// The basic trim 90 km/h consumption
        /// </summary>
        public decimal? BasicTrim90KmhConsumption { get; set; }

        /// <summary>
        /// The basic trim 70 mph range
        /// </summary>
        public decimal? BasicTrim70MphRange { get; set; }

        /// <summary>
        /// The basic trim 70 mph consumption
        /// </summary>
        public decimal? BasicTrim70MphConsumption { get; set; }

        /// <summary>
        /// The basic trim EPA range
        /// </summary>
        public int? BasicTrimEpaRange { get; set; }

        /// <summary>
        /// The basic trim EPA consumption
        /// </summary>
        public decimal? BasicTrimEpaRealConsumption { get; set; }

        /// <summary>
        /// The top trim EPA range
        /// </summary>
        public int? TopTrimEpaRange { get; set; }

        /// <summary>
        /// The top trim EPA consumption
        /// </summary>
        public decimal? TopTrimEpaRealConsumption { get; set; }

        /// <summary>
        /// The basic trim CLTC range
        /// </summary>
        public int? BasicTrimCLTCRange { get; set; }

        /// <summary>
        /// The basic trim CLTC consumption
        /// </summary>
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

        public string GetRangeAndEfficentCategory(EvBodyType? evBodyType)
        {
            string rangeCategory = string.Empty;
            string efficentCategory = string.Empty;

            if(BasicTrimWltpRange.HasValue && BasicTrimRealWltpConsumption.HasValue)
            {
                if(BasicTrimWltpRange.Value > 800)
                {
                    rangeCategory = "verylongrange";
                }
           
                if(BasicTrimRealWltpConsumption.Value < 14)
                {
                    efficentCategory = "veryefficient";
                }
                
            }

            if (!string.IsNullOrEmpty(rangeCategory) && !string.IsNullOrEmpty(efficentCategory))
            {
                return $"drivetrain.rangeandconsumption.category.{rangeCategory}.{efficentCategory}";
            }

            return string.Empty;
        }

        private decimal? ConvertToImperialConsumption(decimal? metric)
        {
            if(metric == null)
            {
                return metric;
            }

            return decimal.Round(decimal.Divide(new decimal(62.1371), metric.Value),1);

        }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "RangeAndConsumption" };

            if(BasicTrimCLTCRange == null && BasicTrimWltpRange == null && BasicTrimEpaRange == null)
            {
                dataQualityScore.ReduceScore(100, "BasicTrimCLTCRange");
            }
            
            if(BasicTrim120KmhConsumption == null)
            {
               dataQualityScore.ReduceScore(10, "BasicTrim120KmhConsumption");
            }


            if(BasicTrim70MphConsumption == null)
            {
                dataQualityScore.ReduceScore(10, "BasicTrim70MphConsumption");
            }
    

            if(BasicTrim90KmhConsumption == null)
            {
                dataQualityScore.ReduceScore(10, "BasicTrim90KmhConsumption");
            }

            return dataQualityScore;
        }
    }
}
