using evdb.models.Enums;
using evdb.Models;

namespace evdb.models.Models
{
    /// <summary>
    /// Defines the transport capabilities of an EV
    /// </summary>
    public class TransportCapabilities
    {
        public TransportCapabilities()
        {
            Towbar = new EVFeature();
        }

        /// <summary>
        /// Defines the curb weight of the EV
        /// </summary>
        public decimal? CurbWeight { get; set; }

        /// <summary>
        /// Defines the max vehicle weight of the EV
        /// </summary>
        public decimal? MaxVehicleWeightKg { get; set; }

        /// <summary>
        /// Defines if the EV has frunk
        /// </summary>
        public bool? Frunk { get; set; }

        /// <summary>
        /// Defines the size of the frunk in liters
        /// </summary>
        public decimal? FrunkSizeLiter { get; set; }

        /// <summary>
        /// Defines if the EV support roof cargo
        /// </summary>
        public bool? RoofCargo { get; set; }

        /// <summary>
        /// Defines the max roof load in kg
        /// </summary>
        public decimal? MaxRoofLoadKg { get; set; }

        /// <summary>
        /// Defines if the EV has towbar
        /// </summary>
        public EVFeature? Towbar { get; set; }

        /// <summary>
        /// Defines the max towbar weight braked in kg
        /// </summary>
        public decimal? TrailerSizeBrakedKg { get; set; }

        /// <summary>
        /// Defines the max towbar weight unbraked in kg
        /// </summary>
        public decimal? TrailerSizeUnBrakedKg { get; set; }
        
        /// <summary>
        /// Defines the max towbar down load in kg
        /// </summary>
        public decimal? MaxTowbarDownloadKg { get; set; }

        /// <summary>
        /// Defines the cargo capacity in liters in trunk
        /// </summary>
        public decimal? CargoCapacityLiter { get; set; }

        /// <summary>
        /// Defines the cargo capacity in liters in trunk with seats down on row 2 (and 3)
        /// </summary>
        public decimal? CargoCapacitySeatDownLiter { get; set; }

        /// <summary>
        /// Defines the cargo capacity in liters in trunk with seats down on row 3
        /// </summary>
        public decimal? CargoCapacityThirdRowSeatDownLiter { get; set; }

        /// <summary>
        /// Defines the Truck bed volume in liters
        /// </summary>
        public decimal? BedVolumeLiter { get; set; }

        /// <summary>
        /// Defines the Truck bed length in millimeters
        /// </summary>
        public decimal? BedLength { get; set; }

        /// <summary>
        /// Defines the Truck bed width in millimeters
        /// </summary>
        public decimal? BedWidth { get; set; }

        /// <summary>
        /// Defines the Truck bed max weight in kg
        /// </summary>
        public decimal? BedMaxWeight { get; set; }


        public decimal? GetMaxLoad()
        {
            if(CurbWeight != null && MaxVehicleWeightKg != null)
            {
                return decimal.Subtract(MaxVehicleWeightKg.Value, CurbWeight.Value);
            }

            return null;
        }

        public DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "TransportCapabilities" };
        
            if(CurbWeight == null || CurbWeight == 0)
            {
                dataQualityScore.ReduceScore(100);
            }

            if(MaxVehicleWeightKg == null || MaxVehicleWeightKg == 0)
            {
                dataQualityScore.ReduceScore(100);
            }

            if(Frunk == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(Frunk == true &&(FrunkSizeLiter == null || FrunkSizeLiter == 0))
            {
                dataQualityScore.ReduceScore(10);
            }

            if(RoofCargo == null)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(RoofCargo == true && (MaxRoofLoadKg == null || MaxRoofLoadKg == 0))
            {
                dataQualityScore.ReduceScore(10);
            }

            if(Towbar == null || Towbar.FeatureStatus == FeatureStatus.Unknown)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(Towbar != null && (Towbar.FeatureStatus == FeatureStatus.Optional || Towbar.FeatureStatus == FeatureStatus.Standard))
            {
                if(TrailerSizeBrakedKg == null || TrailerSizeBrakedKg == 0)
                {
                    dataQualityScore.ReduceScore(50);
                }

                if(TrailerSizeUnBrakedKg == null || TrailerSizeUnBrakedKg == 0)
                {
                    dataQualityScore.ReduceScore(50);
                }

                if(MaxTowbarDownloadKg == null || MaxTowbarDownloadKg == 0)
                {
                    dataQualityScore.ReduceScore(20);
                }
            }

            if(BedLength == null && ( CargoCapacityLiter == null || CargoCapacityLiter == 0))
            {
                dataQualityScore.ReduceScore(100);
            }

            return dataQualityScore;
        }
    }
}
