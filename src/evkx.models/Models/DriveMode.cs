using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace evdb.models.Models
{
    public class DriveMode
    {
        public Dictionary<string,string>? Name { get; set; }

        public DriveModeSteeringResponse? SteeringResponse { get; set; }

        public DriveModeThrottleResponse? ThrottleResponse { get; set; }

        public DriveModeSuspensionMode? SuspensionMode { get; set; }

        public DriveModeSuspensionHeight? SuspensionHeight { get; set;}
    }
}
