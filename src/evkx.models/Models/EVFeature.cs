using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class EVFeature
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public FeatureStatus FeatureStatus { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? OptionId { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? FeatureName { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? FeatureVersion { get; set; }

        public bool Available()
        {
            if(FeatureStatus.Equals(FeatureStatus.Standard) || FeatureStatus.Equals(FeatureStatus.Optional))
            {
                return true;
            }

            return false;
        }

    }
}
