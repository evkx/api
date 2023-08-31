using evdb.Models;
using evkx.models.Models.Search;

namespace evdb.Services
{
    public interface IEv
    {
        public EV Get(string id);

        public Task<EvSearchResult> Search(EvSearch search);

        public Task<List<string>> GetBrands();

        public Task<List<string>> GetBodyTypes();

        public Task<List<string>> GetSeatConfiguration();

        public Task<List<string>> GetColors();

        public Task<List<EV>> GetAllEv();

        public void ClearCache();
    }
}
