using evdb.models.Models;
using System;

namespace evdb.Models
{
    public class Charger
    {
        public double MaxChargeSpeedKw { get; set; }

        public bool Standard { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Charger" };

            if(MaxChargeSpeedKw == 0)
            {
                dataQualityScore.ReduceScore(30);
            }

            return dataQualityScore;

        }
    }
}
