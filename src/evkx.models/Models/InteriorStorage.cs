using evdb.models.Enums;
using System;
using System.Collections.Generic;

namespace evdb.models.Models
{
    public class InteriorStorage
    {
        public InteriorStorage()
        {
            StorageUnits = new List<InteriorStorageUnit>();
        }

        public InteriorStorageCategory Category { get; set; }

        public List<InteriorStorageUnit> StorageUnits { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "InteriorStorage" };    
           if(Category == InteriorStorageCategory.NotSet)
           {
             dataQualityScore.ReduceScore(1, "Category");
           }

           if(StorageUnits.Count == 0)
           {
             dataQualityScore.ReduceScore(30, "StorageUnits");
           }

           if(StorageUnits.Count > 0)
           {
             foreach(InteriorStorageUnit unit in StorageUnits)
             {
               DataQualityScore unitScore = unit.CalculateDataQuality();
               dataQualityScore.AddSubScore(unitScore);
             }
           }
            
           return dataQualityScore;
        }
    }
}
