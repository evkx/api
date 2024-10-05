using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    /// <summary>
    /// Defines the charging capabilities of an EV
    /// </summary>
    public class Charging
    {
        public Charging() 
        {

            ManualTriggerHeating = new EVFeature();
            HeatingWhenNavigateToCharger = new EVFeature();
        }

        /// <summary>
        /// Defines the chargeports of the EV
        /// </summary>
        public List<Chargeport>? Chargeports { get; set; }

        /// <summary>
        /// Defines the onboard chargers of the EV
        /// </summary>
        public List<Charger>? OnBoardChargers { get; set; }

        /// <summary>
        /// Defines the battery swap capabilities of the EV
        /// </summary>
        public BatterySwap? BatterySwap { get; set; }

        /// <summary>
        /// Defines if the EV has manual trigger heating
        /// </summary>
        public EVFeature? ManualTriggerHeating { get; set; }

        /// <summary>
        /// Defines if the EV has heating when navigate to charger
        /// </summary>
        public EVFeature? HeatingWhenNavigateToCharger { get; set; }

        /// <summary>
        /// Defines if the EV has V2L capabilities
        /// </summary>
        public EVFeature? V2L { get; set; }

        /// <summary>
        /// Defines the V2L power in kW
        /// </summary>
        public decimal? V2LPower { get; set; }

        /// <summary>
        /// Defines if the EV has V2G capabilities
        /// </summary>
        public EVFeature? V2G { get; set; }

        /// <summary>
        /// Defines if the EV has V2H capabilities
        /// </summary>
        public EVFeature? V2H { get; set; }

        /// <summary>
        /// Defines the V2H type
        /// </summary>
        public V2HType? V2HType { get; set; }

        /// <summary>
        /// List ports that support V2X
        /// </summary>
        public List<V2XPort> V2XPorts { get; set; }

        /// <summary>
        /// Calculate dataquality
        /// </summary>
        /// <returns></returns>
        internal DataQualityScore CalculateDataQuality()
        {
            
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Charging" };

            if(Chargeports == null || Chargeports.Count == 0)
            {
                dataQualityScore.ReduceScore(30, "Chargeports");
            }
            else
            {
                foreach (var chargeport in Chargeports)
                {
                    dataQualityScore.AddSubScore(chargeport.CalculateDataQuality());
                }
            }


            if(OnBoardChargers == null || OnBoardChargers.Count == 0)
            {
                dataQualityScore.ReduceScore(10, "OnBoardChargers");
            }
            else
            {
                foreach (var onBoardCharger in OnBoardChargers)
                {
                    dataQualityScore.AddSubScore(onBoardCharger.CalculateDataQuality());
                }
            }


            if(ManualTriggerHeating == null || ManualTriggerHeating.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQualityScore.ReduceScore(20, "ManualTriggerHeating");
            }


            if(HeatingWhenNavigateToCharger == null || HeatingWhenNavigateToCharger.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQualityScore.ReduceScore(20, "HeatingWhenNavigateToCharger");
            }

            if(V2L == null || V2L.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQualityScore.ReduceScore(20, "V2L");
            }

            if(V2L != null && V2L.FeatureStatus.Equals(FeatureStatus.Standard) && V2LPower == null)
            {
                dataQualityScore.ReduceScore(10, "V2LPower");
            }

            if(V2G == null || V2G.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQualityScore.ReduceScore(20, "V2G");
            }

            return dataQualityScore;

        }
    }
}
