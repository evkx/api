using evdb.models.Enums;
using System;

namespace evdb.models.Models
{
    public class InteriorStorageUnit
    {
        public InteriorStorageType Type { get; set; }

        public InteriorStorageLocation Location { get; set; }

        public InteriorStorageSize Size { get; set; }

        public bool Optional { get; set; } = false;

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "InteriorStorageUnit" };

            if (Type == InteriorStorageType.NotSet)
            {
                dataQualityScore.ReduceScore(1, "Type");
            }

            if (Location == InteriorStorageLocation.NotSet)
            {
                dataQualityScore.ReduceScore(1, "Location");
            }

            if (Size == InteriorStorageSize.NotSet)
            {
                dataQualityScore.ReduceScore(1, "Size");
            }

            return dataQualityScore;
        }
    }
}
