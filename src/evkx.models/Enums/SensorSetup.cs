using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SensorSetup : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "CameraOnly")]
        Camera = 1,

        [EnumMember(Value = "CameraRadar")]
        CameraRadar = 2,

        [EnumMember(Value = "CameraRadarLidar")]
        CameraRadarLidar = 3,

        [EnumMember(Value = "CameraRadarUltrasonic")]
        CameraRadarUltrasonic = 4,

        [EnumMember(Value = "CameraRadarLidarUltrasonic")]
        CameraRadarLidarUltrasonic = 5,

        [EnumMember(Value = "CameraLidarUltrasonic")]
        CameraLidarUltrasonic = 6,
    }
}
