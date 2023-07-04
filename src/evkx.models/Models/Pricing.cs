using evdb.models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Pricing
    {
        public decimal StartPrice { get; set; }

        public Currency Currency { get; set; }

        public Country Country { get; set; }
    }
}
