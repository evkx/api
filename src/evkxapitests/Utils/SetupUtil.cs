using System.Net.Http;
using Altinn.App.IntegrationTests;
using evdb.Controllers;
using evdb.Services;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;

namespace App.IntegrationTests.Utils
{
    public static class SetupUtil
    {
        public static HttpClient GetTestClient(
            CustomWebApplicationFactory<EvController> customFactory)
        {
            WebApplicationFactory<EvController> factory = customFactory.WithWebHostBuilder(builder =>
            {
                builder.ConfigureTestServices(services =>
                {
                    // services.AddSingleton<IEv, EvSiMock>();
                });
            });
            factory.Server.AllowSynchronousIO = true;
            return factory.CreateClient();
        }

    }
}
