using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the exterior lights on an EV
    /// </summary>
    public class Lights
    {
        public Lights()
        {
            Headlights = [new Headlight() { Standard = true}];
            Taillights = [new Taillight() { Standard = true}];
        }

        /// <summary>
        /// The headlights options
        /// </summary>
        public List<Headlight>? Headlights { get; set; }

        /// <summary>
        /// The taillights options
        /// </summary>
        public List<Taillight>? Taillights { get; set; }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore score = new DataQualityScore() { DataArea = "Lights" };

            if(Headlights == null || Headlights.Count == 0)
            {
                score.ReduceScore(100);
            }
            else
            {
                bool hasStandard = false;
                foreach (Headlight headlight in Headlights)
                {
                    score.AddSubScore(headlight.CalculateDataQuality());
                    if(headlight.Standard == true)
                    {
                        hasStandard = true;
                    }
                }

                if(!hasStandard)
                {
                    score.ReduceScore(50);
                }
            
            }
           
            if(Taillights == null || Taillights.Count == 0)
            {
                score.ReduceScore(100);
            }
            else
            {
                bool hasStandard = false;
                foreach (Taillight taillight in Taillights)
                {
                    score.AddSubScore(taillight.CalculateDataQuality());
                    if(taillight.Standard == true)
                    {
                        hasStandard = true;
                    }
                }

                if(!hasStandard)
                {
                    score.ReduceScore(50);
                }
            }



            return score;
        }
       
    }
}
