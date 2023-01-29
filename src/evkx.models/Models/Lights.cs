using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Lights
    {
        public Lights()
        {
            Headlights = new List<Headlight>();
            Headlights.Add(new Headlight());
            Taillights = new List<Taillight>();
            Taillights.Add(new Taillight());
        }

        public List<Headlight>? Headlights { get; set; }

        public List<Taillight>? Taillights { get; set; }
       
    }
}
