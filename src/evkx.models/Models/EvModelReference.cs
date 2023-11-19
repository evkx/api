using evdb.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace evdb.models.Models
{
    public class EvModelReference
    {
        private static readonly Regex removeInvalidChars = new Regex($"[{Regex.Escape(new string(Path.GetInvalidFileNameChars()))}]",
RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.CultureInvariant);

        public string? Brand { get; set; }

        public string? Model { get; set; }

        public string? Variant { get; set; }


        public string GetFullModelName()
        {
            return Brand + " " + Variant;
        }

        public string GetEvPath()
        {
            return ("/models/" + SanitizedFileName(Brand.ToLower()) + "/" + SanitizedFileName(Model.ToLower()) + "/" + SanitizedFileName(Variant) + "/").ToLower();
        }

        public string SanitizedFileName(string? fileName, string replacement = "_")
        {
            if (fileName == null)
            {
                return null;
            }

            return removeInvalidChars.Replace(fileName, replacement).Replace(" ", "_").Replace("+", "plus").Replace("#", "hash");
        }
    }
}
