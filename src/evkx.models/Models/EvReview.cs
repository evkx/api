using evdb.models.Enums;
using System;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class EvReview
    {
        public string? MediaId { get; set; }

        public string? Reviewer { get; set; }

        public string? Title { get; set; }

        public DateTime Published { get; set; }

        public string? Language { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ReviewPlatform? ReviewPlatform { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public EvSummary? EvSummary { get; set; }

    }
}
