using evdb.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace evkxapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvSpecController : ControllerBase
    {
        [HttpGet("{id}")]
        public ActionResult<EV> Get(Guid id)
        {
            return Ok(new EV());
        }
    }
}
