using evdb.models.Enums;
using evdb.models.Models;
using System;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    public class Suspension
    {

        public Suspension()
        {
            AdaptiveSuspension = new EVFeature();
            AdjustableDampingFront = new EVFeature();
            AdjustableDampingRear = new EVFeature();
            AdjustableHeightFront = new EVFeature();
            AdjustableHeightRear = new EVFeature();
        }
        public string? Name { get; set; }

        public int? MaxGroundClearanceMM { get; set; }

        public int? MinGroundClearanceMM { get; set; }

        public EVFeature? AdaptiveSuspension { get; set; }

        public EVFeature? AdjustableDampingFront { get; set; }

        public EVFeature? AdjustableDampingRear { get; set; }

        public EVFeature? AdjustableHeightFront { get; set; }

        public EVFeature? AdjustableHeightRear { get; set; }

        public EVFeature? EeasyEntry { get; set; }

        public EVFeature? EeasyLoading { get; set; }

        public EVFeature? ActiveBodyControl { get; set; }

        public EVFeature? ActiveCorneringDynamics { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SpringType? SpringTypeFront { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SpringType? SpringTypeRear { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DamperType? DamperTypeFront { get;set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DamperType? DamperTypeRear { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SuspensionType? SuspensionTypeFront { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public SuspensionType? SuspensionTypeRear { get; set; }

        public bool? Standard { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore score = new DataQualityScore() { DataArea = "Suspension" };
        
            if(!string.IsNullOrEmpty(Name))
            {
                score.ReduceScore(1);
            }

            if(!MaxGroundClearanceMM.HasValue)
            {
                score.ReduceScore(5);
            }

            if(!MinGroundClearanceMM.HasValue)
            {
                score.ReduceScore(5);
            }

            if(AdaptiveSuspension == null  || AdaptiveSuspension.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(AdjustableDampingFront == null || AdjustableDampingFront.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(AdjustableDampingRear == null || AdjustableDampingRear.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(AdjustableHeightFront == null || AdjustableHeightFront.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(AdjustableHeightRear == null || AdjustableHeightRear.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }   

            if(EeasyEntry == null || EeasyEntry.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(EeasyLoading == null || EeasyLoading.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(ActiveBodyControl == null || ActiveBodyControl.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(ActiveCorneringDynamics == null || ActiveCorneringDynamics.FeatureStatus.Equals(FeatureStatus.Unknown))
            {
                score.ReduceScore(5);
            }

            if(!SpringTypeFront.HasValue || SpringTypeFront.Equals(SpringType.NotSet))
            {
                score.ReduceScore(5);
            }

            if(!SpringTypeRear.HasValue || SpringTypeRear.Equals(SpringType.NotSet))
            {
                score.ReduceScore(5);
            }

            if(!DamperTypeFront.HasValue || DamperTypeFront.Equals(DamperType.NotSet))
            {
                score.ReduceScore(5);
            }

            if(!DamperTypeRear.HasValue || DamperTypeRear.Equals(DamperType.NotSet))
            {
                score.ReduceScore(5);
            }

            if(!SuspensionTypeFront.HasValue || SuspensionTypeFront.Equals(SuspensionType.NotSet))
            {
                score.ReduceScore(5);
            }

            if(!SuspensionTypeRear.HasValue || SuspensionTypeRear.Equals(SuspensionType.NotSet))
            {
                score.ReduceScore(5);
            }

            if(Standard == null)
            {
                score.ReduceScore(5);
            }

            return score;
        }
    }
}
