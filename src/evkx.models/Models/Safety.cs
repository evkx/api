using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the safety features of a vehicle.
    /// </summary>
    public class Safety
    {
        public Safety()
        {
            Airbags = new List<Airbag>();
            FirstRowSeatBeltPretensioner = new EVFeature();
            SecondRowSeatBeltPretensioner = new EVFeature();

        }

        /// <summary>
        /// Defines the airbags in the vehicle.
        /// </summary>
        public List<Airbag>? Airbags { get; set; }

        /// <summary>
        /// Defines if the vehicle has a first row seat belt pretensioner.
        /// </summary>
        public EVFeature FirstRowSeatBeltPretensioner { get; set; }

        /// <summary>
        /// Defines if the vehicle has a second row seat belt pretensioner.
        /// </summary>
        public EVFeature SecondRowSeatBeltPretensioner { get; set; }

        /// <summary>
        /// Defines the Euro NCAP test results.
        /// </summary>
        public EuroNcapTest? EuroNcapTest { get; set; }

        public DataQualityScore CalculateDataQualityScore()
        {
            DataQualityScore score = new DataQualityScore() { DataArea = "Safety" };

            if (Airbags == null || Airbags.Count == 0)
            {
                score.ReduceScore(10, "Airbags");
            }

            if (FirstRowSeatBeltPretensioner == null || FirstRowSeatBeltPretensioner.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(4, "FirstRowSeatBeltPretensioner");
            }

            if (SecondRowSeatBeltPretensioner == null || SecondRowSeatBeltPretensioner.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(4, "SecondRowSeatBeltPretensioner");
            }

            if (EuroNcapTest != null)
            {
                score.AddSubScore(EuroNcapTest.CalculateDataQualityScore());
            }

            return score;
        }

    }


}
