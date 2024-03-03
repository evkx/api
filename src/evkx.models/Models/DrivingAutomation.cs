using evdb.models.Enums;
using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
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
            AutomaticParallelParking = new EVFeature();
        }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SAELevelsOfDrivingAutomation LevelOfDrivingAutomation { get; set; }

        public bool? Standard { get; set; }

        public string? DrivingAutomatFeatureName { get; set; }

        public EVFeature? CruiseControl { get; set; }

        public EVFeature? AdaptiveCruiseControl { get; set; }

        public EVFeature? LaneCenteringAssist { get; set; }

        public EVFeature? Summon { get; set; }

        public EVFeature? AutomaticLaneChange { get; set; }

        public EVFeature? FollowNavigation { get; set; }

        public EVFeature? TrafficLightControl { get; set; }

        public EVFeature? StopSignControl { get; set; }

        public EVFeature? AutomaticParallelParking { get; set; }

    }
}
