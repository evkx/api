using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;

namespace evdb.Models
{
    /// <summary>
    /// Defines the driver assistance features of the vehicle
    /// </summary>
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
            AutomaticEmergencySteering = new EVFeature();   
            TrafficSignRecognition = new EVFeature();
            EfficiencyAssist = new EVFeature();
            DrivingAutomation = new List<DrivingAutomation>();
            FrontParkingSensors = new EVFeature();
            ExitWarning = new EVFeature();
            SensorsAndCameras = new SensorsAndCameras();
        }

        /// <summary>
        /// Defines the sensors and cameras of the vehicle.
        /// </summary>
        public SensorsAndCameras? SensorsAndCameras { get; set; }

        /// <summary>
        /// Defines if the vehicle has night vision.
        /// </summary>
        public EVFeature? NightVision { get; set; }
        
        /// <summary>
        /// defines if the vehicle has lane keeping.
        /// </summary>
        public EVFeature? LaneKeeping { get; set; }

        /// <summary>
        /// defines if the vehicle has lane departure warning.
        /// </summary>
        public EVFeature? LaneDepartureWarning { get; set; }

        /// <summary>
        /// Defines if the vehicle has drowsiness alert.
        /// </summary>
        public EVFeature? DrowsinessAlert { get; set; }

        /// <summary>
        /// Defines if the vehicle has a reversing camera.
        /// </summary>
        public EVFeature? ReversingCamera { get; set; }

        /// <summary>
        /// Defines if the vehicle has a 360 camera.
        /// </summary>
        public EVFeature? Camera360 { get; set; }

        /// <summary>
        /// Defines if the vehicle has rear cross traffic alert.
        /// </summary>
        public EVFeature? RearCrossTrafficAlert { get; set; }

        /// <summary>
        /// Defines if the vehicle has rear parking sensors.
        /// </summary>
        public EVFeature? RearParkingSensors { get; set; }

        /// <summary>
        /// Defines if the vehicle has front parking sensors.
        /// </summary>
        public EVFeature? FrontParkingSensors { get; set; }

        /// <summary>
        /// Defines if the vehicle has side parking sensors.
        /// </summary>
        public EVFeature? SideParkingSensors { get; set; }

        /// <summary>
        /// Defines if the vehicle has side assist.
        /// </summary>
        public EVFeature? SideAssist { get; set; }

        /// <summary>
        /// Defines if the vehicle has exit warning.
        /// </summary>
        public EVFeature? ExitWarning { get; set; }

        /// <summary>
        /// Defines if the vehicle has hill descent assist.
        /// </summary>
        public EVFeature? HillDescentAssist { get; set; }

        /// <summary>
        /// Defines if the vehicle has hill start assist.
        /// </summary>
        public EVFeature? HillStartAssist { get; set; }

        /// <summary>
        /// Defines if the vehicle has anti lock braking system.
        /// </summary>
        public EVFeature? AntiLockBrakingSystem { get; set; }

        /// <summary>
        /// Defines if the vehicle has automatic emergency braking.
        /// </summary>
        public EVFeature? AutomaticEmergencyBraking { get; set; }


        /// <summary>
        /// Defines if the vehicle has brake assist.
        /// </summary>
        public EVFeature? BrakeAssist { get; set; }

        /// <summary>
        /// Defines if the vehicle has traction control.
        /// </summary>
        public EVFeature? TractionControl { get; set; }

        /// <summary>
        /// Defines if the vehicle has left turn crash avoidance.
        /// </summary>
        public EVFeature? LeftTurnCrashAvoidance { get; set; }

        /// <summary>
        /// Defines if the vehicle has forward collision warning.
        /// </summary>
        public EVFeature? ForwardCollisionWarning { get; set; }

        /// <summary>
        /// Defines if the vehicle has electronic stability control.
        /// </summary>
        public EVFeature? ElectronicStabilityControl { get; set; }

        /// <summary>
        /// Defines if the vehicle has temperature warning.
        /// </summary>
        public EVFeature? TemperatureWarning { get; set; }

        /// <summary>
        /// Defines if the vehicle has cross traffic assist.
        /// </summary>
        public EVFeature? CrossTrafficAssist { get; set; }

        /// <summary>
        /// Defines if the vehicle has automatic emergency steering.
        /// </summary>
        public EVFeature? AutomaticEmergencySteering { get; set; }

        /// <summary>
        /// Defines if the vehicle has traffic sign recognition.
        /// </summary>
        public EVFeature? TrafficSignRecognition { get; set; }

        /// <summary>
        /// https://mycardoeswhat.org/
        /// </summary>
        public EVFeature? EfficiencyAssist { get; set; }

        /// <summary>
        /// Defines the driving automation features of the vehicle.
        /// </summary>
        public List<DrivingAutomation>? DrivingAutomation { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
           DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "DriverAssistance" };

            if(SensorsAndCameras == null)
            {
                dataQualityScore.ReduceScore(200, "SensorsAndCameras");
            }
            else
            {
                dataQualityScore.AddSubScore(SensorsAndCameras.CalculateDataQuality());
            }

            if(NightVision == null || NightVision.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "NightVision");
            }

            if(LaneKeeping == null || LaneKeeping.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "LaneKeeping");
            }

            if(LaneDepartureWarning == null || LaneDepartureWarning.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "LaneDepartureWarning");
            }

            if(DrowsinessAlert == null || DrowsinessAlert.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "DrowsinessAlert");
            }

            if(ReversingCamera == null || ReversingCamera.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "ReversingCamera");
            }

            if(Camera360 == null || Camera360.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "Camera360");
            }

            if(RearCrossTrafficAlert == null || RearCrossTrafficAlert.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "RearCrossTrafficAlert");
            }

            if(RearParkingSensors == null || RearParkingSensors.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "RearParkingSensors");
            }

            if(FrontParkingSensors == null || FrontParkingSensors.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "FrontParkingSensors");
            }

            if(SideParkingSensors == null || SideParkingSensors.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "SideParkingSensors");
            }

            if(SideAssist == null || SideAssist.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "SideAssist");
            }

            if(ExitWarning == null || ExitWarning.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "ExitWarning");
            }

            if(HillDescentAssist == null || HillDescentAssist.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "HillDescentAssist");
            }

            if(HillStartAssist == null || HillStartAssist.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "HillStartAssist");
            }

            if(AntiLockBrakingSystem == null || AntiLockBrakingSystem.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "AntiLockBrakingSystem");
            }

            if(AutomaticEmergencyBraking == null || AutomaticEmergencyBraking.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "AutomaticEmergencyBraking");
            }

            if(BrakeAssist == null || BrakeAssist.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "BrakeAssist");
            }

            if(TractionControl == null || TractionControl.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "TractionControl");
            }

            if(LeftTurnCrashAvoidance == null || LeftTurnCrashAvoidance.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "LeftTurnCrashAvoidance");
            }

            if(ForwardCollisionWarning == null || ForwardCollisionWarning.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "ForwardCollisionWarning");
            }

            if(ElectronicStabilityControl == null || ElectronicStabilityControl.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "ElectronicStabilityControl");
            }

            if(TemperatureWarning == null || TemperatureWarning.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "TemperatureWarning");
            }

            if(CrossTrafficAssist == null || CrossTrafficAssist.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "CrossTrafficAssist");
            }

            if(AutomaticEmergencySteering == null || AutomaticEmergencySteering.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "AutomaticEmergencySteering");
            }

            if(TrafficSignRecognition == null || TrafficSignRecognition.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "TrafficSignRecognition");
            }

            if(EfficiencyAssist == null || EfficiencyAssist.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10, "EfficiencyAssist");
            }

            if(DrivingAutomation == null || DrivingAutomation.Count == 0)
            {
                dataQualityScore.ReduceScore(10, "DrivingAutomation");
            }
            else
            {
                foreach (var drivingAutomation in DrivingAutomation)
                {
                    dataQualityScore.AddSubScore(drivingAutomation.CalculateDataQuality());
                }
            }


            return dataQualityScore;
        }
    }
}
