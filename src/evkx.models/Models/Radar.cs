using evdb.models.Enums;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines a radar sensor in a EV
    /// </summary>
    public class Radar
    {
        public Radar() {
            Location = EquipmentLocation.NotSet;
            RadarType = RadarType.NotSet;
        }

        /// <summary>
        /// Defines if the radar is optional or not
        /// </summary>
        public bool? Optional { get; set; }

        /// <summary>
        /// Defines the location of the radar
        /// </summary>
        public EquipmentLocation Location { get; set; }

        /// <summary>
        /// Defines the type of radar
        /// </summary>
        public RadarType RadarType { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {

            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Radar" };

            if(Location == EquipmentLocation.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(RadarType == RadarType.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(Optional == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;

        }
    }
}