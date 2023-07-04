using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Availability
    {
        public Region? Region { get; set; }

        public SubRegion? SubRegion { get; set; }

        public List<Country>? CountryList { get; set; }

        public DateTime? SaleStart { get; set; }

        public DateTime? DeliveryStart { get; set;  }
    }
}
