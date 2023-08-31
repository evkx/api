using evdb.Models;
using evdb.Services;
using evkxapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace evkxapi.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("/evcompare")]
    public class EvCompareController : Controller
    {
        private IEv _evService;

        public EvCompareController(IEv evService)
        {
            _evService = evService;
        }


        // GET: EvCompareController
        public async Task<ActionResult> Index([FromQuery] string evs)
        {
            EvCompareViewModel model = new EvCompareViewModel();
            model.Models = await _evService.GetAllEv();

            if (!string.IsNullOrEmpty(evs))
            {
                List<EV> tempList = new List<EV>();
                string[] evids = evs.Split(',');

                foreach (string evid in evids)
                {
                    tempList.AddRange(model.Models.Where(e => e.Id.ToString().Contains(evid)));
                }
                
               if(tempList.Count > 0)
                {
                    model.Models = tempList;
                }

            }

            
            return View(model);
        }

    }
}
