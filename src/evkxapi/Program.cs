using evdb.Config;
using evdb.Services;
using System.Text.Json;
using System.Text.Json.Serialization;

ILogger logger;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

ConfigureSetupLogging();
ConfigureLogging(builder.Logging);
ConfigureServices(builder.Services, builder.Configuration);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddApplicationInsightsTelemetry(builder.Configuration["APPLICATIONINSIGHTS_CONNECTION_STRING"]);


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
        });
});

var app = builder.Build();

app.UseCors();
// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseStaticFiles();


app.Run();


void ConfigureServices(IServiceCollection services, IConfiguration config)
{
    logger.LogInformation("Program // ConfigureServices");

    services.AddControllersWithViews().AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.WriteIndented = true;
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    });

    services.AddMvc();
    services.AddMemoryCache();

    services.AddSingleton<IEv, EvSi>();
    services.AddSingleton<IEvRepository, EvRepository>();

    services.Configure<EvkxConfig>(config.GetSection("EvkxConfig"));
}


void ConfigureSetupLogging()
{
    var logFactory = LoggerFactory.Create(builder =>
    {
        builder
            .AddFilter("Altinn.Platform.Register.Program", LogLevel.Debug)
            .AddConsole();
    });

    logger = logFactory.CreateLogger<Program>();
}

void ConfigureLogging(ILoggingBuilder logging)
{
    // The default ASP.NET Core project templates call CreateDefaultBuilder, which adds the following logging providers:
    // Console, Debug, EventSource
    // https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-3.1

    // Clear log providers
    logging.ClearProviders();

    // If not application insight is available log to console
    logging.AddFilter("Microsoft", LogLevel.Warning);
    logging.AddFilter("System", LogLevel.Warning);
    logging.AddConsole();
}
