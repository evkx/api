using evdb.models.Enums;
using evdb.models.Models;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace evdb.Models
{
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

        public string? ConfigOptions { get; set; }

        public List<Seatoption>? FirstRowSeats { get; set; }

        public List<Seatoption>? SecondRowSeats { get; set; }

        public List<Seatoption>? ThirdRowSeats { get; set; }

        public List<Seatoption>? FourthRowSeats { get; set; }

        public List<SeatLayout>? SeatLayout { get; set; }

        public List<SteeringWheel>? SteeringWheels { get; set; }

        public List<InteriorDesign>? InteriorDesigns { get; set; }

        public HVAC? Hvac { get; set; }

        public ConsoleDesign? ConsoleDesign { get; set; }

    }
}
