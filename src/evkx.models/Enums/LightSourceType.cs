using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines the type of light source in an EV.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum LightSourceType
    {
        NotSet,
        /// <summary>
        /// Ambient light source.
        /// </summary>
        Ambient,
        /// <summary>
        /// Contour light source.
        /// </summary>
        Contour,
        /// <summary>
        /// Footwell light source.
        /// </summary>
        Footwell,
        /// <summary>
        /// Reading light source.
        /// </summary>
        Reading, 
    }
}
