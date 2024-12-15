using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SensorSetup : int
    {
        NotSet,

        Camera,

        CameraRadar,

        CameraUltrasonic,

        CameraRadarLidar,

        CameraRadarUltrasonic,

        CameraRadarLidarUltrasonic,

        CameraLidarUltrasonic,
    }
}
