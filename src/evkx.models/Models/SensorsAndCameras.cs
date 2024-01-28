using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;

namespace evdb.models.Models
{
    public class SensorsAndCameras
    {
        public SensorsAndCameras() { 
        
            Cameras = new List<Camera> { new Camera() };
            Radars = new List<Radar> { new Radar() };
            Lidars = new List<Lidar> {  new Lidar() };
            UltrasonicSensors = new List<UltrasonicSensor> {  new UltrasonicSensor() };
            RainSensor = new EVFeature();
        }

        public SensorSetup Setup { get; set; }

        public List<Camera> Cameras { get; set; }

        public List<Radar> Radars { get; set; }

        public List<Lidar> Lidars { get; set; }

        public List<UltrasonicSensor> UltrasonicSensors { get; set; }

        public EVFeature RainSensor { get; set; }

    }
}
