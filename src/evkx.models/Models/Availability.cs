using evdb.models.Enums;
using System;
using System.Collections.Generic;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the availability of the EV.
    /// </summary>
    public class Availability
    {
        /// <summary>
        /// Defines the region
        /// </summary>
        public Region? Region { get; set; }

        /// <summary>
        /// Defines the sub region
        /// </summary>
        public SubRegion? SubRegion { get; set; }

        /// <summary>
        /// Defines a list of countries if not avaialbility does not go for all region
        /// </summary>
        public List<Country>? CountryList { get; set; }

        /// <summary>
        /// Defines the salestart
        /// </summary>
        public DateOnly? SaleStart { get; set; }

        /// <summary>
        /// Defines the delivery start
        /// </summary>
        public DateOnly? DeliveryStart { get; set;  }

        /// <summary>
        /// Defines the available status
        /// </summary>
        public AvailableStatus? AvailableStatus { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Availability" };

            if (Region == null  || Region == Enums.Region.NotSet)
            {
                dataQualityScore.ReduceScore(10, "Region");
            }

            if (AvailableStatus == null || AvailableStatus == Enums.AvailableStatus.NotSet)
            {
                dataQualityScore.ReduceScore(25, "AvailableStatus");
            }

            return dataQualityScore;
        }
    }
}
