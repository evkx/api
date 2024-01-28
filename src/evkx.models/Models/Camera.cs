using evdb.models.Enums;
using evdb.Models;

namespace evdb.models.Models
{
    public class Camera
    {
        public bool Optional { get; set; }

        public EquipmentLocation Location { get; set; } 

        public CameraType CameraType { get; set; }

        public bool Washer { get; set; }
    }
}