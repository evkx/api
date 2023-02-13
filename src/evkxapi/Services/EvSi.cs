using evdb.models.Enums;
using evdb.models.Models;
using evdb.Models;
using evkx.models.Models.Search;
using Microsoft.Extensions.Caching.Memory;

namespace evdb.Services
{
    public class EvSi : IEv
    {
        private IEvRepository _evRepository;
        private readonly IMemoryCache _memoryCache;

        public EvSi(IEvRepository evRepository, IMemoryCache memoryCache)
        {
            _evRepository = evRepository;
            _memoryCache = memoryCache;
        }

        public EV Get(string id)
        {
            return new EV() { Brand = new Brand() { Name = "Audi" } };
        }


        public async Task<EvSearchResult> Search(EvSearch search)
        {
            List<EV> evs = await GetAllEv();           
            EvSearchResult evSearchResult = new EvSearchResult();
            evSearchResult.Evs = new List<EvSimple>();
            evs = EvFilter.Filter(evs, search);
            evs = EvSorter.Sort(evs, search);
            foreach (EV ev in evs)
            {
                evSearchResult.Evs.Add(MapToSearchResult(ev, search.SortOrder));
            }

            evSearchResult.Count = evSearchResult.Evs.Count();
            return evSearchResult;
        }


        private EvSimple MapToSearchResult(EV ev, SortOrder? sortOrder)
        {
            EvSimple evSimple = new EvSimple()
            {
                Name = ev.GetFullName(),
                InfoUri = "https://evkx.net" + ev.GetEvPath() ,
            };

            if(ev.Drivetrain?.Performance != null && ev.Drivetrain.Performance.Count > 0)
            {
                foreach(var performance in ev.Drivetrain.Performance)
                {
                    if (evSimple?.MaxPowerKw == null || evSimple.MaxPowerKw < performance.PowerKw)
                    {
                        evSimple.MaxPowerKw = performance.PowerKw;
                    }

                    if (evSimple.TopSpeedKph == null || evSimple.TopSpeedKph < performance.TopSpeed)
                    {
                        evSimple.TopSpeedKph = performance.TopSpeed;
                    }

                    if (evSimple.ZeroTo100 == null || evSimple.ZeroTo100 > performance.ZeroToHundredKph)
                    {
                        evSimple.ZeroTo100 = performance.ZeroToHundredKph;
                        if(performance.ZeroToHundredKphBoost != null && performance.ZeroToHundredKphBoost > evSimple.ZeroTo100)
                        {
                            evSimple.ZeroTo100 = performance.ZeroToHundredKphBoost;
                        }
                    }
                }

            }

            evSimple.NetBattery = ev.NetBatterySizeStandardBattery();
            evSimple.WltpConsumption = decimal.Round(ev.GetBasicTrimWltpConsumptionReal().Value, 2, MidpointRounding.AwayFromZero);
            evSimple.WltpRange = ev.MinimumWltpRangeBasicTrim();

            if (sortOrder == null)
            {

            }
            else if (sortOrder.Equals(SortOrder.RangeMinimumWltp))
            {
                evSimple.SortValue = ev.MinimumWltpRangeBasicTrim().ToString();
                evSimple.SortParameter = "km";
            }
            else if (sortOrder.Equals(SortOrder.WltpBasicConsumption))
            {
                evSimple.SortValue = ev.WltpConsumptionBasicTrim().ToString();
                evSimple.SortParameter = "kWh/100km";
            }
            else if (sortOrder.Equals(SortOrder.TopSpeedDesc))
            {
                evSimple.SortValue = ev.TopSpeed().ToString();
                evSimple.SortParameter = "kp/h";
            }
            else if (sortOrder.Equals(SortOrder.PowerDesc))
            {
                evSimple.SortValue = ev.Power().ToString();
                evSimple.SortParameter = "kW";
            }
            else if (sortOrder.Equals(SortOrder.MaxDCCharging))
            {
                evSimple.SortValue = ev.MaxDCCharging().ToString();
                evSimple.SortParameter = "kW";
            }
            else if (sortOrder.Equals(SortOrder.NetBattery) || sortOrder.Equals(SortOrder.NetBatteryDesc))
            {
                evSimple.SortValue = ev.NetBatterySizeStandardBattery().ToString();
                evSimple.SortParameter = "kWh";
            }
            else if (sortOrder.Equals(SortOrder.ZeroTo100))
            {
                evSimple.SortValue =ev.GetZeroTo100().ToString();
                evSimple.SortParameter = "s";
            }
            else if (sortOrder.Equals(SortOrder.NominalVoltage))
            {
                evSimple.SortValue = "";
                evSimple.SortParameter = "Volt";
            }
            else
            {
                evSimple.SortValue = String.Empty;
                evSimple.SortParameter = String.Empty;
            }
            return evSimple;
        }

        public async Task<List<string>> GetBrands()
        {
            string cacheKey = "brands";

            List<string> brands;

            if (!_memoryCache.TryGetValue(cacheKey, out brands))
            {
                List<EV> evs = await GetAllEv();
                brands = new List<string>();

                foreach(EV ev in evs)
                {
                    if(ev?.Brand?.Name != null && !brands.Exists(e=> e.Equals(ev.Brand.Name.ToString())))
                    {
                        brands.Add(ev.Brand.Name.ToString());
                    }
                }

                List<string> sortedBrands = brands.OrderBy(e => e).ToList();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
               .SetPriority(CacheItemPriority.High)
               .SetAbsoluteExpiration(new TimeSpan(0, 5, 0, 0));

                // Disable caching unil we figure ou how to handle K6 tests
                _memoryCache.Set(cacheKey, sortedBrands, cacheEntryOptions);
                return sortedBrands;
            }

            return brands;
        }

        public async Task<List<string>> GetBodyTypes()
        {
            List<string> evTypes;
            string cacheKey = "evtypes";

            if (!_memoryCache.TryGetValue(cacheKey, out evTypes))
            {
                List<EV> evs = await GetAllEv();
                evTypes = new List<string>();

                foreach (EV ev in evs)
                {
                    if (ev?.ModelInfo?.BodyType != null && !evTypes.Exists(e => e.Equals(ev.ModelInfo.BodyType.ToString())))
                    {
                        evTypes.Add(ev.ModelInfo.BodyType.ToString());
                    }
                }

                List<string> sortedBodyTypes = evTypes.OrderBy(e => e).ToList();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
               .SetPriority(CacheItemPriority.High)
               .SetAbsoluteExpiration(new TimeSpan(0, 5, 0, 0));

                // Disable caching unil we figure ou how to handle K6 tests
                _memoryCache.Set(cacheKey, sortedBodyTypes, cacheEntryOptions);
                return sortedBodyTypes;
            }

            return evTypes;
        }

        public async Task<List<string>> GetSeatConfiguration()
        {
            List<string> seatConfiguration;
            string cacheKey = "seatconfiguration";

            if (!_memoryCache.TryGetValue(cacheKey, out seatConfiguration))
            {
                List<EV> evs = await GetAllEv();
                seatConfiguration = new List<string>();

                foreach (EV ev in evs)
                {
                    if (ev?.Interior?.SeatLayout != null && ev.Interior.SeatLayout.Any())
                    {
                        foreach(SeatLayout layout in ev.Interior.SeatLayout)
                        {
                            if(layout.NumberOfSeats.HasValue && !seatConfiguration.Exists(s=> s.Equals(layout.NumberOfSeats.Value.ToString())))
                            { 
                                seatConfiguration.Add(layout.NumberOfSeats.Value.ToString());
                            }
                        }

                    }
                }

                List<string> sortedSeatConfig = seatConfiguration.OrderBy(e => e).ToList();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
               .SetPriority(CacheItemPriority.High)
               .SetAbsoluteExpiration(new TimeSpan(0, 5, 0, 0));

                // Disable caching unil we figure ou how to handle K6 tests
                _memoryCache.Set(cacheKey, sortedSeatConfig, cacheEntryOptions);
                return sortedSeatConfig;
            }

            return seatConfiguration;
        }

        public async Task<List<string>> GetColors()
        {
            List<string> colors;
            string cacheKey = "evcolors";

            if (!_memoryCache.TryGetValue(cacheKey, out colors))
            {
                List<EV> evs = await GetAllEv();
                colors = new List<string>();

                foreach (EV ev in evs)
                {
                    if (ev?.Exterior?.PaintColors != null && ev.Exterior.PaintColors.Any())
                    {
                        foreach (PaintColor color in ev.Exterior.PaintColors)
                        {
                            if (!string.IsNullOrEmpty(color.Color) && !colors.Exists(s=> s.Equals(color.Color)))
                            {
                                colors.Add(color.Color);
                            }
                        }

                    }
                }

                List<string> sortedColors = colors.OrderBy(e => e).ToList();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
               .SetPriority(CacheItemPriority.High)
               .SetAbsoluteExpiration(new TimeSpan(0, 5, 0, 0));

                // Disable caching unil we figure ou how to handle K6 tests
                _memoryCache.Set(cacheKey, sortedColors, cacheEntryOptions);
                return sortedColors;
            }

            return colors;
        }

        private async Task<List<EV>> GetAllEv()
        {
            List<EV> evs = new List<EV>();
            string cacheKey = "allev";

            if (!_memoryCache.TryGetValue(cacheKey, out evs))
            {
                // Key not in cache, so get data.
                evs = await _evRepository.GetAllEv();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
               .SetPriority(CacheItemPriority.High)
               .SetAbsoluteExpiration(new TimeSpan(0, 5, 0, 0));

                // Disable caching unil we figure ou how to handle K6 tests
                _memoryCache.Set(cacheKey, evs, cacheEntryOptions);
            }

            return evs;
        }


    }
}
