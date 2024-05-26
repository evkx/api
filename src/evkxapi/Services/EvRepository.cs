using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using evdb.Config;
using evdb.Models;
using Microsoft.Extensions.Options;

namespace evdb.Services
{
    public class EvRepository : IEvRepository
    {

        private readonly EvkxConfig _config;

        public EvRepository(IOptions<EvkxConfig> evkxConfig)
        {
            _config = evkxConfig.Value;
        }

        public async Task<List<EV>> GetAllEv()
        {
            List<EV> evList = new List<EV>();
            List<string> specs = await ListFiles();

            foreach (string specPath in specs)
            {
                Stream specStream = await DownloadBlobAsync(specPath);
                try
                {
                    EV? evModel = await System.Text.Json.JsonSerializer.DeserializeAsync<EV>(specStream);
                    if (evModel != null  && !string.IsNullOrWhiteSpace(evModel.Brand?.Name) && evModel.ModelInfo?.Name != null && (evModel.ModelInfo.Ignore == null || !evModel.ModelInfo.Ignore.Value))
                    {
                        evList.Add(evModel);
                    }
                    else
                    {
                        Console.WriteLine(specPath);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
             }


            return evList;
        }


        private async Task<bool> Exist(string path)
        {
            BlobClient blockBlob = CreateBlobClient(path);
            return await blockBlob.ExistsAsync();
        }


        private async Task<List<string>> ListFiles()
        {
            List<string> specPaths = new List<string>();
            BlobContainerClient blobContainerClient = CreateBlobContainerClient();

            var resultSegment = blobContainerClient.GetBlobsAsync().AsPages(default, 10);

            await foreach (Azure.Page<BlobItem> blobPage in resultSegment)
            {
                foreach (BlobItem blobItem in blobPage.Values)
                {
                    if(blobItem.Name.Equals("allmodels.json") || blobItem.Name.EndsWith("model.json") || blobItem.Name.Contains("brand.json"))
                    {
                        continue;
                    }

                    specPaths.Add(blobItem.Name);
                }
            }

            return specPaths;
        }


        public async Task<Stream> DownloadBlobAsync(string fileName)
        {
            BlobClient blockBlob = CreateBlobClient(fileName);

            Azure.Response<BlobDownloadInfo> response = await blockBlob.DownloadAsync();

            return response.Value.Content;
        }


        private BlobClient CreateBlobClient(string blobName)
        {
            string accountName = "evkx";
            string containerName = "evspec";

            UriBuilder fullUri = new UriBuilder
            {
                Scheme = "https",
                Host = $"{accountName}.blob.core.windows.net",
                Path = $"{containerName}/{blobName}",
                Query = _config.EvStoreConnection
            };

            return new BlobClient(fullUri.Uri);
        }


        private BlobContainerClient CreateBlobContainerClient()
        {
            string accountName = "evkx";
            string containerName = "evspec";

            UriBuilder fullUri = new UriBuilder
            {
                Scheme = "https",
                Host = $"{accountName}.blob.core.windows.net",
                Path = $"{containerName}",
                Query = _config.EvStoreConnection
            };

            return new BlobContainerClient(fullUri.Uri);
        }
    }
}
