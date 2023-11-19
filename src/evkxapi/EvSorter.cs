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
                evList = evList.OrderByDescending(ev => ev.Calculations[0].AverageChargingSpeed10100).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageChargingSpeed1080Desc))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].AverageChargingSpeed1080).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageChargingSpeedDesc))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].AverageChargingSpeed).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageSpeed1000kmChallengeDesc))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].AverageSpeed1000kmChallenge).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingTime1000kmChallenge))
            {
                evList = evList.OrderBy(ev => ev.Calculations[0].DriveTime1000kmChallenge).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.TravelSpeed120kmhDesc))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].TravelSpeed120kmh).ToList();
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
            else if (evSearch.SortOrder.Equals(SortOrder.MaxGroundClearanceDesc))
            {
                evList = evList.OrderByDescending(ev => ev.MaxGroundClearance()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.MinGroundClearance))
            {
                evList = evList.OrderBy(ev => ev.MinGroundClearance()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.SuspensionHeightAdjustment))
            {
                evList = evList.OrderByDescending(ev => ev.SuspensionAdjustment()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.Length))
            {
                evList = evList.OrderByDescending(ev => ev.Length()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.Wheelbase))
            {
                evList = evList.OrderByDescending(ev => ev.Wheelbase()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.WeightUnladenDINKg))
            {
                evList = evList.OrderByDescending(ev => ev.WeightUnladenDINKg()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.WeightUnladenDINKg))
            {
                evList = evList.OrderByDescending(ev => ev.WeightUnladenDINKg()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.EnergyCharged10Percent10Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent10minutes).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.EnergyCharged10Percent15Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent15Minutes).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.EnergyCharged10Percent20Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent20minutes).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.EnergyCharged10Percent25Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent25minutes).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.EnergyCharged10Percent30Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent30minutes).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistanceWltpCharged10Percent10Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent10minutes/ev.GetBasicTrimWltpConsumptionReal()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistanceWltpCharged10Percent15Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent15Minutes / ev.GetBasicTrimWltpConsumptionReal()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistanceWltpCharged10Percent20Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent20minutes / ev.GetBasicTrimWltpConsumptionReal()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistanceWltpCharged10Percent25Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent25minutes / ev.GetBasicTrimWltpConsumptionReal()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistanceWltpCharged10Percent30Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent30minutes / ev.GetBasicTrimWltpConsumptionReal()).ToList();
            }

            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistance120kmhCharged10Percent10Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent10minutes / ev.GetConsumption120()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistance120kmhCharged10Percent15Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent15Minutes / ev.GetConsumption120()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistance120kmhCharged10Percent20Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent20minutes / ev.GetConsumption120()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistance120kmhCharged10Percent25Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent25minutes / ev.GetConsumption120()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.DrivingDistance120kmhCharged10Percent30Min))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations[0].EnergyChargedFrom10Percent30minutes / ev.GetConsumption120()).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.MaxCRating))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations.OrderByDescending(ev2 => ev2.MaxCRating).ToList()[0].MaxCRating).ToList();
            }
            else if (evSearch.SortOrder.Equals(SortOrder.AverageCRating))
            {
                evList = evList.OrderByDescending(ev => ev.Calculations.OrderByDescending(ev2 => ev2.AverageCRating).ToList()[0].AverageCRating).ToList();
            }
            else
            {
                evList = evList.OrderBy(ev => ev.GetFullName()).ToList();
            }

            return evList;
        }
    }
}
