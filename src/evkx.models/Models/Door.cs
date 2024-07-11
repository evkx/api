using evdb.models.Enums;
using evdb.Models;
using System;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Door details
    /// </summary>
    public class Door
    {
        /// <summary>
        /// Where the door is located
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DoorLocation? Location { get; set; }

        /// <summary>
        /// Defines if the door has a soft close feature
        /// </summary>
        public EVFeature? SoftClose { get; set; }

        /// <summary>
        /// Defines if the door has a kick sensor. Typically used for the trunk
        /// </summary>
        public EVFeature? KickSensor { get; set; }

        /// <summary>
        /// Defines if the door is powered to open and close
        /// </summary>
        public EVFeature? PoweredOpenClose { get; set; }

        /// <summary>
        /// Defines the type of door
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DoorType? Type { get; set; }

        /// <summary>
        /// Defines if the door has frameless window
        /// </summary>
        public EVFeature? FramelessWindow { get; set; }

        /// <summary>
        /// Defines the door handle type
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DoorHandleType? DoorHandleType { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Door" };

            if(Location == null || Location == Enums.DoorLocation.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }   

            if(SoftClose == null || SoftClose.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(KickSensor == null || KickSensor.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(PoweredOpenClose == null || PoweredOpenClose.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(Type == null || Type == Enums.DoorType.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }   

            if(FramelessWindow == null || FramelessWindow.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }   

            if(DoorHandleType == null || DoorHandleType == Enums.DoorHandleType.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }   

            return dataQualityScore;
        }
    }
}
