using evdb.models.Enums;
using evdb.models.Models;
using evdb.Models;

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
            else
            {
                evList = evList.OrderBy(ev => ev.GetFullName()).ToList();
            }

            return evList;
        }
    }
}
