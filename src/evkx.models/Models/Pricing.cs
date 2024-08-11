using evdb.models.Enums;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the pricing information of a product.
    /// </summary>
    public class Pricing
    {
        /// <summary>
        /// Defines the starting price of the EV without any options
        /// </summary>
        public decimal StartPrice { get; set; }

        /// <summary>
        /// Defines the currency of the price
        /// </summary>
        public Currency Currency { get; set; }

        /// <summary>
        /// Defines the 
        /// </summary>
        public Country Country { get; set; }
    }
}
