using evdb.models.Enums;
using evdb.models.Models;
using evdb.Models;

namespace evdb
{
    public static class EvFilter
    {

       public static List<EV> Filter(List<EV> evlist, EvSearch searchFilter)
        {

            if(searchFilter?.Brands != null && searchFilter.Brands.Any())
            {
                List<EV> tempList = new List<EV>();
                foreach(string brand in searchFilter.Brands)
                {
                    tempList.AddRange(evlist.Where(ev => ev.Brand != null && ev.Brand.Name != null && ev.Brand.Name.Equals(brand)));
                }

                evlist = tempList;
            }

            if(searchFilter.AllWheelDrive.HasValue && searchFilter.AllWheelDrive.Value)
            {
                evlist = evlist.Where(ev=> ev.Drivetrain != null && ev.Drivetrain.DriveSetup.Equals(DriveSetup.OneMotorFrontAndRearAxle)).ToList();
            }

            if(searchFilter.MinimumWltpRange.HasValue)
            {
                evlist = evlist.Where(ev => ev.Drivetrain != null && ev.Drivetrain.RangeAndConsumption != null && ev.Drivetrain.RangeAndConsumption != null && ev.Drivetrain.RangeAndConsumption.Exists(r => r.BasicTrimWltpRange > searchFilter.MinimumWltpRange.Value)).ToList();
            }

            if(searchFilter.EvType != null && searchFilter.EvType.Any())
            {
                List<EV> tempList = new List<EV>();

                foreach(EvBodyType evtype in searchFilter.EvType)
                {
                    tempList.AddRange(evlist.Where(ev => ev.ModelInfo != null && ev.ModelInfo.BodyType != null && ev.ModelInfo.BodyType.Equals(evtype)).ToList());
                }

                evlist = tempList;
            }

            if(searchFilter.SeatConfiguration != null && searchFilter.SeatConfiguration.Any())
            {
                List<EV> tempList = new List<EV>();

                foreach (string config in searchFilter.SeatConfiguration)
                {
                    tempList.AddRange(evlist.Where(ev => ev.Interior != null && ev.Interior.SeatLayout != null && ev.Interior.SeatLayout.FirstOrDefault(s=> s.NumberOfSeats != null && s.NumberOfSeats.ToString().Equals(config)) != null).ToList());
                }

                evlist = tempList;
            }

            return evlist;
        }
    }
}
