using Microsoft.AspNetCore.Mvc;

namespace evdb.Controllers
{
    [Route("/")]
    [Route("/evsearch")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}
