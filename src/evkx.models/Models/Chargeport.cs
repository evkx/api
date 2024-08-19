using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines the chargeport of an EV
    /// </summary>
    public class Chargeport
    {
        /// <summary>
        /// Defines if this chargeport is standard
        /// </summary>
        public bool? IsStandard { get; set; }

        /// <summary>
        /// Defines the location of the chargeport
        /// </summary>
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ChargePortLocation? ChargePortLocation { get; set; }

        /// <summary>
        /// Defines the variants of the chargeport
        /// </summary>
        public List<ChargePortVariant>? ChargePortVariant { get; set; }

        /// <summary>
        /// Defines if the chargeport supports V2L
        /// </summary>
        public bool? V2L { get; set; }

        /// <summary>
        /// Defines if the chargeport supports V2H
        /// </summary>
        public bool? V2H { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Chargeport" };

            if(ChargePortLocation == null || ChargePortLocation.Equals(models.Enums.ChargePortLocation.NotSet))
            {
                dataQualityScore.ReduceScore(30);
            }

            if(ChargePortVariant == null || ChargePortVariant.Count == 0)
            {
                dataQualityScore.ReduceScore(10);
            }
            else
            {
                foreach (var chargePortVariant in ChargePortVariant)
                {
                    dataQualityScore.AddSubScore(chargePortVariant.CalculateDataQuality());
                }
            }

            if(V2L == null)
            {
                dataQualityScore.ReduceScore(1);
            }

            return dataQualityScore;

        }
    }
}
