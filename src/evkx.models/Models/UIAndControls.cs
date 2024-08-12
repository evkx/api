using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    /// <summary>
    /// Defines the User interface and controls of an EV
    /// </summary>
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

        /// <summary>
        /// Defines the HMI type
        /// </summary>
        public HMIType HMIType { get; set; }

        /// <summary>
        /// Defines the screen layout
        /// </summary>
        public List<ScreenLayout>? ScreenLayout { get; set; }

        /// <summary>
        /// Defines if the vehicle has a head up display
        /// </summary>
        public EVFeature? HeadUpDisplay { get; set; }

        /// <summary>
        /// The steering wheels of the EV.
        /// </summary>
        public List<SteeringWheel>? SteeringWheels { get; set; }

        /// <summary>
        /// Defines if the vehicle has voice control
        /// </summary>
        public EVFeature? VoiceControl { get; set; }

        /// <summary>
        /// Defines if the vehicle has gesture control
        /// </summary>
        public EVFeature? GestureControl { get; set; }

      internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "UIAndControls" };

            if (HMIType == HMIType.NotSet)
            {
                dataQualityScore.ReduceScore(100);
            }

            if (ScreenLayout == null || ScreenLayout.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {
                foreach (ScreenLayout screenLayout in ScreenLayout)
                {
                    dataQualityScore.AddSubScore(screenLayout.CalculateDataQuality());
                }

            }

            if (HeadUpDisplay == null || HeadUpDisplay.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(20);
            }

            if (VoiceControl == null)
            {
                dataQualityScore.ReduceScore(20);
            }

            if (GestureControl == null)
            {
                dataQualityScore.ReduceScore(20);
            }


            if (SteeringWheels == null || SteeringWheels.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {
                foreach (SteeringWheel steeringWheel in SteeringWheels)
                {
                    dataQualityScore.AddSubScore(steeringWheel.CalculateDataQuality());
                }

            }

            return dataQualityScore;
        }

    }
}
