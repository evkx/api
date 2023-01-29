using evdb.models.Enums;
using evdb.models.Models;
using evdb.Models;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging.Abstractions;

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

            return evSearchResult;
        }


        private EvSimple MapToSearchResult(EV ev, SortOrder? sortOrder)
        {
            EvSimple evSimple = new EvSimple()
            {
                Name = ev.GetFullName(),
            };

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
            else if (sortOrder.Equals(SortOrder.NetBattery) || sortOrder.Equals(SortOrder.NetBatteryDesc))
            {
                evSimple.SortValue = ev.NetBatterySizeStandardBattery().ToString();
                evSimple.SortParameter = "kWh";
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
