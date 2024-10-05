using evdb.models.Enums;
using evdb.Models;
using System;
using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the sensors and cameras of the vehicle
    /// </summary>
    public class SensorsAndCameras
    {
        public SensorsAndCameras() { 
        
            Cameras = new List<Camera> { new Camera() };
            Radars = new List<Radar> { new Radar() };
            Lidars = new List<Lidar> {  new Lidar() };
            UltrasonicSensors = new List<UltrasonicSensor> {  new UltrasonicSensor() };
            RainSensor = new EVFeature();
        }

        /// <summary>
        /// What type of sensors and cameras are installed in the vehicle
        /// </summary>
        public SensorSetup Setup { get; set; }

        /// <summary>
        /// List of cameras installed in the vehicle
        /// </summary>
        public List<Camera> Cameras { get; set; }

        /// <summary>
        /// List of radars installed in the vehicle
        /// </summary>
        public List<Radar> Radars { get; set; }

        /// <summary>
        /// List of lidars installed in the vehicle
        /// </summary>
        public List<Lidar> Lidars { get; set; }

        /// <summary>
        /// List of ultrasonic sensors installed in the vehicle
        /// </summary>
        public List<UltrasonicSensor> UltrasonicSensors { get; set; }

        /// <summary>
        /// Defines if rain sensor is installed in the vehicle
        /// </summary>
        public EVFeature RainSensor { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "SensorsAndCameras" };
            
            if(Setup == SensorSetup.NotSet)
            {
                dataQualityScore.ReduceScore(300, "Setup");
            }

            if((Setup == SensorSetup.Camera || Setup == SensorSetup.CameraRadarLidar || Setup == SensorSetup.CameraRadar || Setup == SensorSetup.CameraLidarUltrasonic || Setup == SensorSetup.CameraRadarLidarUltrasonic) &&  (Cameras == null || Cameras.Count == 0))
            {
                dataQualityScore.ReduceScore(100, "Camera");
            }
            else
            {
                foreach (var camera in Cameras)
                {
                    dataQualityScore.AddSubScore(camera.CalculateDataQuality());
                }
            }

            if((Setup == SensorSetup.CameraRadarLidarUltrasonic || Setup == SensorSetup.CameraRadarLidar || Setup == SensorSetup.CameraLidarUltrasonic) &&  (Lidars == null || Lidars.Count == 0))
            {
                dataQualityScore.ReduceScore(100, "Lidars");
            }
            else
            {
                foreach (var lidar in Lidars)
                {
                    dataQualityScore.AddSubScore(lidar.CalculateDataQuality());
                }
            }

            
            if((Setup == SensorSetup.CameraRadarLidarUltrasonic || Setup == SensorSetup.CameraRadarLidarUltrasonic || Setup == SensorSetup.CameraRadarUltrasonic) && (Radars == null || Radars.Count == 0))
            {
                dataQualityScore.ReduceScore(100, "Radars");
            }
            else
            {
                foreach (var radar in Radars)
                {
                    dataQualityScore.AddSubScore(radar.CalculateDataQuality());
                }
            }
            

            return dataQualityScore;
        }
    }
}
