using System;
using System.IO;
using System.Text.RegularExpressions;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines a reference to a specific model of an electric vehicle.
    /// </summary>
    public class EvModelReference
    {
        private static readonly Regex removeInvalidChars = new Regex($"[{Regex.Escape(new string(Path.GetInvalidFileNameChars()))}]",
RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.CultureInvariant);

        /// <summary>
        /// The brand of the referenced model.
        /// </summary>
        public string? Brand { get; set; }

        /// <summary>
        /// The model of the referenced model.
        /// </summary>
        public string? Model { get; set; }

        /// <summary>
        /// The variant of the referenced model.
        /// </summary>
        public string? Variant { get; set; }

        /// <summary>
        /// The ID of the referenced model.
        /// </summary>
        public Guid? Id { get; set; }

        public string GetFullModelName()
        {
            return Brand + " " + Variant;
        }

        public string GetEvPath()
        {
            return ("/models/" + SanitizedFileName(Brand.ToLower()) + "/" + SanitizedFileName(Model.ToLower()) + "/" + SanitizedFileName(Variant) + "/").ToLower();
        }

        private string SanitizedFileName(string? fileName, string replacement = "_")
        {
            if (fileName == null)
            {
                return null;
            }

            return removeInvalidChars.Replace(fileName, replacement).Replace(" ", "_").Replace("+", "plus").Replace("#", "hash");
        }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "EvModelReference" };

            if (string.IsNullOrWhiteSpace(Brand))
            {
                dataQualityScore.ReduceScore(1000, "Brand");
            }

            if (string.IsNullOrWhiteSpace(Model))
            {
                dataQualityScore.ReduceScore(1000,"Model");
            }

            if(string.IsNullOrWhiteSpace(Variant))
            {
                dataQualityScore.ReduceScore(1000,"Variant");
            }

            if(Id == null)
            {
                dataQualityScore.ReduceScore(10, "Id");
            }

            return dataQualityScore;
        }
    }
}
