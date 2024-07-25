using evdb.models.Enums;
using evdb.models.Models;
using System;
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
