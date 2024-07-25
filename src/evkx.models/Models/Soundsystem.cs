using evdb.models.Models;
using System;

namespace evdb.Models
{
    public class Soundsystem
    {
        public string? Brand { get; set; }

        public string? Name { get; set; }

        public int? NumberOfSpeakers { get; set; }
        
        public int? TotalEffect { get; set; }

        public bool? Standard { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Soundsystem" };


            if (Brand == null)
            {
                dataQualityScore.ReduceScore(10);
            }   

            if (Name == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (NumberOfSpeakers == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (TotalEffect == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (Standard == null)
            {
                dataQualityScore.ReduceScore(10);
            }   

            return dataQualityScore;
        }
    }
}
