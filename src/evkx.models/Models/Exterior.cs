using evdb.models.Models;
using System;
using System.Collections.Generic;

namespace evdb.Models
{
    public class Exterior
    {
        public Exterior()
        {
            PaintColors = new List<PaintColor>();
            PaintColors.Add(new PaintColor());
            WheelOptions = new List<Wheel>();
            WheelOptions.Add(new Wheel() { Name = new Dictionary<string, string>()});
            Styling = new List<StylingOption>();
            Doors = new List<Door>();
            Doors.Add(new Door() { Location = models.Enums.DoorLocation.FrontLeft, KickSensor = new EVFeature(), PoweredOpenClose = new EVFeature(), SoftClose = new EVFeature(), Type = models.Enums.DoorType.Standard });
            Doors.Add(new Door() { Location = models.Enums.DoorLocation.FrontRight, KickSensor = new EVFeature(), PoweredOpenClose = new EVFeature(), SoftClose = new EVFeature(), Type = models.Enums.DoorType.Standard });
            Doors.Add(new Door() { Location = models.Enums.DoorLocation.RearLeft, KickSensor = new EVFeature(), PoweredOpenClose = new EVFeature(), SoftClose = new EVFeature(), Type = models.Enums.DoorType.Standard });
            Doors.Add(new Door() { Location = models.Enums.DoorLocation.RearRight, KickSensor = new EVFeature(), PoweredOpenClose = new EVFeature(), SoftClose = new EVFeature(), Type = models.Enums.DoorType.Standard });
            Doors.Add(new Door() { Location = models.Enums.DoorLocation.Tail, KickSensor = new EVFeature(), PoweredOpenClose = new EVFeature(), SoftClose = new EVFeature(), Type = models.Enums.DoorType.NotSet }) ;
            Windows = new Windows();
        }

        public List<PaintColor>? PaintColors { get; set; }

        public List<Wheel>? WheelOptions { get; set; }

        public List<StylingOption>? Styling { get; set; }

        public List<Roof>? RoofOptions { get; set; }

        public List<Door>? Doors { get; set; }

        public Windows? Windows { get; set; }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Exterior" };

            if(PaintColors == null || PaintColors.Count == 0)
            {
                dataQualityScore.ReduceScore(200, "PaintColors");
            }
            else
            {
                foreach(PaintColor paintColor in PaintColors)
                {
                    dataQualityScore.AddSubScore(paintColor.CalculateDataQuality());    
                }
            }

            if(WheelOptions == null || WheelOptions.Count == 0)
            {
                dataQualityScore.ReduceScore(30, "WheelOptions");
            }
            else
            {
                foreach(Wheel wheel in WheelOptions)
                {
                    dataQualityScore.AddSubScore(wheel.CalculateDataQuality());
                }
            }


            if(RoofOptions == null || RoofOptions.Count == 0)
            {
                dataQualityScore.ReduceScore(30, "RoofOptions");
            }
            else
            {
                foreach(Roof roof in RoofOptions)
                {
                    dataQualityScore.AddSubScore(roof.CalculateDataQuality());
                }
            }


            if(Doors == null || Doors.Count == 0)
            {
                dataQualityScore.ReduceScore(300, "Doors");
            }
            else
            {
                foreach(Door door in Doors)
                {
                    dataQualityScore.AddSubScore(door.CalculateDataQuality());
                }
            }


            return dataQualityScore;

        }
    }
}
