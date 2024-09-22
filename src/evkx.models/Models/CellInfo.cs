using evdb.models.Models;
using System;

namespace evdb.Models
{
    public class CellInfo
    {
        public string? CellProducer { get; set; }

        public string? CellType { get; set; }

        public string? CellChemistry { get; set; }

        public decimal? Capacity { get; set; }

        public decimal? NominalVoltage { get; set; }


        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Cellinfo"};

            if(string.IsNullOrEmpty(CellProducer))
            {
                dataQualityScore.DataQuality--;
            }

            if(string.IsNullOrEmpty(CellType))
            {
                dataQualityScore.DataQuality--;
            }
            
            if(string.IsNullOrEmpty(CellChemistry))
            {
                dataQualityScore.DataQuality -= 10;
            }

            return dataQualityScore;
        }
    }
}
