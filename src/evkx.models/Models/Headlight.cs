using evdb.models.Enums;
using evdb.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class Headlight
    {
        public bool? Standard { get; set; }

        public Dictionary<string,string>? Name { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public LightTechnology? LightTechnology { get; set; }
        
        public EVFeature? AutoDimming { get; set; }

        public EVFeature? CorneringLight { get; set; }

        public EVFeature? HeadlightWasher { get; set; }

        public EVFeature? DRLLightSignatures { get; set; }

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
