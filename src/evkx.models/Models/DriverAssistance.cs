using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    public class DriverAssistance
    {

        public DriverAssistance()
        {
            NightVision = new EVFeature();
            LaneDepartureWarning = new EVFeature();
            LaneKeeping = new EVFeature();  
            DrowsinessAlert = new EVFeature();
            ReversingCamera = new EVFeature();
            Camera360 = new EVFeature();
            RearCrossTrafficAlert = new EVFeature();
            RearParkingSensors = new EVFeature();   
            SideParkingSensors = new EVFeature();
            SideAssist =  new EVFeature();
            HillDescentAssist = new EVFeature();
            HillStartAssist = new EVFeature();
            AntiLockBrakingSystem = new EVFeature();
            AutomaticEmergencyBraking = new EVFeature();
            BrakeAssist = new EVFeature();
            TractionControl = new EVFeature();
            LeftTurnCrashAvoidance = new EVFeature();
            ForwardCollisionWarning = new EVFeature();  
            ElectronicStabilityControl = new EVFeature();
            TemperatureWarning = new EVFeature();   
            CrossTrafficAssist = new EVFeature();
            SpeedLimiter = new EVFeature(); 
            AutomaticEmergencySteering = new EVFeature();   
            TrafficSignRecognition = new EVFeature();
            EfficiencyAssist = new EVFeature();
            DrivingAutomation = new List<DrivingAutomation>();
            FrontParkingSensors = new EVFeature();
            ExitWarning = new EVFeature();
            SensorsAndCameras = new SensorsAndCameras();
        }

        public SensorsAndCameras? SensorsAndCameras { get; set; }

        public EVFeature? NightVision { get; set; }
        
        public EVFeature? LaneKeeping { get; set; }

        public EVFeature? LaneDepartureWarning { get; set; }

        public EVFeature? DrowsinessAlert { get; set; }

        public EVFeature? ReversingCamera { get; set; }

        public EVFeature? Camera360 { get; set; }

        public EVFeature? RearCrossTrafficAlert { get; set; }

        public EVFeature? RearParkingSensors { get; set; }

        public EVFeature? FrontParkingSensors { get; set; }

        public EVFeature? SideParkingSensors { get; set; }

        public EVFeature? SideAssist { get; set; }

        public EVFeature? ExitWarning { get; set; }

        public EVFeature? HillDescentAssist { get; set; }

        public EVFeature? HillStartAssist { get; set; }

        public EVFeature? AntiLockBrakingSystem { get; set; }

        public EVFeature? AutomaticEmergencyBraking { get; set; }

        public EVFeature? BrakeAssist { get; set; }

        public EVFeature? TractionControl { get; set; }

        public EVFeature? LeftTurnCrashAvoidance { get; set; }

        public EVFeature? ForwardCollisionWarning { get; set; }

        public EVFeature? ElectronicStabilityControl { get; set; }

        public EVFeature? TemperatureWarning { get; set; }

        public EVFeature? CrossTrafficAssist { get; set; }

        public EVFeature? SpeedLimiter { get; set; }

        public EVFeature? AutomaticEmergencySteering { get; set; }

        public EVFeature? TrafficSignRecognition { get; set; }

        /// <summary>
        /// https://mycardoeswhat.org/
        /// </summary>
        public EVFeature? EfficiencyAssist { get; set; }

        public List<DrivingAutomation>? DrivingAutomation { get; set; }

    }
}
