using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    public class Infotainment
    {
        public Infotainment()
        {
            SoundSystems = new List<Soundsystem>();
            SoundSystems.Add(new Soundsystem());
            AndroidAutoSupport = new EVFeature();
            AppleCarPlaySupport = new EVFeature();
            InCarNavigation = new EVFeature();
            PortAndConnections = new List<PortAndConnection>();
            PortAndConnections.Add(new PortAndConnection());
        }

        public List<Soundsystem>? SoundSystems { get; set; }

        public EVFeature? AndroidAutoSupport { get; set; }

        public EVFeature? AppleCarPlaySupport { get; set; }

        public EVFeature? InCarNavigation { get; set; }

        public List<PortAndConnection>? PortAndConnections { get; set; }
    }
}
