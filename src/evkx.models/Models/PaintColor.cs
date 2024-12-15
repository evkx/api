using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines a paint color option for a car
    /// </summary>
    public class PaintColor
    {
        public PaintColor()
        {
            Name = new Dictionary<string, string>();
        }

        /// <summary>
        /// Color familiy
        /// </summary>
        public Color? Color { get; set; }

        /// <summary>
        /// Paint name. Language support
        /// </summary>
        public Dictionary<string,string>? Name { get; set; }

        /// <summary>
        /// Paint type. Metallic, Pearl, Solid ++
        /// </summary>
        public PaintType? PaintType { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public PaintArea? Area { get; set; }

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

        public string GetName(string language)
        {
            if(Name == null)
            {
                return string.Empty;
            }

            if (Name.ContainsKey(language))
            {
                return Name[language];
            }

            if (Name.ContainsKey("en"))
            {
                return Name["en"];
            }

            if (Name.Count > 0)
            {
                return Name.Values.First();
            }

            return string.Empty;
        }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "PaintColor" };

            if (Color == null || Color == models.Enums.Color.NotSet)
            {
                dataQualityScore.ReduceScore(30,"Color");
            }
            if (Name == null || Name.Count == 0)
            {
                dataQualityScore.ReduceScore(30, "Name");
            }

            if(PaintType == null || PaintType.Equals(models.Enums.PaintType.NotSet))
            {
                dataQualityScore.ReduceScore(30, "PaintType");
            }

            return dataQualityScore;
        }
    }
}
