using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class PaintColor
    {
        /// <summary>
        /// Color familiy
        /// </summary>
        public string? Color { get; set; }

        /// <summary>
        /// Paint name. Language support
        /// </summary>
        public Dictionary<string,string>? Name { get; set; }

        /// <summary>
        /// Paint type. Metallic, Pearl, Solid ++
        /// </summary>
        public string? PaintType { get; set; }

        /// <summary>
        /// Two tone color
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public PaintColor? TwoTone { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool? StandardPalette { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? ColorId { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? ColorCode { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? SpecialColor { get; set; }
    }
}
