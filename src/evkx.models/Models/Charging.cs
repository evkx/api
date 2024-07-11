using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;

namespace evdb.Models
{
    public class Charging
    {
        public Charging() 
        {

            ManualTriggerHeating = new EVFeature();
            HeatingWhenNavigateToCharger = new EVFeature();
        }

        public List<Chargeport>? Chargeports { get; set; }

        public List<Charger>? OnBoardChargers { get; set; }

        public BatterySwap? BatterySwap { get; set; }

        public EVFeature? ManualTriggerHeating { get; set; }

        public EVFeature? HeatingWhenNavigateToCharger { get; set; }

        public EVFeature? V2L { get; set; }

        public decimal? V2LPower { get; set; }

        public EVFeature? V2G { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Charging" };

            if(Chargeports == null || Chargeports.Count == 0)
            {
                dataQualityScore.ReduceScore(30);
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
                dataQualityScore.ReduceScore(10);
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
                dataQualityScore.ReduceScore(20);
            }


            if(HeatingWhenNavigateToCharger == null || HeatingWhenNavigateToCharger.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQualityScore.ReduceScore(20);
            }

            if(V2L == null || V2L.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQualityScore.ReduceScore(20);
            }

            if(V2L != null && V2L.FeatureStatus.Equals(FeatureStatus.Standard) && V2LPower == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(V2G == null || V2G.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQualityScore.ReduceScore(20);
            }

            return dataQualityScore;

        }
    }
}
