using System.Collections.Generic;

namespace evdb.models.Models
{
    public class DataQualityScore
    {
        public required string DataArea { get; set; }

        public int DataQuality { get; set; }

        public List<DataQualityScore>? SubScore { get; set; }

        public void AddSubScore(DataQualityScore subScore)
        {
            if (SubScore == null)
            {
                SubScore = new List<DataQualityScore>();
            }

            SubScore.Add(subScore);
            DataQuality += subScore.DataQuality;
        }

        public void ReduceScore(int reduction)
        {
            DataQuality -= reduction;
        }
    }
}
