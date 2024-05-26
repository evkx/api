using System.Collections.Generic;

namespace evdb.models.Models
{
    public class SiteLanguage
    {
        public SiteLanguage(Dictionary<string,string> texts, string Md5Hash) {
            this.Texts = texts;
            this.Md5Hash = Md5Hash;
        }   

        public Dictionary<string, string> Texts { get; set; }


        public string Md5Hash { get; set; } 
    }
}
