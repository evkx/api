using evdb.Models;
using evkx.models.Models.Search;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace evdb.Services
{
    public class EvSiMock : IEv
    {
        public EV Get(string id)
        {
            string evPath = GetEvPath(id);
            if (File.Exists(evPath))
            {
                string content = System.IO.File.ReadAllText(evPath);
                EV? ev = System.Text.Json.JsonSerializer.Deserialize<EV>(content) as EV;
                return ev;
            }

            return null;
        }

        private static string GetEvPath(string id)
        {
            return Path.Combine(GetEvPath(), id + ".json");
        }


        private static string GetEvPath()
        {
            string unitTestFolder = Path.GetDirectoryName(new Uri(typeof(EvSiMock).Assembly.Location).LocalPath);
            return Path.Combine(unitTestFolder, @"..\..\..\Data\Ev");
        }

        public List<EV> Search(EvSearch searc)
        {
            throw new NotImplementedException();
        }

        Task<EvSearchResult> IEv.Search(EvSearch search)
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetBrands()
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetBodyTypes()
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetSeatConfiguration()
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetColors()
        {
            throw new NotImplementedException();
        }

        public void ClearCache()
        {
            throw new NotImplementedException();
        }

        public Task<List<EV>> GetAllEv()
        {
            throw new NotImplementedException();
        }
    }
}
