using evdb.models.Config;
using evdb.models.Models;
using evdb.Models;
using Microsoft.Extensions.Caching.Memory;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace evdb.sitegenerator.Service
{
    public class TextsSi: ITexts
    {
        private readonly string textRepo;
        private readonly IMemoryCache _memoryCache;

        private static Dictionary<string, SiteLanguage> _standardTexts = new Dictionary<string, SiteLanguage>();

        private static readonly Regex removeInvalidChars = new Regex($"[{Regex.Escape(new string(Path.GetInvalidFileNameChars()))}]",
          RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.CultureInvariant);

        public TextsSi(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public async Task<SiteLanguage?> GetSpecText(string language)
        {
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string jsonFilePath = Path.Combine(basePath, "data.json");


            SiteLanguage? texts = await GetText(Path.Combine(basePath, $"specification.{language}.json"));
            return texts;
        }

        public async Task<SiteLanguage?> GetSpecLinks(string language)
        {
            SiteLanguage? texts = await GetText(Path.Combine(textRepo, $"links.{language}.json"));
            return texts;
        }

        private async Task<SiteLanguage?> GetText(string textDictionaryPath)
        {
            string cacheKey = textDictionaryPath;
            SiteLanguage? text;
            if (!_memoryCache.TryGetValue(cacheKey, out text))
            {

                if (File.Exists(textDictionaryPath))
                {

                    using (FileStream stream = File.OpenRead(textDictionaryPath))
                    {
                        using (var md5 = MD5.Create())
                        {
                            Dictionary<string, string>? texts = await JsonSerializer.DeserializeAsync<Dictionary<string, string>>(stream);

                            if (texts == null)
                            {
                                return null;
                            }

                            stream.Seek(0, SeekOrigin.Begin);

                            // Calculate MD5 hash from the file stream

                            var hash = md5.ComputeHash(stream);
                            var base64String = Convert.ToBase64String(hash);

                            SiteLanguage langaugeText = new SiteLanguage(texts, base64String);

                            var cacheEntryOptions = new MemoryCacheEntryOptions()
                            .SetPriority(CacheItemPriority.High)
                            .SetAbsoluteExpiration(new TimeSpan(5, 0, 0, 0));
                            _memoryCache.Set(cacheKey, langaugeText, cacheEntryOptions);
                            return langaugeText;
                        }
                    }
                }
            }

            return text;


        }

        public static string SanitizedFileName(string fileName, string replacement = "_")
        {
            return removeInvalidChars.Replace(fileName, replacement).Replace(" ", "_");
        }
    }
    
}
