using evdb.Models;

namespace evdb.models.Models
{
    /// <summary>
    /// Security features of the EV
    /// </summary>
    public class Security
    {
        /// <summary>
        /// Defines if the EV has keyless go
        /// </summary>
        public EVFeature? KeylessGo { get; set; }

        /// <summary>
        /// Defines if the EV has keyless entry
        /// </summary>
        public EVFeature? KeylessEntry { get; set; }

        /// <summary>
        /// Defines if the EV can use Phone as key
        /// </summary>
        public EVFeature? PhoneAsKey { get; set; }

        /// <summary>
        /// Defines if the EV has a alarm system
        /// </summary>
        public EVFeature? AlarmSystem { get; set; }

        /// <summary>
        /// Defines if the EV has Dash Cam
        /// </summary>
        public EVFeature? DashCam { get; set; }

        /// <summary>
        /// Defines if the EV has Parking Surveillance
        /// </summary>
        public EVFeature? ParkingSurveillance { get; set; }

        /// <summary>
        /// Calculate data qualtity
        /// </summary>
        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Security" };

            if (KeylessGo == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (KeylessEntry == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (PhoneAsKey == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if (AlarmSystem == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(DashCam == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(ParkingSurveillance == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;
        }
    }
}
