namespace evdb.Models
{
    public class PerformanceOption
    {
        public int? PowerKw { get; set; }

        public int? TorqueNm { get; set; }  

        public int? BoostLengthSeconds { get; set; }

        public int? TopSpeed { get; set; }

        public double? ZeroToHundredKph { get; set; }
    }
}
