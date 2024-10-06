namespace evdb.models.Models
{
    /// <summary>
    /// Describes the navigation system
    /// </summary>
    public class NavigationSystem
    {
        /// <summary>
        /// The map provider
        /// </summary>
        public string? MapProvider { get; set; }

        /// <summary>
        /// Defines if the navigation system has satelite map
        /// </summary>
        public bool? SateliteMap { get; set; }

        /// <summary>
        /// Defines if the navigation system has real time traffic information
        /// </summary>
        public bool? RealTimeTraffic { get; set; }

        /// <summary>
        /// Defines if the navigation system has online map updates
        /// </summary>
        public bool? OnlineMapUpdates { get; set; }

        /// <summary>
        /// Defines if the navigation system has voice guiding
        /// </summary>
        public bool? VoiceGuiding { get; set; }

        /// <summary>
        /// Defines if the navigation system has voice control
        /// </summary>
        public bool? VoiceControl { get; set; }

        /// <summary>
        /// Defines if the navigation system has route planning
        /// </summary>
        public bool? RoutePlanning { get; set; }

        /// <summary>
        /// Defines if the navigation system has a minimum state of charge for the destination setting
        /// </summary>
        public bool? MinSOCDestintation { get; set; }

        /// <summary>
        /// Defines if the navigation system has a minimum state of charge for the charging station setting
        /// </summary>
        public bool? MinSOCHPC { get; set; }

        public string GetDescriptionKey()
        {
            string descriptionKey = string.Empty;
            
            if (SateliteMap == true)
            {
                descriptionKey += ".satmap";
            }

            if (RoutePlanning == true)
            {
                descriptionKey += ".routeplanning";
            }

            if (RealTimeTraffic == true)
            {
                descriptionKey += ".rtt";
            }

            if(MinSOCDestintation == true)
            {
                descriptionKey += ".minsocdest";
            }

            if (MinSOCHPC == true)
            {
                descriptionKey += ".minsocdest";
            }

            if(string.IsNullOrEmpty(descriptionKey))
            {
                return string.Empty;
            }

            return "infotainment.navigation" + descriptionKey;
        }

        /// <summary>
        /// Calculates the data quality score for the navigation system
        /// </summary>
        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "NavigationSystem" };

            if (string.IsNullOrEmpty(MapProvider))
            {
                dataQualityScore.ReduceScore(10, "MapProvider");
            }

            if (RealTimeTraffic == null)
            {
                dataQualityScore.ReduceScore(10, "RealTimeTraffic");
            }

            if (OnlineMapUpdates == null)
            {
                dataQualityScore.ReduceScore(10, "OnlineMapUpdates");
            }

            if (VoiceControl == null)
            {
                dataQualityScore.ReduceScore(10, "VoiceControl");
            }

            if (RoutePlanning == null)
            {
                dataQualityScore.ReduceScore(10, "RoutePlanning");
            }

            if (MinSOCDestintation == null)
            {
                dataQualityScore.ReduceScore(10, "MinSOCDestintation");
            }

            if (MinSOCHPC == null)
            {
                dataQualityScore.ReduceScore(10, "MinSOCHPC");
            }

            if (VoiceGuiding == null)
            {
                dataQualityScore.ReduceScore(10, "VoiceGuiding");
            }

            return dataQualityScore;
        }
    }
}
