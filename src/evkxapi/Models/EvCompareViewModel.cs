using evdb.models.Models;
using evdb.Models;

namespace evkxapi.Models
{
    public class EvCompareViewModel
    {
        public List<EV>? Models { get; set; }

        public string Language { get; set; }

        public Dictionary<string, SiteLanguage> Languages { get; set; }

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
