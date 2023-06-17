using evdb.models.Enums;
using evdb.models.Models;
using evdb.Models;
using evkx.models.Models.Search;

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

            if(searchFilter.AllWheelDrive.HasValue && searchFilter.AllWheelDrive.Value
               || searchFilter.FWD.HasValue && searchFilter.FWD.Value
               || searchFilter.RWD.HasValue && searchFilter.RWD.Value)
            {
                List<EV> templist = new List<EV>();

                foreach (EV ev in evlist)
                {
                    if (ev.Drivetrain?.DriveSetup != null)
                    {
                        DriveSetup driveSetup = ev.Drivetrain.DriveSetup.Value;
                        if (searchFilter.FWD.HasValue && searchFilter.FWD.Value && driveSetup.Equals(DriveSetup.OneMotorFrontAxle))
                        {
                            templist.Add(ev);
                        }

                        if (searchFilter.RWD.HasValue && searchFilter.RWD.Value && driveSetup.Equals(DriveSetup.OneMotorRearAxle))
                        {
                            templist.Add(ev);
                        }

                        if (searchFilter.AllWheelDrive.HasValue && searchFilter.AllWheelDrive.Value
                            && (driveSetup.Equals(DriveSetup.OneMotorFrontTwoMotorsRearAxle) || driveSetup.Equals(DriveSetup.OneMotorFrontAndRearAxle)))
                        {
                            templist.Add(ev);
                        }
                    }
                }

                evlist = templist;
            }

            if(searchFilter.RearAxleSteering.HasValue && searchFilter.RearAxleSteering.Value)
            {
                evlist = evlist.Where(ev => ev.Drivetrain != null && ev.Drivetrain.RearWheelSteering != null
                && ev.Drivetrain.RearWheelSteering.Available()).ToList();
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

            if (searchFilter.Colors != null && searchFilter.Colors.Any())
            {
                List<EV> tempList = new List<EV>();
                foreach(EV ev in evlist)
                {

                    foreach (string color in searchFilter.Colors)
                    {
                        if(ev.Exterior != null && ev.Exterior.PaintColors != null && ev.Exterior.PaintColors.FirstOrDefault(s => s.Color != null && s.Color.Equals(color)) != null)
                        {
                            tempList.Add(ev);
                            break;
                        }
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.NightVision != null && searchFilter.NightVision.Value)
            {
                List<EV> tempList = new List<EV>();

                tempList.AddRange(evlist.Where(ev => ev.DriverAssistance?.NightVision != null && ev.DriverAssistance.NightVision.Available()).ToList());
                evlist = tempList;
            }

            if (searchFilter.BlindSpotMonitoring != null && searchFilter.BlindSpotMonitoring.Value)
            {
                List<EV> tempList = new List<EV>();

                tempList.AddRange(evlist.Where(ev => ev.DriverAssistance?.SideAssist != null && ev.DriverAssistance.SideAssist.Available()).ToList());
                evlist = tempList;
            }

            if (searchFilter.RearCrossTrafficAlert != null && searchFilter.RearCrossTrafficAlert.Value)
            {
                List<EV> tempList = new List<EV>();
                tempList.AddRange(evlist.Where(ev => ev.DriverAssistance?.RearCrossTrafficAlert != null && ev.DriverAssistance.RearCrossTrafficAlert.Available()).ToList());
                evlist = tempList;
            }

            if (searchFilter.ExitWarning != null && searchFilter.ExitWarning.Value)
            {
                List<EV> tempList = new List<EV>();
                tempList.AddRange(evlist.Where(ev => ev.DriverAssistance?.ExitWarning != null && ev.DriverAssistance.ExitWarning.Available()).ToList());
                evlist = tempList;
            }

            if (searchFilter.AdaptiveCruiseControl != null && searchFilter.AdaptiveCruiseControl.Value)
            {
                List<EV> tempList = new List<EV>();
               foreach(EV ev in evlist)
                {
                    if (ev.DriverAssistance != null && ev.DriverAssistance.DrivingAutomation != null && ev.DriverAssistance.DrivingAutomation.FirstOrDefault(evs => evs.AdaptiveCruiseControl != null && evs.AdaptiveCruiseControl.Available()) != null)
                    {
                        tempList.Add(ev);
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.AutoSteer != null && searchFilter.AutoSteer.Value)
            {
                List<EV> tempList = new List<EV>();
                foreach (EV ev in evlist)
                {
                    if (ev.DriverAssistance != null && ev.DriverAssistance.DrivingAutomation != null && ev.DriverAssistance.DrivingAutomation.FirstOrDefault(evs => evs.AutoSteer != null && evs.AutoSteer.Available()) != null)
                    {
                        tempList.Add(ev);
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.AutomaticParking != null && searchFilter.AutomaticParking.Value)
            {
                List<EV> tempList = new List<EV>();
                foreach (EV ev in evlist)
                {
                    if (ev.DriverAssistance != null && ev.DriverAssistance.DrivingAutomation != null && ev.DriverAssistance.DrivingAutomation.FirstOrDefault(evs => evs.AutomaticParallelParking != null && evs.AutomaticParallelParking.Available()) != null)
                    {
                        tempList.Add(ev);
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.AdaptiveSuspension != null && searchFilter.AdaptiveSuspension.Value)
            {
                List<EV> tempList = new List<EV>();
                foreach (EV ev in evlist)
                {
                    if (ev.Drivetrain?.Suspension != null && ev.Drivetrain.Suspension.FirstOrDefault(ev2 => ev2.AdaptiveSuspension != null && ev2.AdaptiveSuspension.Available()) != null)
                    {
                        tempList.Add(ev);
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.AirSuspension != null && searchFilter.AirSuspension.Value)
            {
                List<EV> tempList = new List<EV>();
                foreach(EV ev in evlist)
                {
                    if(ev.Drivetrain?.Suspension != null && ev.Drivetrain.Suspension.FirstOrDefault(ev2 => ev2.SuspensionTypeRear.Equals(SuspensionType.AirSuspension)) != null)
                    {
                        tempList.Add(ev);
                    }
                }
              
                evlist = tempList;
            }

            if (searchFilter.InstrumentCluster != null && searchFilter.InstrumentCluster.Value)
            {
                List<EV> tempList = new List<EV>();

                foreach(EV ev in evlist)
                {
                    if(ev.UIAndControls?.ScreenLayout != null)
                    {
                        foreach(ScreenLayout screenLayout in ev.UIAndControls.ScreenLayout)
                        {

                            if (screenLayout.Screens != null && screenLayout.Screens.Any())
                            {
                                foreach(Screen screen in screenLayout.Screens)
                                {
                                    if(screen.Location != null && screen.Location.Equals(ScreenLocation.BehindSteeringWheelInDash))
                                    {
                                        tempList.Add(ev);
                                    }
                                }

                            }
                        }
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.HeadUpDisplay != null && searchFilter.HeadUpDisplay.Value)
            {
                List<EV> tempList = new List<EV>();

                foreach (EV ev in evlist)
                {
                    if (ev.UIAndControls?.HeadUpDisplay != null && ev.UIAndControls.HeadUpDisplay.Available != null && ev.UIAndControls.HeadUpDisplay.Available())
                    {
                        tempList.Add(ev);
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.AndroidAuto != null && searchFilter.AndroidAuto.Value)
            {
                List<EV> tempList = new List<EV>();

                foreach (EV ev in evlist)
                {
                    if (ev.Infotainment != null && ev.Infotainment.AndroidAutoSupport != null && ev.Infotainment.AndroidAutoSupport.Available())
                    {
                        tempList.Add(ev);
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.AppleCarPlay != null && searchFilter.AppleCarPlay.Value)
            {
                List<EV> tempList = new List<EV>();

                foreach (EV ev in evlist)
                {
                    if (ev.Infotainment != null && ev.Infotainment.AppleCarPlaySupport != null && ev.Infotainment.AppleCarPlaySupport.Available())
                    {
                        tempList.Add(ev);
                    }
                }

                evlist = tempList;
            }

            if(searchFilter.LfpChemistry != null && searchFilter.LfpChemistry.Value)
            {
                List<EV> tempList = new List<EV>();

                foreach (EV ev in evlist)
                {
                    if(ev.Drivetrain?.Battery != null)
                    {
                        foreach(Battery bat in ev.Drivetrain.Battery)
                        {
                            if(bat.CellInfo?.CellChemistry != null && bat.CellInfo.CellChemistry.ToLower().Contains("lfp"))
                            {
                                tempList.Add(ev);
                                break;
                            }

                        }
                    }

                  
                }

                evlist = tempList;
            }


            if (searchFilter.BatteryHeatingManual != null && searchFilter.BatteryHeatingManual.Value)
            {
                List<EV> tempList = new List<EV>();

                foreach (EV ev in evlist)
                {
                    if (ev.Drivetrain?.Battery != null)
                    {
                        foreach (Battery bat in ev.Drivetrain.Battery)
                        {
                            if(bat.ManualTriggerHeating != null && bat.ManualTriggerHeating.Available())
                            {
                                tempList.Add(ev);
                                break;
                            }

                        }
                    }
                }

                evlist = tempList;
            }

            if (searchFilter.BatteryHeatingNavigation != null && searchFilter.BatteryHeatingNavigation.Value)
            {
                List<EV> tempList = new List<EV>();

                foreach (EV ev in evlist)
                {
                    if (ev.Drivetrain?.Battery != null)
                    {
                        foreach (Battery bat in ev.Drivetrain.Battery)
                        {
                            if (bat.HeatingWhenNavigateToCharger != null && bat.HeatingWhenNavigateToCharger.Available())
                            {
                                tempList.Add(ev);
                                break;
                            }
                        }
                    }
                }

                evlist = tempList;
            }


            return evlist;
        }
    }
}
