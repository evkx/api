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

        public string? ConfigOptions { get; set; }

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

    }
}
