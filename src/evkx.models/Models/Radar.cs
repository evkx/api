using evdb.models.Enums;

namespace evdb.models.Models
{
    public class Radar
    {
        public Radar() {
            Location = EquipmentLocation.NotSet;
            RadarType = RadarType.NotSet;
        }

        public bool Optional { get; set; }

        public EquipmentLocation Location { get; set; }

        public RadarType RadarType { get; set; }
    }
}