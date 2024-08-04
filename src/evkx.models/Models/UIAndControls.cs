using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    public class UIAndControls
    {
        public UIAndControls()
        {
            ScreenLayout = new List<ScreenLayout>();
            ScreenLayout.Add(new models.Models.ScreenLayout());
            HeadUpDisplay = new EVFeature();
            VoiceControl = new EVFeature();
            GestureControl = new EVFeature();

        }

        public HMIType HMIType { get; set; }

        public List<ScreenLayout>? ScreenLayout { get; set; }

        public EVFeature? HeadUpDisplay { get; set; }

        public EVFeature? VoiceControl { get; set; }

        public EVFeature? GestureControl { get; set; }

    }
}
