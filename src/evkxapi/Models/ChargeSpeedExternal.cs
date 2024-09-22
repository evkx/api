namespace evkxapi.Models
{
    /// <summary>
    /// Describes the charging speed based on charging stared on 0% SOC
    /// </summary>
    public class ChargeSpeedExternal
    {
        /// <summary>
        /// Statue of charge
        /// </summary>
        public int SOC { get; set; }

        /// <summary>
        /// Speed of charge in Kw at start of this SOC percentage
        /// </summary>
        public decimal? SpeedKw { get; set; }

        /// <summary>
        /// Energy charged in Kwh at start of this SOC percentage
        /// </summary>
        public decimal? EnergyCharged { get; set; }

        /// <summary>
        /// Time to charge this percent in seconds
        /// </summary>
        public decimal? ChargeTime { get; set; }

        /// <summary>
        /// Time to charge in seconds from 0% soc
        /// </summary>
        public decimal? ChargeTimeFromZero { get; set; }

    }
}
