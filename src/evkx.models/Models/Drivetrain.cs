using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines the drivetrain for an EV. 
    /// </summary>
    public class Drivetrain
    {
        public Drivetrain()
        {
            Motors = new List<Motor>
            {
                new Motor()
            };
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
            DriveModes = new List<DriveMode>();
            SelectableDriveModes = new EVFeature();
            Charging = new Charging();
        }

        public List<Battery> Battery { get; set; }

        public List<Motor> Motors {get; set; }

        public List<Brakes> Brakes { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DriveSetup? DriveSetup { get; set; }

        public EVFeature DynamicSteering { get; set; }

        public EVFeature RearWheelSteering { get; set; }

        public EVFeature AllWheelDrive { get; set; }

        public EVFeature TorqueVectoring { get; set; }

        public List<Suspension> Suspension { get; set; }

        public List<Performance> Performance { get; set; }

        public Charging Charging { get; set; }    

        public List<RangeAndConsumption>? RangeAndConsumption { get; set; }

        public Regen Regen { get; set; }

        public Transmission? Transmission { get; set; }

        public EVFeature SelectableDriveModes { get; set; }

        public List<DriveMode> DriveModes { get; set; }

        public DataQualityScore CalculateDataQuality()
        {
           DataQualityScore dataQuality = new DataQualityScore() { DataArea = "Drivetrain" };

            if (Battery == null || Battery.Count == 0)
            {
                dataQuality.DataQuality -= 10;
            }
            else
            {
                foreach (Battery battery in Battery)
                {
                    dataQuality.AddSubScore(battery.CalculateDataQuality());
                }
            }

            if(Motors == null || Motors.Count == 0)
            {
                dataQuality.DataQuality -= 10;
            }
            else
            {
                foreach (Motor motor in Motors)
                {
                    dataQuality.AddSubScore(motor.CalculateDataQuality());
                }
            }

            if(Brakes == null || Brakes.Count == 0)
            {
                dataQuality.DataQuality -= 10;
            }
            else
            {
                foreach (Brakes brake in Brakes)
                {
                    dataQuality.AddSubScore(brake.CalculateDataQuality());
                }
            }

            if(DriveSetup == null || DriveSetup.Equals(models.Enums.DriveSetup.NotSet))
            {
                dataQuality.DataQuality-=200;
            }

            if(DynamicSteering == null || DynamicSteering.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQuality.DataQuality--;
            }

            if(RearWheelSteering == null || RearWheelSteering.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQuality.DataQuality-=5;
            }

            if(AllWheelDrive == null || AllWheelDrive.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQuality.DataQuality-=5;
            }

            if(TorqueVectoring == null || TorqueVectoring.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQuality.DataQuality--;
            }

            if(Suspension == null || Suspension.Count == 0)
            {
                dataQuality.ReduceScore(10);
            }
            else
            {
                foreach (Suspension suspension in Suspension)
                {
                    dataQuality.AddSubScore(suspension.CalculateDataQuality());
                }
            }

            if(Performance == null || Performance.Count == 0)
            {

                dataQuality.ReduceScore(50);
            }
            else
            {
                foreach (Performance performance in Performance)
                {
                    dataQuality.AddSubScore(performance.CalculateDataQuality());
                }
            }

            if(Charging == null)
            {

                dataQuality.ReduceScore(10);
            }
            else
            {
                dataQuality.AddSubScore(Charging.CalculateDataQuality());
            }

            if(RangeAndConsumption == null || RangeAndConsumption.Count == 0)
            {
                dataQuality.ReduceScore(100);
            }
            else
            {
                foreach (RangeAndConsumption range in RangeAndConsumption)
                {
                    dataQuality.AddSubScore(range.CalculateDataQuality());
                }
            }

            if(Regen == null)
            {

                dataQuality.ReduceScore(100);
            }
            else
            {
                dataQuality.AddSubScore(Regen.CalculateDataQuality());
            }

            if(Transmission == null)
            {

                dataQuality.ReduceScore(2);
            }

            if(SelectableDriveModes == null || SelectableDriveModes.FeatureStatus.Equals(FeatureStatus.Unknown))
            {

                dataQuality.ReduceScore(5);
            }

            if(SelectableDriveModes != null && SelectableDriveModes.FeatureStatus.Equals(FeatureStatus.Standard) && DriveModes == null)
            {

                dataQuality.ReduceScore(5);
            }

            return dataQuality;
        }

    }
}
