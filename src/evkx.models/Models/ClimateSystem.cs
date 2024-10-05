using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines a climate control system
    /// </summary>
    public class ClimateControlSystem
    {
        public ClimateControlSystem()
        {
        }

        /// <summary>
        /// Defines if this is the standard climate control system.
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// Defines the name of the system
        /// </summary>
        public Dictionary<string, string>? Name { get; set; }

        /// <summary>
        /// Defines the zones the system can control
        /// </summary>
        public string[]? Zones { get; set; }

        public string? GetName(string language = "en")
        {
            if (Name != null && Name.ContainsKey(language))
            {
                return Name[language];
            }

            return null;
        }


        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "ClimateControlSystem" };

            if (Zones == null || Zones.Length == 0)
            {
                dataQualityScore.ReduceScore(10, "Zones");
            }

            return dataQualityScore;
        }
    }
}
