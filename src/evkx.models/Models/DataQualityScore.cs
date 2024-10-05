using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class DataQualityScore
    {
        public required string DataArea { get; set; }

        public int DataQuality { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public List<string>? MissingDataAreas { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public List<DataQualityScore>? SubScore { get; set; }

        public void AddSubScore(DataQualityScore subScore)
        {
            if(subScore.DataQuality== 0)
            {
                return;
            }

            if (SubScore == null)
            {
                SubScore = new List<DataQualityScore>();
            }

            SubScore.Add(subScore);
            DataQuality += subScore.DataQuality;
        }

        public void ReduceScore(int reduction, string area)
        {
            if (MissingDataAreas == null)
            {
                MissingDataAreas = new List<string>();
            }
            MissingDataAreas.Add(area);

            DataQuality -= reduction;
        }
    }
}
