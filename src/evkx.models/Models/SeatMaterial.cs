using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class SeatMaterial
    {
        public SeatMaterial()
        {
            Colors = new List<Color>();
        }

        public string? Name { get; set; }

        public bool? AnimalFree { get; set; }

        public List<Color> Colors { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public InteriorMaterialType? MaterialType { get; set; } 

        public List<string>? SeatOption { get; set; }

        public string GetColorKey()
        {
            string colorKey = string.Empty;
            bool addSeperator = false;
            foreach (Color color in Colors)
            {
                if(addSeperator)
                {
                    colorKey += "/";
                }
                colorKey += color;
                addSeperator = true;
            }

            return colorKey;
        }

        public DataQualityScore CalculateDataQualityScore()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "SeatMaterial" };


            if (string.IsNullOrEmpty(Name))
            {
                dataQualityScore.ReduceScore(5);
            }

            if (MaterialType == null)
            {
                dataQualityScore.ReduceScore(25);
            }

            if(Colors == null || Colors.Count == 0)
            {
                dataQualityScore.ReduceScore(25);
            }

            return dataQualityScore;
        }
    }
}
