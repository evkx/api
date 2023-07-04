using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    public class ChargePortVariant
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Region? Region { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SubRegion? SubRegion { get; set; }


        public List<Country>? Country { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ChargePortConnector? ChargePortType { get; set; }
    }
}
