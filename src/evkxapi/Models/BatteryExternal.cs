namespace evkxapi.Models
{
    public class BatteryExternal
    {
        public decimal? NetCapacity { get; set; }    

        public decimal? GrossCapacity { get; set; }

        public List<ChargeSpeedExternal>? OptimalChargeCurve { get; set; }
    }
}
