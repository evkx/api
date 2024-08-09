using evdb.models.Enums;
using evdb.Models;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the comfort features of an EV
    /// </summary>
    public class Comfort
    {
        public Comfort()
        {
            GarageOpener = new EVFeature();
            AirFragrance = new EVFeature();
            WirelessPhoneCharging = new EVFeature();
            ElectricAdjustableSteeringWeel = new EVFeature();   
            EeasyEntrySeat = new EVFeature();   
            EeasyEntrySteeringwheel = new EVFeature();  
        }

        /// <summary>
        /// Defines if the EV has a garage opener
        /// </summary>
        public EVFeature? GarageOpener { get; set; }

        /// <summary>
        /// Defines if the EV has air fragrance
        /// </summary>
        public EVFeature? AirFragrance { get; set; }

        /// <summary>
        /// Defines if the EV has wireless phone charging
        /// </summary>
        public EVFeature? WirelessPhoneCharging { get; set; }

        /// <summary>
        /// Defines if the EV has electric adjustable steering weel
        /// </summary>
        public EVFeature? ElectricAdjustableSteeringWeel { get; set; }

        /// <summary>
        /// Defines if the EV has easy entry seat
        /// </summary>
        public EVFeature? EeasyEntrySeat { get; set; }

        /// <summary>
        /// Defines if the EV has easy entry steering wheel
        /// </summary>
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

