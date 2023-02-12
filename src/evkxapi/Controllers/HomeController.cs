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

            string cssFile = "test.css";
            string jsFile = "test.js";
            try
            {
                string unitTestFolder = Path.GetDirectoryName(new Uri(typeof(HomeController).Assembly.Location).LocalPath);

                string resourceFolder = Path.Combine(unitTestFolder, "..", "..", "..");

                string[] files = Directory.GetFiles(resourceFolder, "*.*", SearchOption.AllDirectories);

                foreach (string file in files)
                {
                    if (file.EndsWith(".css"))
                    {
                        cssFile = Path.GetFileName(file);
                    }

                    if (file.EndsWith(".js"))
                    {
                        jsFile = Path.GetFileName(file);
                    }
                }

                ViewBag.CssFile = cssFile;
                ViewBag.JsFile = jsFile;
                return View(ViewBag);
            }
            catch(Exception ex)
            {
                return Content(ex.ToString());
            }
        }
    }
}
