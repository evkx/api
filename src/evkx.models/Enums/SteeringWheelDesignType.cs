using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// The design of the steering wheel
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SteeringWheelDesignType: int
    {
        NotSet,

        Circular,

        CircularFlatBottom,

        CircularFlatBottomTop,

        Yoke,

        Oval,
    }
}
