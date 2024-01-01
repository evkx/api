using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Drivetrain
    {
        public Drivetrain()
        {
            Motors = new List<Motor>();
            Motors.Add(new Motor());
            Brakes = new List<Brakes>();
            Brakes.Add(new models.Models.Brakes());
            Battery = new List<Battery>();
            Battery.Add(new Models.Battery());
            AllWheelDrive = new EVFeature();
            Suspension = new List<Suspension>();
            Suspension.Add(new Models.Suspension());
            Performance = new List<Performance>();
            Performance.Add(new Models.Performance());
            RearWheelSteering = new EVFeature();
            DriveSetup = models.Enums.DriveSetup.NotSet;
            Regen = new Regen();
            RangeAndConsumption = new List<RangeAndConsumption>();
            RangeAndConsumption.Add(new models.Models.RangeAndConsumption());
            DynamicSteering = new EVFeature();
            TorqueVectoring = new EVFeature();
        }

        public string? Platform { get; set; }

        public List<Battery>? Battery { get; set; }

        public List<Motor>? Motors {get; set; }

        public List<Brakes>? Brakes { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DriveSetup? DriveSetup { get; set; }

        public EVFeature? DynamicSteering { get; set; }

        public EVFeature? RearWheelSteering { get; set; }

        public EVFeature? AllWheelDrive { get; set; }

        public EVFeature? TorqueVectoring { get; set; }

        public List<Suspension>? Suspension { get; set; }

        public List<Performance>? Performance { get; set; }

        public Charging? Charging { get; set; }    

        public List<RangeAndConsumption>? RangeAndConsumption { get; set; }

        public Regen? Regen { get; set; }

        public Transmission? Transmission { get; set; }

        public EVFeature? SelectableDriveModes { get; set; }

        public List<DriveMode> DriveModes { get; set; }

    }
}
