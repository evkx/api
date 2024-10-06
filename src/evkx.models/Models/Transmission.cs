using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the transmission of a vehicle.
    /// </summary>
    public class Transmission
    {
        /// <summary>
        /// The number of gears in the transmission.
        /// </summary>
        public int? Gears { get; set; }

        /// <summary>
        /// Which axle the transmission is connected to.
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? Axle { get; set; }    
    }
}
