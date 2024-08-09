using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines a screen
    /// </summary>
    public class Screen
    {
        /// <summary>
        /// Defines the screen size
        /// </summary>
        public double? ScreenSize { get; set; }

        /// <summary>
        /// Defines the screen location
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ScreenLocation? Location { get; set; }

        /// <summary>
        /// Defines the list of content shown in screen
        /// </summary>
        public List<string>? Content { get; set; }

        /// <summary>
        /// Defines the screen rotation
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ScreenRotation? Rotation { get; set; }

        /// <summary>
        /// Defines if the screen is thouch screen
        /// </summary>
        public bool? Touch { get; set; }

        /// <summary>
        /// Defines the resolution of the screen
        /// </summary>
        public string? Resolution { get; set; }

        /// <summary>
        /// Defines if the screen is optional
        /// </summary>
        public bool? Optional { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ScreenCategory? ScreenCategory { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Screen" };

            if(ScreenSize == null)
            {
                dataQualityScore.ReduceScore(100);
            }

            if (Location == null || Location == ScreenLocation.None)
            {
                dataQualityScore.ReduceScore(30);
            }

            if(Content == null || Content.Count == 0)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(Rotation == null || Rotation == ScreenRotation.None)
            {
                dataQualityScore.ReduceScore(30);
            }

            if(Optional == null)
            {
                dataQualityScore.ReduceScore(2);
            }


            return dataQualityScore;
        }
    }
}
