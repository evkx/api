using evdb.models.Enums;
using System;

namespace evdb.models.Models
{
    public class Lidar
    {
        public Lidar() {

            Location = EquipmentLocation.NotSet;
        }

        public bool? Optional { get; set; }

        public EquipmentLocation Location { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Lidar" };

            if(Location == EquipmentLocation.NotSet)
            {
                dataQualityScore.ReduceScore(10, "Location");
            }

            if(Optional == null)
            {
                dataQualityScore.ReduceScore(10, "Optional");
            }

            return dataQualityScore;
        }
    }
}