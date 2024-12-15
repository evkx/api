using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    /// <summary>
    /// Defines the headliner design
    /// </summary>
    public class HeadlinerDesign
    {
        /// <summary>
        /// The name of the headliner design in different languages
        /// </summary>
        public Dictionary<string,string>? Name { get; set; }

        /// <summary>
        /// The color of the headliner
        /// </summary>
        public Color? Color { get; set; }

        /// <summary>
        /// The material of the headliner
        /// </summary>
        public  InteriorMaterialType? Material { get; set; }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "HeadlinerDesign" };

            if (Color == null || Color == models.Enums.Color.NotSet)
            {
                dataQualityScore.ReduceScore(5, "Color");
            }

            if(Material == null || Material == models.Enums.InteriorMaterialType.None)
            {
                dataQualityScore.ReduceScore(5, "Material");
            }

            return dataQualityScore;
        }
    }
}
