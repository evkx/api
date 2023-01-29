using evdb.Models;

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
    }
}

