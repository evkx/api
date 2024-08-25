using evdb.models.Models;
using evdb.Models;
using evdb.Services;
using evdb.sitegenerator.Service;
using evkxapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Project;

namespace evkxapi.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("/evcompare")]
    public class EvCompareController : Controller
    {
        private IEv _evService;
        private ITexts _textService;

        public EvCompareController(IEv evService, ITexts texts)
        {
            _evService = evService;
            _textService = texts;
        }

        // GET: EvCompareController
        public async Task<ActionResult> Index([FromQuery] string evs)
        {
            EvCompareViewModel model = new EvCompareViewModel();
            model.Models = await _evService.GetAllEv();
            model.Language = "en";
            model.PageTitle = "EV Compare EVKX.net : ";

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
                    
                    foreach(EV ev in model.Models)
                    {
                        model.PageTitle += ev.GetFullName() + " ";
                    }
                }
            }

            model.Languages = new Dictionary<string, SiteLanguage>();
            model.Languages.Add("en", await _textService.GetSpecText(model.Language));
            
            return View(model);
        }

    }
}
