using evdb.models.Enums;
using evdb.Models;
using System;

namespace evdb.models.Models
{
    public class Camera
    {
        public bool? Optional { get; set; }

        public EquipmentLocation Location { get; set; } 

        public CameraType CameraType { get; set; }

        public bool Washer { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Camera" };

            if(Location == EquipmentLocation.NotSet)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(CameraType == CameraType.NotSet)
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