using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines the type of airbag.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum AirbagType
    {
        NotSet,
        Front,
        Side,
        Curtain,
        Knee,
        Seatbelt,
        FrontCenter,
    }
}
