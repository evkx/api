using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines an airbag in a vehicle.
    /// </summary>
    public class Airbag
    {
        /// <summary>
        /// Defines the type of airbag.
        /// </summary>
        public AirbagType Type { get; set; }

        /// <summary>
        /// Defines the placement of the airbag.
        /// </summary>
        public AirbagPlacement Placement { get; set; }

        /// <summary>
        /// Defines if this option is standard.
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool? Optional { get; set; }

        /// <summary>
        /// Defines if the airbag can be disabled.
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool? CanBeDisabled { get; set; }
    }
}
