using evdb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class HVAC
    {
        public HVAC()
        {
            ClimateControlSystems = new List<ClimateControlSystem>();
            ClimateControlSystems.Add(new ClimateControlSystem());
            Heatpump = new EVFeature();
            Preclimatisation = new EVFeature();
            PetMode = new EVFeature();
            CampMode = new EVFeature();
        }

        public List<ClimateControlSystem>? ClimateControlSystems { get; set; }

        public EVFeature? Heatpump { get; set; }

        public EVFeature? Preclimatisation { get; set; }

        public EVFeature? PetMode { get; set; }

        public EVFeature? CampMode { get; set; }
    }
}
