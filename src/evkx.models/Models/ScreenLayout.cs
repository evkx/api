using evdb.Models;
using System;
using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines a specific screen layout
    /// </summary>
    public class ScreenLayout
    {
        public ScreenLayout()
        {
            Screens = new List<Screen>
            {
                new Screen()
            };
        }

        /// <summary>
        /// Defines the screen
        /// </summary>
        public List<Screen>? Screens { get; set; }

        /// <summary>
        /// Defines if this screen layout is standard
        /// </summary>
        public bool? Standard { get; set; }

        /// <summary>
        /// Defines the layout name
        /// </summary>
        public string? LayoutName { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "ScreenLayout" };   

            if(Screens == null || Screens.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {
                foreach (var screen in Screens)
                {
                    dataQualityScore.AddSubScore(screen.CalculateDataQuality());
                }
            }

            if(Standard == null)
            {
                dataQualityScore.ReduceScore(2);
            }

            return dataQualityScore;
        }
    }
}
