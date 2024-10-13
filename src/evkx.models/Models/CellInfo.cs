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
                dataQualityScore.ReduceScore(1, "CellProducer");
            }

            if(string.IsNullOrEmpty(CellType))
            {
                dataQualityScore.ReduceScore(1, "CellType");
            }
            
            if(string.IsNullOrEmpty(CellChemistry))
            {
                dataQualityScore.ReduceScore(50, "CellChemistry");
            }

            return dataQualityScore;
        }
    }
}
