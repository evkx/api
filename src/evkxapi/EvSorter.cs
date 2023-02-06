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
                evList = evList.OrderByDescending(ev => ev.PowerDesc()).ToList();
            }
            else
            {
                evList = evList.OrderBy(ev => ev.GetFullName()).ToList();
            }

            return evList;
        }
    }
}
