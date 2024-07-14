using evdb.Models;
using System;
using System.Collections.Generic;

namespace evdb.models.Models
{
    public class InteriorDesign
    {
        public InteriorDesign()
        {
            SeatMaterials = [new SeatMaterial()];
        }

        public bool? Standard { get; set; }

        public Dictionary<string,string>? Name { get; set; }

        /// <summary>
        /// The different seat materials available
        /// </summary>
        public List<SeatMaterial>? SeatMaterials { get; set; }

        /// <summary>
        /// The different headliner designs available
        /// </summary>
        public List<HeadlinerDesign>? HeadlinerDesigns { get; set; }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "InteriorDesign" };
        
            if (Standard == null)
            {
                dataQualityScore.ReduceScore(5);
            }

            if(Name == null) 
            {
                dataQualityScore.ReduceScore(5);
            }

            if(HeadlinerDesigns == null) 
            {
                dataQualityScore.ReduceScore(5);
            }

            if (SeatMaterials == null)
            {
                dataQualityScore.ReduceScore(200);
            }
            else
            {
                foreach (SeatMaterial seatMaterial in SeatMaterials)
                {
                    dataQualityScore.AddSubScore(seatMaterial.CalculateDataQualityScore());
                }
            }

            return dataQualityScore;

        }
    }
}
