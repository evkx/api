namespace evdb.models.Models
{
    /// <summary>
    /// Defines a Euro NCAP test.
    /// </summary>
    public class EuroNcapTest
    {
        /// <summary>
        /// Define the star rating of the test.
        /// </summary>
        public int StarRating { get; set; }

        /// <summary>
        /// Addult occupant score.
        /// </summary>
        public int AdultOccupant { get; set; }

        /// <summary>
        /// Child occupant score.
        /// </summary>
        public int ChildOccupant { get; set; }

        /// <summary>
        /// Vulnerable road user score.
        /// </summary>
        public int VulnerableRoadUsers { get; set; }

        /// <summary>
        /// Safety assist score.
        /// </summary>
        public int SafetyAssist { get; set; }

        /// <summary>
        /// The version of the test
        /// </summary>
        public string? Version { get; set; }

        /// <summary>
        /// Url to the test report.
        /// </summary>
        public string? ReportUrl { get; set; }

        /// <summary>
        /// The video of the test.
        /// </summary>
        public string? YoutubeVideo { get; set; }

        internal DataQualityScore CalculateDataQualityScore()
        {
           DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "EuroNcapTest" };

            if (StarRating == 0)
            {
                dataQualityScore.ReduceScore(10, "StarRating");
            }

            if (AdultOccupant == 0)
            {
                dataQualityScore.ReduceScore(10, "AdultOccupant");
            }

            if (ChildOccupant == 0)
            {
                dataQualityScore.ReduceScore(10, "ChildOccupant");
            }

            if (VulnerableRoadUsers == 0)
            {
                dataQualityScore.ReduceScore(10, "VulnerableRoadUsers");
            }

            if (SafetyAssist == 0)
            {
                dataQualityScore.ReduceScore(10, "SafetyAssist");
            }

            if(string.IsNullOrEmpty(Version))
            {
                dataQualityScore.ReduceScore(10, "Version");
            }

            if(string.IsNullOrEmpty(ReportUrl))
            {
                dataQualityScore.ReduceScore(10, "ReportUrl");
            }

            if(string.IsNullOrEmpty(YoutubeVideo))
            {
                dataQualityScore.ReduceScore(10, "YoutubeVideo");
            }

            return dataQualityScore;
        }
    }
}
