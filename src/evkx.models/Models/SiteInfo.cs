using System.Collections.Generic;

namespace evdb.models.Models
{
    public class SiteInfo
    {
        public SiteInfo(List<EvSummary> allModels) 
        {
            this.AllModels = allModels;
            LanguageHash = new Dictionary<string, string>();
        }

        public List<EvSummary> AllModels { get; set; }

        public Dictionary<string,string> LanguageHash { get; set; } 

        public bool? ForceGeneration { get; set; }  
    }
}
