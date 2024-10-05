using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;

namespace evdb.models.Models
{

    /// <summary>
    /// Defines the interior light of an EV.
    /// </summary>
    public class InteriorLight
    {
        /// <summary>
        /// Defines if this option is standard.
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// Defines if the vehicle has ambient light.
        /// </summary>
        public EVFeature? AmbientLight { get; set; }

        /// <summary>
        /// Defines the number of ambient light colors.
        /// </summary>
        public int? NumberOfAmbientLightColors { get; set; } 

        /// <summary>
        /// Defines the locations of the ambient light.
        /// </summary>
        public List<string>? AmbientLightLocations { get; set; }

        /// <summary>
        /// Defines if the vehicle has contour light.
        /// </summary>
        public EVFeature? ContourLight { get; set; }

        /// <summary>
        /// Defines the number of contour light colors.
        /// </summary>
        public int? NumberOfContourLightsColors { get; set; }

        /// <summary>
        /// Defines the locations of the contour light.
        /// </summary>
        public List<string>? ContourLightLocations { get; set; }


        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "InteriorLight" };

            if (AmbientLight == null || AmbientLight.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "AmbientLight");
            }
            else
            {
                if (NumberOfAmbientLightColors == null)
                {
                    dataQualityScore.ReduceScore(10, "NumberOfAmbientLightColors");
                }

                if (AmbientLightLocations == null)
                {
                    {
                        dataQualityScore.ReduceScore(10, "AmbientLightLocations");
                    }
                }

            }

            if(ContourLight == null || ContourLight.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "ContourLight");
            }
            else
            {
                if (NumberOfContourLightsColors == null)
                {
                    dataQualityScore.ReduceScore(10, "NumberOfContourLightsColors");
                }

                if (ContourLightLocations == null)
                {
                    {
                        dataQualityScore.ReduceScore(10, "ContourLightLocations");
                    }
                }

            }

            return dataQualityScore;
        }
    }
}
