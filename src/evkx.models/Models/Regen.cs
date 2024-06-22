using evdb.models.Enums;
using System.Collections.Generic;

namespace evdb.models.Models
{
    public class Regen
    {
        public int? MaxRegenKw { get; set; }

        public bool? LiftUpRegen { get; set; }

        public bool? Coasting { get; set; }

        public bool? AdaptiveRegen { get; set; }

        public bool? RegenPaddles { get; set; }

        public OnePedalStoppingMode? OnePedalStoppingMode { get; set; }

        public List<string>? LiftOfRegenLevels { get; set; }

        public bool? BlendedBraks { get; set; }

        public bool? BlendingBrakeOnLiftUpRegen { get; set; }
    }
}
