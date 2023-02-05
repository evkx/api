using evdb.Models;
using evdb.Services;
using evkx.models.Models.Search;
using Microsoft.ApplicationInsights.WindowsServer;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace evdb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvController : ControllerBase
    {

        private IEv _evService;

        public EvController(IEv evService)
        {
            _evService = evService;
        }


        [HttpPost]
        public async Task<EvSearchResult> Search([FromBody] EvSearch search)
        {
            EvSearchResult result = await _evService.Search(search);

            return result;
        }

        [HttpGet("/api/searchoptions")]
        public async Task<EvSearchOptions> SearchOptions()
        {
            EvSearchOptions searchOptions = new EvSearchOptions();
            searchOptions.Brands = await _evService.GetBrands();
            searchOptions.BodyTypes = await _evService.GetBodyTypes();
            searchOptions.SeatConfiguration = await _evService.GetSeatConfiguration();
            return searchOptions;
        }
    }
}
