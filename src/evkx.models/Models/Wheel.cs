using evdb.models.Models;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines a wheel option for an EV
    /// </summary>
    public class Wheel
    {
        public string? TireDimensionFront { get; set; }

        public string? TireDimensionRear { get; set; }

        public int? WheelSize { get; set; }

        // Special Case. EG Lucid Air Sapphire
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public int? WheelSizeRear { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public double? WheelWidth { get; set; }

        public Dictionary<string,string>? Name { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public int? WheelOffset { get; set; }

        public string? GetWheelCategory()
        {
            if(WheelSize == null || 
               string.IsNullOrEmpty(TireDimensionFront) 
               || string.IsNullOrEmpty(TireDimensionRear))
            {
                return string.Empty;
            }

            decimal? wheelDiameterFront = GetWheelDiameterFront();
            decimal? wheelDiameterRear = GetWheelDiameterRear();
            decimal? tireWallHeightFront = GetTireWallHeightFront();
            decimal? tireWallHeightRear = GetTireWallHeightRear();  
            decimal? tireWidthFront = GetTireWidthFront();  
            decimal? tireWidthRear = GetTireWidthRear();

            if(wheelDiameterFront == null || wheelDiameterRear == null || tireWallHeightFront == null
                || tireWallHeightRear == null || tireWidthFront == null || tireWidthRear == null)
            {
                return string.Empty;
            }

            string wheelcategory = string.Empty;

            if (TireDimensionFront.Equals(TireDimensionRear))
            {
                wheelcategory = "square";
            }
            else
            {
                wheelcategory = "staggered";
            }


            if(wheelDiameterFront < 17)
            {
                wheelcategory += "_xxsmall";
            }
            else if (wheelDiameterFront < 20)
            {
                wheelcategory += "_xsmall";
            }
            else if (wheelDiameterFront < 22)
            {
                wheelcategory += "_small";
            }
            else if (wheelDiameterFront < 24)
            {
                wheelcategory += "_mid";
            }
            else if (wheelDiameterFront < 29)
            {
                wheelcategory += "_large";
            }
            else if (wheelDiameterFront < 35)
            {
                wheelcategory += "_xlarge";
            }

            if(tireWidthRear > 305)
            {
                wheelcategory += "_superwide";
            }
            else if(tireWidthRear > 275)
            {
                wheelcategory += "_wide";
            }
            else if (tireWidthRear > 245)
            {
                wheelcategory += "_mid";
            }
            else if(tireWidthRear > 215)
            {
                wheelcategory += "_narrow";
            }
            else
            {
                wheelcategory += "_supernarrow";
            }


            if(tireWallHeightRear < 100)
            {
                wheelcategory += "_lowprofile";
            }
            else if (tireWallHeightRear < 140)
            {
                wheelcategory += "_midprofile";
            }
            else
            {
                wheelcategory += "_highprofile";
            }

            return wheelcategory;
        }

        public decimal? GetWheelDiameterFront()
        {
            if(WheelSize == null || string.IsNullOrEmpty(TireDimensionFront))
            {
                return null;
            }

            decimal tirewidth = decimal.Parse(TireDimensionFront.Split('/')[0]);
            decimal tireWallHeightFactor = decimal.Parse(TireDimensionFront.Split('/')[1]);
            decimal tireWallHeight = decimal.Divide(decimal.Multiply(tirewidth,tireWallHeightFactor), 100);
           
            return decimal.Multiply(2, decimal.Multiply(tireWallHeight, new decimal(0.0254))) + WheelSize;
        }

        public decimal? GetWheelDiameterRear()
        {
            if (WheelSize == null || string.IsNullOrEmpty(TireDimensionRear))
            {
                return null;
            }

            decimal tirewidth = decimal.Parse(TireDimensionRear.Split('/')[0]);
            decimal tireWallHeightFactor = decimal.Parse(TireDimensionRear.Split('/')[1]);
            decimal tireWallHeight = decimal.Divide(decimal.Multiply(tirewidth, tireWallHeightFactor), 100);

            return decimal.Multiply(2, decimal.Multiply(tireWallHeight, new decimal(0.0254))) + WheelSize;
        }

        public decimal? GetTireWallHeightFront()
        {
            if (WheelSize == null || string.IsNullOrEmpty(TireDimensionFront))
            {
                return null;
            }

            decimal tirewidth = decimal.Parse(TireDimensionFront.Split('/')[0]);
            decimal tireWallHeightFactor = decimal.Parse(TireDimensionFront.Split('/')[1]);
            decimal tireWallHeight = decimal.Divide(decimal.Multiply(tirewidth, tireWallHeightFactor), 100);

            return tireWallHeight;
        }

        public decimal? GetTireWallHeightRear()
        {
            if (WheelSize == null || string.IsNullOrEmpty(TireDimensionRear))
            {
                return null;
            }

            decimal tirewidth = decimal.Parse(TireDimensionRear.Split('/')[0]);
            decimal tireWallHeightFactor = decimal.Parse(TireDimensionRear.Split('/')[1]);
            decimal tireWallHeight = decimal.Divide(decimal.Multiply(tirewidth, tireWallHeightFactor), 100);

            return tireWallHeight;
        }


        public decimal? GetTireWidthFront()
        {
            if (WheelSize == null || string.IsNullOrEmpty(TireDimensionFront))
            {
                return null;
            }

            decimal tirewidth = decimal.Parse(TireDimensionFront.Split('/')[0]);

            return tirewidth;
        }

        public decimal? GetTireWidthRear()
        {
            if (WheelSize == null || string.IsNullOrEmpty(TireDimensionRear))
            {
                return null;
            }

            decimal tirewidth = decimal.Parse(TireDimensionRear.Split('/')[0]);
            return tirewidth;
        }


        public int? GetRearWheelSizeRear()
        {

            if(WheelSizeRear != null)
            {
               return WheelSizeRear;
            }
            
            return WheelSize;
        }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Wheel" };

            if(string.IsNullOrWhiteSpace(TireDimensionFront))
            {
                dataQualityScore.ReduceScore(30, "TireDimensionFront");
            }

            if(string.IsNullOrWhiteSpace(TireDimensionRear))
            {
                dataQualityScore.ReduceScore(30, "TireDimensionRear");
            }

            if(WheelSize == null)
            {
                dataQualityScore.ReduceScore(30, "WheelSize");
            }

            return dataQualityScore;
        }
    }
}
