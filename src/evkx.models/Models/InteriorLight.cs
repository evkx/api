using System.Collections.Generic;

namespace evdb.models.Models
{

    /// <summary>
    /// Defines the interior light of an EV.
    /// </summary>
    public class InteriorLight
    {
        public InteriorLight()
        {
            LightSources = new List<InteriorLightSource>();
        }

        /// <summary>
        /// Defines the interior light sources of an EV.
        /// </summary>
        public List<InteriorLightSource> LightSources { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "InteriorLight" };

            if (LightSources.Count == 0)
            {
                dataQualityScore.ReduceScore(30, "InteriorLightSources");
            }

            return dataQualityScore;

        }
    }
}
