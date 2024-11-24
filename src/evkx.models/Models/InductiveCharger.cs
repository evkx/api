using evdb.models.Enums;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines a inductive phone charger in the EV
    /// </summary>
    public class InductiveCharger
    {
        public PortLocation? Location { get; set; }

        public int? MaxPower { get; set; }

        public bool? Optional { get; set; }
    }
}
