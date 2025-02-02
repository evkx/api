﻿using evdb.Models;
using System;
using System.IO;
using System.Text.Json.Serialization;
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
        /// The ID of the referenced model.
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Guid? Id { get; set; }

        /// <summary>
        /// The brand of the referenced model.
        /// </summary>
        public required string Brand { get; set; }

        /// <summary>
        /// The model of the referenced model.
        /// </summary>
        public required string Model { get; set; }

        /// <summary>
        /// The variant of the referenced model.
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? Variant { get; set; }

        /// <summary>
        /// Legacy version of the model if discontinued and replaced by new
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? LegacyVersion { get; set; }

        public string GetFullModelName()
        {
            return Brand + " " + Variant;
        }

        /// <summary>
        /// Returns the path to the model's folder
        /// </summary>
        /// <returns></returns>
        public string GetEvModelPath()
        {
            return ("/models/" + SanitizedFileName(Brand.ToLower()) + "/" + SanitizedFileName(Model.ToLower()) + "/").ToLower();
        }


        public string GetEvPath()
        {
            if (!string.IsNullOrEmpty(LegacyVersion))
            {
                return ("/models/" + SanitizedFileName(Brand?.ToLower()) + "/" + SanitizedFileName(Model.ToLower()) + "/" + SanitizedFileName(Variant) + "_" + SanitizedFileName(LegacyVersion) + "/").ToLower();
            }

            return ("/models/" + SanitizedFileName(Brand.ToLower()) + "/" + SanitizedFileName(Model.ToLower()) + "/" + SanitizedFileName(Variant) + "/").ToLower();
        }

        private string SanitizedFileName(string? fileName, string replacement = "_")
        {
            if (fileName == null)
            {
                return null;
            }

            return removeInvalidChars.Replace(fileName, replacement).Replace(" ", "_").Replace("+", "plus").Replace("#", "hash").Replace("&", "and");
        }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "EvModelReference" };

            if (string.IsNullOrWhiteSpace(Brand))
            {
                dataQualityScore.ReduceScore(30, "Brand");
            }

            if (string.IsNullOrWhiteSpace(Model))
            {
                dataQualityScore.ReduceScore(30, "Model");
            }

            if(string.IsNullOrWhiteSpace(Variant))
            {
                dataQualityScore.ReduceScore(30, "Variant");
            }

            if(Id == null)
            {
                dataQualityScore.ReduceScore(10, "Id");
            }

            return dataQualityScore;
        }
    }
}
