using evdb.models.Models;
using evdb.Models;
using Microsoft.AspNetCore.Components.Web;

namespace evkxapi.Models
{
    public class EvCompareViewModel
    {
        public List<EV>? Models { get; set; }

        public string Language { get; set; }

        public Dictionary<string, SiteLanguage> Languages { get; set; }

        public string PageTitle { get; set; }

        public string GetSpecTitle(string key)
        {

           if (Languages.ContainsKey(Language))
            {
                if (Languages[Language].Texts.ContainsKey(key))
                {
                    return Languages[Language].Texts[key];
                }
            }
            return key;
        }
    }
}
