using evdb.models.Enums;
using evdb.Models;
using System;

namespace evdb.models.Models
{
    public class Comfort
    {
        public Comfort()
        {
            GarageOpener = new EVFeature();
            AirFragrance = new EVFeature();
            KeylessGo  = new EVFeature();
            KeylessEntry = new EVFeature(); 
            WirelessPhoneCharging = new EVFeature();
            ElectricAdjustableSteeringWeel = new EVFeature();   
            EeasyEntrySeat = new EVFeature();   
            EeasyEntrySteeringwheel = new EVFeature();  
        }

        public EVFeature? GarageOpener { get; set; }

        public EVFeature? AirFragrance { get; set; }

        public EVFeature? KeylessGo { get; set; }

        public EVFeature? KeylessEntry { get; set; }

        public EVFeature? WirelessPhoneCharging { get; set; }

        public EVFeature? ElectricAdjustableSteeringWeel { get; set; }

        public EVFeature? EeasyEntrySeat { get; set; }

        public EVFeature? EeasyEntrySteeringwheel { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Comfort" };

            if(GarageOpener == null || GarageOpener.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(AirFragrance == null || AirFragrance.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(KeylessGo == null || KeylessGo.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(KeylessEntry == null || KeylessEntry.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(WirelessPhoneCharging == null || WirelessPhoneCharging.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(ElectricAdjustableSteeringWeel == null || ElectricAdjustableSteeringWeel.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (EeasyEntrySeat == null || EeasyEntrySeat.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(EeasyEntrySteeringwheel == null || EeasyEntrySteeringwheel.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;
        }
    }
}

