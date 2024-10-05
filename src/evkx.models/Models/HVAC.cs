using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the HVAC of an EV.
    /// </summary>
    public class HVAC
    {
        public HVAC()
        {
            ClimateControlSystems = new List<ClimateControlSystem>();
            ClimateControlSystems.Add(new ClimateControlSystem());
            Heatpump = new EVFeature();
            Preclimatisation = new EVFeature();
            PetMode = new EVFeature();
            CampMode = new EVFeature();
        }

        /// <summary>
        /// The possbilites of climate control systems in the EV.
        /// </summary>
        public List<ClimateControlSystem>? ClimateControlSystems { get; set; }

        /// <summary>
        /// Defines if the EV has a heatpump system
        /// </summary>
        public EVFeature? Heatpump { get; set; }

        /// <summary>
        /// Defines if the system offer preclimate control
        /// </summary>
        public EVFeature? Preclimatisation { get; set; }

        /// <summary>
        /// Defines if the system offer a pet mode
        /// </summary>
        public EVFeature? PetMode { get; set; }

        /// <summary>
        /// Defines if the system offers a camp mode
        /// </summary>
        public EVFeature? CampMode { get; set; }


        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "HVAC" };

            if (ClimateControlSystems == null || ClimateControlSystems.Count == 0)
            {
                dataQualityScore.ReduceScore(100, "ClimateControlSystems");
            }
            else
            {
                foreach (ClimateControlSystem climateControlSystem in ClimateControlSystems)
                {
                    dataQualityScore.AddSubScore(climateControlSystem.CalculateDataQuality());
                }
            }

            if (Heatpump == null || Heatpump.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "Heatpump");
            }

            if (Preclimatisation == null || Preclimatisation.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "Preclimatisation");
            }

            if(PetMode == null || PetMode.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "PetMode");
            }   

            return dataQualityScore;
        }
    }
}
