using evdb.models.Enums;

namespace evdb.models.Models
{
    public class UltrasonicSensor
    {
        public UltrasonicSensor() {
            Location = EquipmentLocation.NotSet;
        }

        public bool Optional { get; set; }

        public EquipmentLocation Location { get; set; }

    }
}