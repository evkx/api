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

        public static decimal? ToSqFeetFromSquareMeter(decimal? squareMeter, int decimals = 1)
        {
            if (squareMeter != null)
            {
                return decimal.Round(Decimal.Multiply(squareMeter.Value, (decimal)10.7639), decimals);
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


        public static decimal? ToHpFromKw(decimal? power)
        {
            if (power != null)
            {
                return Decimal.Round(Decimal.Multiply(power.Value, new decimal(1.3596216173)), 0);
            }

            return null;
        }


        public static decimal? ToMilesFromKph(decimal? kph, int decimals = 1)
        {
            if (kph != null)
            {
                return decimal.Round(decimal.Divide(kph.Value, (decimal)1.609), decimals);
            }

            return null;
        }

        public static decimal? ToLbsFromKg(decimal? kg, int decimals = 1)
        {
            if (kg != null)
            {
                return decimal.Round(decimal.Multiply(kg.Value, new decimal(2.20462)), decimals);
            }

            return null;
        }

        public static decimal? ToCuFeetFromLiters(decimal? liters, int decimals = 1)
        {
            if (liters != null)
            {
                return decimal.Round(decimal.Multiply(liters.Value, new decimal(0.0353147)), decimals);
            }

            return null;
        }

        public static decimal? ToFootPoundsFromNm(decimal? torqueNm, int decimals = 1)
        {
            if (torqueNm != null)
            {
                return decimal.Round(decimal.Multiply(torqueNm.Value, new decimal(0.738)), decimals);
            }

            return null;
        }


        public static decimal? ToInchFromMillimeter(decimal? millimeter, int decimals = 1)
        {
            if (millimeter != null)
            {
                return decimal.Round(decimal.Multiply(millimeter.Value, new decimal(0.0393701)), decimals);
            }

            return null;
        }

        public static decimal? ToInchFromMeter(decimal? millimeter, int decimals = 1)
        {
            if (millimeter != null)
            {
                return decimal.Round(decimal.Multiply(millimeter.Value, new decimal(39.3701)), decimals);
            }

            return null;
        }

        public static decimal? ToBHpFromKw(decimal? kw, int decimals = 1)
        {
            if (kw != null)
            {
                return decimal.Round(decimal.Multiply(kw.Value, new decimal(1.3410220888438)), decimals);
            }

            return null;
        }

        public static decimal? ToHpFromKw(decimal? kw, int decimals = 1)
        {
            if (kw != null)
            {
                return decimal.Round(decimal.Multiply(kw.Value, new decimal(1.3596216173039)), decimals);
            }

            return null;
        }


    }
}
