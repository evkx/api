using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Describes the interior of an EV.
    /// </summary>
    public class Interior
    {
        public Interior()
        {
            FirstRowSeats = [new Seatoption()];
            SecondRowSeats = [new Seatoption()];
            Hvac = new HVAC();
            SeatLayout = [];
            SeatLayout.Add(new SeatLayout());
            InteriorDesigns = [new InteriorDesign()];
        }

        /// <summary>
        /// Defines the interior category of the EV.
        /// </summary>
        public InteriorCategory? InteriorCategory { get; set; }

        /// <summary>
        /// Defines the interior quality of the EV.
        /// </summary>
        public InteriorQuality? InteriorQuality { get; set; }

        /// <summary>
        /// Defines the console design of the EV.
        /// </summary>
        public ConsoleDesign? ConsoleDesign { get; set; }

        /// <summary>
        /// Defines the interior designs of the EV. Including the color and material.
        /// </summary>
        public List<InteriorDesign>? InteriorDesigns { get; set; }

        /// <summary>
        /// The number of seat layouts for this EV.
        /// </summary>
        public List<SeatLayout>? SeatLayout { get; set; }

        /// <summary>
        /// The first row seats of the EV.
        /// </summary>
        public List<Seatoption>? FirstRowSeats { get; set; }

        /// <summary>
        /// The second row seats of the EV.
        /// </summary>
        public List<Seatoption>? SecondRowSeats { get; set; }

        /// <summary>
        /// The third row seats of the EV.
        /// </summary>
        public List<Seatoption>? ThirdRowSeats { get; set; }

        /// <summary>
        /// The fourth row seats of the EV.
        /// </summary>
        public List<Seatoption>? FourthRowSeats { get; set; }

        /// <summary>
        /// The steering wheels of the EV.
        /// </summary>
        public List<SteeringWheel>? SteeringWheels { get; set; }

        /// <summary>
        /// The HVAC system of the EV.
        /// </summary>
        public HVAC? Hvac { get; set; }

        /// <summary>
        /// Defines the interior lights of the EV.
        /// </summary>
        public List<InteriorLight> InteriorLights { get; set; }


        public string GetInteriorIntroKey()
        {
            if(InteriorCategory == null || InteriorQuality == null || ConsoleDesign == null)
            {
                return string.Empty;
            }

            if(InteriorCategory == models.Enums.InteriorCategory.NotSet 
                || InteriorQuality == models.Enums.InteriorQuality.NotSet 
                || ConsoleDesign == models.Enums.ConsoleDesign.NotSet)
            {
                return string.Empty;
            }   
           
            return  $"interior.intro.{InteriorCategory}.{InteriorQuality}.{ConsoleDesign}".ToLower();
        }

        public string GetInteriorOptionsKey()
        {
             bool multipleSeatLayouts = SeatLayout != null && SeatLayout.Count > 1;
             bool multipleInteriorDesigns = InteriorDesigns != null && InteriorDesigns.Count > 1;
             bool multipleFirstRowSeats = FirstRowSeats != null && FirstRowSeats.Count > 1;
             bool multipleSecondRowSeats = SecondRowSeats != null && SecondRowSeats.Count > 1;
             bool multipleThirdRowSeats = ThirdRowSeats != null && ThirdRowSeats.Count > 1;
             bool multipleSeatMaterials = GetSeatMaterials().Count > 1;

            if(multipleFirstRowSeats && multipleSeatMaterials && multipleInteriorDesigns)
            {
                return "interior.configoptions.multipleseatswithifferentatylingandmaterials";
            }
            else if(!multipleFirstRowSeats && multipleSeatMaterials && multipleInteriorDesigns)
            {
                return "interior.configoptions.singleseatswithifferentatylingandmaterials";
            }
            else if (!multipleFirstRowSeats && multipleSeatMaterials && !multipleInteriorDesigns)
            {
                return "interior.configoptions.singleseatswithdifferentmaterial";
            }
            else if (!multipleFirstRowSeats && multipleSeatMaterials && !multipleInteriorDesigns)
            {
                return "interior.configoptions.twinseatswithpreconfiguredmaterial";
            }


            return string.Empty;
        }

        public List<InteriorMaterialType> GetSeatMaterials()
        {
            List<InteriorMaterialType> seatMaterials = new List<InteriorMaterialType>();

            if (InteriorDesigns != null)
            {
                foreach (InteriorDesign interiorDesign in InteriorDesigns)
                {
                    if (interiorDesign.SeatMaterials != null)
                    {
                        foreach (SeatMaterial material in interiorDesign.SeatMaterials)
                        {
                            if (material.MaterialType != null)
                            {
                                if (!seatMaterials.Contains(material.MaterialType.Value))
                                {
                                    seatMaterials.Add(material.MaterialType.Value);
                                }
                            }
                        }
                    }
                }
            }

            return seatMaterials;
        }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Interior" };

            if(InteriorCategory== null || InteriorQuality == models.Enums.InteriorQuality.NotSet)
            {
                dataQualityScore.ReduceScore(100);
            }

            if (InteriorDesigns == null || InteriorDesigns.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {
                foreach (InteriorDesign interiorDesign in InteriorDesigns)
                {
                    dataQualityScore.AddSubScore(interiorDesign.CalculateDataQuality());
                }
            }

            if(ConsoleDesign == models.Enums.ConsoleDesign.NotSet)
            {
                dataQualityScore.ReduceScore(100);
            }

            if(SeatLayout == null || SeatLayout.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {
                foreach (SeatLayout seatLayout in SeatLayout)
                {
                    dataQualityScore.AddSubScore(seatLayout.CalculateDataQuality());
                }
            }

            if(FirstRowSeats == null || FirstRowSeats.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {
                foreach (Seatoption seatOption in FirstRowSeats)
                {
                    dataQualityScore.AddSubScore(seatOption.CalculateDataQuality());
                }
            }

            if (SecondRowSeats != null && SecondRowSeats.Count > 0)
            {
                foreach(Seatoption seatOption in SecondRowSeats)
                {
                    dataQualityScore.AddSubScore(seatOption.CalculateDataQuality());
                }
            }


            if (ThirdRowSeats != null && ThirdRowSeats.Count > 0)
            {

                foreach (Seatoption seatOption in ThirdRowSeats)
                {
                    dataQualityScore.AddSubScore(seatOption.CalculateDataQuality());
                }
            }

            if(Hvac == null)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {
                dataQualityScore.AddSubScore(Hvac.CalculateDataQuality());
            }

            if(InteriorLights != null)
            {
                foreach(InteriorLight light in InteriorLights)
                {

                    dataQualityScore.AddSubScore(light.CalculateDataQuality());
                }

            }

            if(SteeringWheels == null || SteeringWheels.Count == 0)
            {
                dataQualityScore.ReduceScore(100);
            }
            else
            {

            }

            return dataQualityScore;
        }
    }
}
