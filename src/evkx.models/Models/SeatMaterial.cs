using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Describes the seat material options of an EV.
    /// </summary>
    public class SeatMaterial
    {
        public SeatMaterial()
        {
            Colors = new List<Color>();
        }

        /// <summary>
        /// The name of the seat material given by the manufacturer.
        /// </summary>
        public string? Name { get; set; }

        /// <summary>
        /// Defines if the seat material is animal free.
        /// </summary>
        public bool? AnimalFree { get; set; }

        /// <summary>
        /// Defines the colors of the seat material.
        /// </summary>
        public List<Color> Colors { get; set; }

        /// <summary>
        /// Defines the type of material used for the seats.
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public InteriorMaterialType? MaterialType { get; set; } 

        /// <summary>
        /// Defines which seat options that are available for the seat material.
        /// </summary>
        public List<string>? SeatOption { get; set; }


        /// <summary>
        /// Returns a string representation of the seat material colors. Used for translation
        /// </summary>
        public string GetColorKey(string seperator = "/")
        {
            string colorKey = string.Empty;
            bool addSeperator = false;
            foreach (Color color in Colors)
            {
                if(addSeperator)
                {
                    colorKey += seperator;
                }
                colorKey += color;
                addSeperator = true;
            }

            return colorKey;
        }

        /// <summary>
        /// Calculates the data quality score for the seat material.
        /// </summary>
        public DataQualityScore CalculateDataQualityScore()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "SeatMaterial" };


            if (string.IsNullOrEmpty(Name))
            {
                dataQualityScore.ReduceScore(5, "Name");
            }

            if (MaterialType == null)
            {
                dataQualityScore.ReduceScore(25, "MaterialType");
            }

            if(Colors == null || Colors.Count == 0)
            {
                dataQualityScore.ReduceScore(25, "Colors");
            }

            return dataQualityScore;
        }
    }
}
