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
                dataQualityScore.ReduceScore(10, Brand);
            }   

            if (Name == null)
            {
                dataQualityScore.ReduceScore(10, "Name");
            }

            if (NumberOfSpeakers == null)
            {
                dataQualityScore.ReduceScore(10, "NumberOfSpeakers");
            }

            if (TotalEffect == null)
            {
                dataQualityScore.ReduceScore(10, "TotalEffect");
            }

            if (Standard == null)
            {
                dataQualityScore.ReduceScore(10, "Standard");
            }   

            return dataQualityScore;
        }
    }
}
