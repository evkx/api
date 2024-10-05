using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace evdb.models.Models
{
    public class SeatLayout
    {
       public int? NumberOfSeats { get; set; }

       public string? Name { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "SeatLayout" };

            if (!NumberOfSeats.HasValue || NumberOfSeats == 0)
            {
                dataQualityScore.ReduceScore(100, "NumberOfSeats");
            }

            return dataQualityScore;
        }
    }
}
