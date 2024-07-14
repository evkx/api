using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Chargeport
    {
        public bool? IsStandard { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ChargePortLocation? ChargePortLocation { get; set; }

        public List<ChargePortVariant>? ChargePortVariant { get; set; }

        public bool? V2L { get; set; }

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
