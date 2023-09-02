using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evkxapi.Helpers
{
    public static class EvConversion
    {

        public static decimal? ToMilesFromKph(decimal? km)
        {
            if (km != null)
            {
                return Decimal.Divide(km.Value, (decimal)1.609);
            }

            return null;
        }

        public static decimal? ToKmFromMiles(decimal? miles)
        {
            if (miles != null)
            {
                return Decimal.Multiply(miles.Value, (decimal)1.609);
            }

            return null;
        }

        public static decimal? ToMiKwhFromKwh100km(decimal? consumption)
        {
            decimal milesDriven = Decimal.Divide(100, (decimal)1.609);

            if (consumption != null)
            {
                return Decimal.Divide(milesDriven, consumption.Value);
            }

            return null;
        }


    }
}
