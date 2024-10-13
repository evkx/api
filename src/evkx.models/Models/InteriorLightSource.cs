using evdb.models.Enums;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the interior light sourcs
    /// </summary>
    public class InteriorLightSource
    {

        public InteriorLightSource() { 
        
            Placement = new List<LightSourcePlacement>();
        }

        /// <summary>
        /// Defines the type of the light source.
        /// </summary>
        public LightSourceType Type { get; set; }

        /// <summary>
        /// Defines the placement of the light source.
        /// </summary>
        public List<LightSourcePlacement> Placement { get; set; }   

        /// <summary>
        /// Defines the color type of the light source.
        /// </summary>
        public LightSourceColorType ColorType { get; set; }


        /// <summary>
        /// Defines if this option is standard.
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool? Optional { get; set; }


        public string GetDescriptionKey()
        {
            string baseKey = "interior.light.";

            if (Type != LightSourceType.NotSet)
            {
                baseKey += Type.ToString().ToLower();
            }

            if (ColorType != LightSourceColorType.NotSet)
            {
                baseKey += "." + ColorType.ToString().ToLower();
            }

            if (Placement.Count > 0)
            {
                foreach (LightSourcePlacement placement in Placement.OrderBy(p => p.ToString()))
                {
                    baseKey += "." + placement.ToString().ToLower();
                }

            }

            if (Optional == true)
            {
                baseKey += ".optional";
            }

            return baseKey;
        }
    }
}
