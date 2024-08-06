using evdb.models.Enums;
using evdb.Models;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the driving automation features of the vehicle.
    /// </summary>
    public class DrivingAutomation
    {
        public DrivingAutomation()
        {
            CruiseControl = new EVFeature();
            AdaptiveCruiseControl = new EVFeature();
            LaneCenteringAssist = new EVFeature();
            Summon = new EVFeature();
            AutomaticLaneChange = new EVFeature();
            FollowNavigation = new EVFeature();
            TrafficLightControl = new EVFeature();
            StopSignControl = new EVFeature();
            AutomaticParking = new EVFeature();
            RemoteParking = new EVFeature();
        }

        /// <summary>
        /// The level of automation defined by the SAE.
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SAELevelsOfDrivingAutomation LevelOfDrivingAutomation { get; set; }

        /// <summary>
        /// Defines if this level of automation is standard or optional.
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// The name of the driving automation feature.
        /// </summary>
        public string? DrivingAutomatFeatureName { get; set; }

        /// <summary>
        /// Defines if the vehicle has cruise control.
        /// </summary>
        public EVFeature? CruiseControl { get; set; }

        /// <summary>
        /// Defines if the vehicle has adaptive cruise control.
        /// </summary>
        public EVFeature? AdaptiveCruiseControl { get; set; }

        /// <summary>
        /// Defines if the vehicle has lane centering assist.
        /// </summary>
        public EVFeature? LaneCenteringAssist { get; set; }

        /// <summary>
        /// Defines if the vehicle has summon.
        /// </summary>
        public EVFeature? Summon { get; set; }

        /// <summary>
        /// Defines if the vehicle has automatic lane change.
        /// </summary>
        public EVFeature? AutomaticLaneChange { get; set; }

        /// <summary>
        /// Defines if the vehicle has follow navigation.
        /// </summary>
        public EVFeature? FollowNavigation { get; set; }

        /// <summary>
        /// Defines if the vehicle has traffic light control.
        /// </summary>
        public EVFeature? TrafficLightControl { get; set; }


        /// <summary>
        /// Defines if the vehicle has stop sign control.
        /// </summary>
        public EVFeature? StopSignControl { get; set; }

        /// <summary>
        /// Defines if the vehicle has automatic parallel parking.
        /// </summary>
        public EVFeature? AutomaticParking { get; set; }

        /// <summary>
        /// Defines if the vehicle has remote parking.
        /// </summary>
        public EVFeature? RemoteParking { get; set; }


        /// <summary>
        /// Calculates the data quality of the driving automation features.
        /// </summary>
        /// <returns></returns>
        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "DrivingAutomation" };

            if (CruiseControl == null || CruiseControl.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (AdaptiveCruiseControl == null || AdaptiveCruiseControl.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (LaneCenteringAssist == null || LaneCenteringAssist.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (Summon == null || Summon.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (AutomaticLaneChange == null || AutomaticLaneChange.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (FollowNavigation == null || FollowNavigation.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (TrafficLightControl == null || TrafficLightControl.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (StopSignControl == null || StopSignControl.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (AutomaticParking == null || AutomaticParking.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (Standard == null)
            {
                dataQualityScore.ReduceScore(30);
            }

            if (DrivingAutomatFeatureName == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;
        }
    }
}
