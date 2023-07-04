using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Chargeport
    {
        public bool? IsStandard { get; set; }

        public string? OptionId { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ChargePortLocation? ChargePortLocation { get; set; }

        public List<ChargePortVariant>? ChargePortVariant { get; set; }

    }
}
