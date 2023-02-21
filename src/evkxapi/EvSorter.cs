using evdb.models.Enums;
using evdb.Models;
using evkx.models.Models.Search;

namespace evdb
{
    public static class EvSorter
    {
        public static List<EV> Sort(List<EV> evList, EvSearch evSearch)
        {
            if(!evSearch.SortOrder.HasValue || evSearch.SortOrder.Equals(SortOrder.Name))
            {
                evList = evList.OrderBy(ev => ev.GetFullName()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.RangeMinimumWltp))
            {
                evList = evList.OrderBy(ev => ev.MinimumWltpRangeBasicTrim()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.NetBattery))
            {
                evList = evList.OrderBy(ev => ev.NetBatterySizeStandardBattery()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.NetBatteryDesc))
            {
                evList = evList.OrderByDescending(ev => ev.NetBatterySizeStandardBattery()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.WltpBasicConsumption))
            {
                evList = evList.OrderBy(ev => ev.WltpConsumptionBasicTrim()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.TopSpeedDesc))
            {
                evList = evList.OrderByDescending(ev => ev.TopSpeed()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.PowerDesc))
            {
                evList = evList.OrderByDescending(ev => ev.Power()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.MaxDCCharging))
            {
                evList = evList.OrderByDescending(ev => ev.MaxDCCharging()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.ZeroTo100))
            {
                evList = evList.OrderBy(ev => ev.GetZeroTo100()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.ZeroTo100))
            {
                evList = evList.OrderBy(ev => ev.GetZeroTo100()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageChargingSpeed10100Desc))
            {
                evList = evList.OrderByDescending(ev => ev.EvCalculations.AverageChargingSpeed10100).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageChargingSpeed1080Desc))
            {
                evList = evList.OrderByDescending(ev => ev.EvCalculations.AverageChargingSpeed1080).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageChargingSpeedDesc))
            {
                evList = evList.OrderByDescending(ev => ev.EvCalculations.AverageChargingSpeed).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageSpeed1000kmChallengeDesc))
            {
                evList = evList.OrderByDescending(ev => ev.EvCalculations.AverageSpeed1000kmChallenge).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingTime1000kmChallenge))
            {
                evList = evList.OrderBy(ev => ev.EvCalculations.DriveTime1000kmChallenge).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.TravelSpeed120kmhDesc))
            {
                evList = evList.OrderByDescending(ev => ev.EvCalculations.TravelSpeed120kmh).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.TrunkSizeDesc))
            {
                evList = evList.OrderByDescending(ev => ev.TrunkSize()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.MaxTrunkSizeDesc))
            {
                evList = evList.OrderByDescending(ev => ev.MaxTrunkSize()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.MaxLoadDesc))
            {
                evList = evList.OrderByDescending(ev => ev.MaxLoadKg()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.MaxTrailerSizeDesc))
            {
                evList = evList.OrderByDescending(ev => ev.MaxTrailerSize()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.NominalVoltage))
            {
                evList = evList.OrderByDescending(ev => ev.MaxNominalVoltage()).ToList();
            }
            else
            {
                evList = evList.OrderBy(ev => ev.GetFullName()).ToList();
            }

            return evList;
        }
    }
}
