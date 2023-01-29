using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class Headlight
    {
        public Dictionary<string,string>? Name { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public LightTechnology? LightTechnology { get; set; }

        public bool? Adaptive { get; set; }

        public string? OptionId { get; set; }

        public bool? Standard { get; set; }

        public string? FeatureDescription { get; set; }

        public string? GetName(string language = "en")
        {
            if (Name != null && Name.ContainsKey(language))
            {
                return Name[language];
            }

            return null;
        }

    }
}
