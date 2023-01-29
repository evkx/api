using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum DriveSetup: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "OneMotorRearAxle")]
        OneMotorRearAxle = 1,

        [EnumMember(Value = "OneMotorFrontAxle")]
        OneMotorFrontAxle = 2,

        [EnumMember(Value = "OneMotorFrontAndRearAxle")]
        OneMotorFrontAndRearAxle = 3,

        [EnumMember(Value = "OneMotorFrontTwoMotorsRearAxle")]
        OneMotorFrontTwoMotorsRearAxle = 4,

        [EnumMember(Value = "TwoMotorsFrontAndRearAxle")]
        TwoMotorsFrontAndRearAxle = 5,
    }
}
