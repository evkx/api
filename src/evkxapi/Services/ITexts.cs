using evdb.models.Models;
using evdb.Models;

namespace evdb.sitegenerator.Service
{
    public interface ITexts
    {

        Task<SiteLanguage?> GetSpecText(string language);

        Task<SiteLanguage?> GetSpecLinks(string language);
    }
}