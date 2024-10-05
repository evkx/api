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

        /// <summary>
        /// List of batteries available for this model
        /// </summary>
        public List<Battery> Battery { get; set; }

        /// <summary>
        /// Defines the motors of the EV
        /// </summary>
        public List<Motor> Motors {get; set; }

        /// <summary>
        /// Defines the brakes of the EV. 
        /// </summary>
        public List<Brakes> Brakes { get; set; }

        /// <summary>
        /// Defines the drive setup of the EV
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DriveSetup? DriveSetup { get; set; }

        /// <summary>
        /// Defines the dynamic steering of the EV
        /// </summary>
        public EVFeature DynamicSteering { get; set; }

        /// <summary>
        /// Defines if the EV has rear wheel steering
        /// </summary>
        public EVFeature RearWheelSteering { get; set; }

        /// <summary>
        /// Defines if the EV has torque vectoring
        /// </summary>
        public EVFeature TorqueVectoring { get; set; }

        /// <summary>
        /// Defines the different suspension systems available for the EV
        /// </summary>
        public List<Suspension> Suspension { get; set; }

        /// <summary>
        /// Defines the performance figures for the EV
        /// </summary>
        public List<Performance> Performance { get; set; }

        /// <summary>
        /// Defines the charging capabilities of the EV
        /// </summary>
        public Charging Charging { get; set; }    

        /// <summary>
        /// Defines the range and consumption for the EV. Most would have a single range and consumption value, but some may have multiple
        /// </summary>
        public List<RangeAndConsumption>? RangeAndConsumption { get; set; }

        /// <summary>
        /// Defines the regen capabilities of the EV
        /// </summary>
        public Regen Regen { get; set; }

        /// <summary>
        /// Defines the transmission of the EV
        /// </summary>
        public Transmission? Transmission { get; set; }

        /// <summary>
        /// Defines if the EV has selectable drive modes
        /// </summary>
        public EVFeature SelectableDriveModes { get; set; }

        /// <summary>
        /// List the selectable drive modes
        /// </summary>
        public List<DriveMode> DriveModes { get; set; }

        public DataQualityScore CalculateDataQuality()
        {
           DataQualityScore dataQuality = new DataQualityScore() { DataArea = "Drivetrain" };

            if (Battery == null || Battery.Count == 0)
            {
                dataQuality.ReduceScore(1000,"Battery");
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
                dataQuality.ReduceScore(200,"Motors");
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
                dataQuality.ReduceScore(200,"Brakes");
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
                dataQuality.ReduceScore(300,"DriveSetup");
            }

            if(DriveSetup != null && DriveSetup == models.Enums.DriveSetup.OneMotorFrontAxle && (Motors == null || Motors.Count != 1))
            {
                dataQuality.ReduceScore(100, "Motors");
            }

            if (DriveSetup != null && DriveSetup == models.Enums.DriveSetup.OneMotorRearAxle && (Motors == null || Motors.Count != 1))
            {
                dataQuality.ReduceScore(100, "Motors");
            }

            if (DriveSetup != null && DriveSetup == models.Enums.DriveSetup.OneMotorFrontTwoMotorsRearAxle && (Motors == null || Motors.Count != 3))
            {
                dataQuality.ReduceScore(100, "Motors");
            }

            if (DriveSetup != null && DriveSetup == models.Enums.DriveSetup.OneMotorFrontTwoMotorsRearAxle && (Motors == null || Motors.Count != 3))
            {
                dataQuality.ReduceScore(100, "DriveSetup");
            }

            if (DriveSetup != null && DriveSetup == models.Enums.DriveSetup.OneMotorFrontAndRearAxle && (Motors == null || Motors.Count != 2))
            {
                dataQuality.ReduceScore(100, "Motors");
            }

            if (DriveSetup != null && DriveSetup == models.Enums.DriveSetup.TwoMotorsFrontAndRearAxle && (Motors == null || Motors.Count != 4))
            {
                 dataQuality.ReduceScore(100, "Motors");
            }

            if (DynamicSteering == null || DynamicSteering.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQuality.ReduceScore(1,"DynamicSteering");
            }

            if(RearWheelSteering == null || RearWheelSteering.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQuality.ReduceScore(5, "RearWheelSteering");
            }

            if(TorqueVectoring == null || TorqueVectoring.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                dataQuality.ReduceScore(1, "TorqueVectoring");
            }

            if(Suspension == null || Suspension.Count == 0)
            {
                dataQuality.ReduceScore(10,"Suspension");
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

                dataQuality.ReduceScore(50,"Performance");
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

                dataQuality.ReduceScore(200,"Charging");
            }
            else
            {
                dataQuality.AddSubScore(Charging.CalculateDataQuality());
            }

            if(RangeAndConsumption == null || RangeAndConsumption.Count == 0)
            {
                dataQuality.ReduceScore(100,"RangeAndConsumption");
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

                dataQuality.ReduceScore(100, "Regen");
            }
            else
            {
                dataQuality.AddSubScore(Regen.CalculateDataQuality());
            }

            if(Transmission == null)
            {

                dataQuality.ReduceScore(2, "Transmission");
            }

            if(SelectableDriveModes == null || SelectableDriveModes.FeatureStatus.Equals(FeatureStatus.Unknown))
            {

                dataQuality.ReduceScore(5,"SelectableDriveModes");
            }

            if(SelectableDriveModes != null && SelectableDriveModes.FeatureStatus.Equals(FeatureStatus.Standard) && DriveModes == null)
            {

                dataQuality.ReduceScore(5, "DriveModes");
            }

            return dataQuality;
        }

    }
}
