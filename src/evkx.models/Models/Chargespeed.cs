using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class ChargeSpeed
    {
        public int SOC { get; set; }

        public decimal? SpeedKw { get; set; }
       
        [JsonIgnore]
        public decimal ChargeTime { get; set; }

        [JsonIgnore]
        public decimal ChargeTimeFromZero { get; set; }

        [JsonIgnore]
        public decimal EnergyCharged { get; set; }


        public decimal? GetChargeSpeedAfterLoss()
        {
            if(SpeedKw != null)
            {
                return decimal.Multiply(SpeedKw.Value, (decimal) 0.95);
            }

            return SpeedKw;
        }
    }
}
