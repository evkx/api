using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Regen
    {
        public int? MaxRegenKw { get; set; }

        public bool? OnePedalDriving { get; set; }

        public bool? Coasting { get; set; }

        public bool? AdaptiveRegen { get; set; }

        public bool? RegenPaddles { get; set; }

    }
}
