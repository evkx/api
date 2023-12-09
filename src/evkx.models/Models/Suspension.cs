using evdb.models.Enums;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Suspension
    {

        public Suspension()
        {
            AdaptiveSuspension = new EVFeature();
            AdjustableDampingFront = new EVFeature();
            AdjustableDampingRear = new EVFeature();
            AdjustableHeightFront = new EVFeature();
            AdjustableHeightRear = new EVFeature();
        }
        public string? Name { get; set; }

        public int? MaxGroundClearanceMM { get; set; }

        public int? MinGroundClearanceMM { get; set; }

        public EVFeature? AdaptiveSuspension { get; set; }

        public EVFeature? AdjustableDampingFront { get; set; }

        public EVFeature? AdjustableDampingRear { get; set; }

        public EVFeature? AdjustableHeightFront { get; set; }

        public EVFeature? AdjustableHeightRear { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SpringType? SpringTypeFront { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SpringType? SpringTypeRear { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DamperType? DamperTypeFront { get;set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DamperType? DamperTypeRear { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SuspensionType? SuspensionTypeFront { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SuspensionType? SuspensionTypeRear { get; set; }

        public string? OptionId { get; set; }

        public bool? Standard { get; set; }

    }
}
