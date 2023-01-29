using evdb.models.Models;
using evdb.Models;

namespace evdb.Services
{
    public interface IEv
    {
        public EV Get(string id);

        public Task<EvSearchResult> Search(EvSearch search);

        public Task<List<string>> GetBrands();
    }
}
