using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;

namespace evdb.Models
{
    /// <summary>
    /// Defines the infotainment system
    /// </summary>
    public class Infotainment
    {
        /// <summary>
        /// The default constructor
        /// </summary>
        public Infotainment()
        {
            SoundSystems = [new Soundsystem()];
            AndroidAutoSupport = new EVFeature();
            AppleCarPlaySupport = new EVFeature();
            AppStore = new EVFeature();
            Apps = [];
            InCarNavigation = new EVFeature();
            PortAndConnections = [new PortAndConnection()];
            NavigationSystem = new NavigationSystem();
        }

        /// <summary>
        /// Defines the OS for the infotainment system
        /// </summary>
        public string? InfotainmentOs { get; set; }

        /// <summary>
        /// Defines the sound systems
        /// </summary>
        public List<Soundsystem>? SoundSystems { get; set; }

        /// <summary>
        /// Defines if the infotainment system supports Android Auto
        /// </summary>
        public EVFeature? AndroidAutoSupport { get; set; }

        /// <summary>
        /// Defines if the infotainment system supports Apple Car Play
        /// </summary>
        public EVFeature? AppleCarPlaySupport { get; set; }

        /// <summary>
        /// Defines if the infotainment system has in car navigation
        /// </summary>
        public EVFeature? InCarNavigation { get; set; }

        /// <summary>
        /// Defines the navigation system
        /// </summary>
        public NavigationSystem? NavigationSystem { get; set; }

        /// <summary>
        /// Defines if the infotainment system has an app store
        /// </summary>
        public EVFeature? AppStore { get; set; }

        /// <summary>
        /// Defines the third party apps that are available on the infotainment system
        /// </summary>
        public List<string>? Apps { get; set; }

        /// <summary>
        /// Defines the ports and connections available on the infotainment system
        /// </summary>
        public List<PortAndConnection>? PortAndConnections { get; set; }

        /// <summary>
        /// Calculates the data quality score for the infotainment system
        /// </summary>
        /// <returns></returns>
        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Infotainment" };

            if (SoundSystems == null || SoundSystems.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }   
            else
            {
                foreach (var soundsystem in SoundSystems)
                {
                    dataQualityScore.AddSubScore(soundsystem.CalculateDataQuality());
                }

            }

            if(AndroidAutoSupport == null || AndroidAutoSupport.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(AppleCarPlaySupport == null || AppleCarPlaySupport.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(InCarNavigation == null || InCarNavigation.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }
            
            if(NavigationSystem == null)
            {
                dataQualityScore.ReduceScore(10);
            }
            else
            {
                dataQualityScore.AddSubScore(NavigationSystem.CalculateDataQuality());
            }

            if(AppStore == null || AppStore.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(PortAndConnections == null || PortAndConnections.Count == 0)
            {
                dataQualityScore.ReduceScore(10);
            }
            else
            {
                foreach (var portAndConnection in PortAndConnections)
                {
                    dataQualityScore.AddSubScore(portAndConnection.CalculateDataQuality());
                }
            }
            
            return dataQualityScore;
            
        }
    }
}
