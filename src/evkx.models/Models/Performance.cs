using evdb.models.Enums;
using evdb.models.Models;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace evdb.Models
{
    /// <summary>
    /// Defines various performance metrics of an EV
    /// </summary>
    public class Performance
    {
        /// <summary>
        /// Defines the power in kW
        /// </summary>
        public decimal? PowerKw { get; set; }

        /// <summary>
        /// Defines the power in kW with boost
        /// </summary>
        public decimal? PowerKwBoost { get; set; }

        /// <summary>
        /// Defines the torque in Nm
        /// </summary>
        public decimal? TorqueNm { get; set; }  

        /// <summary>
        /// Defines the torque in Nm with boost
        /// </summary>
        public decimal? TorqueNmBoost { get; set; }

        /// <summary>
        /// Defines the boost length in seconds
        /// </summary>
        public decimal? BoostLengthSeconds { get; set; }

        /// <summary>
        /// Defines the top speed in km/h
        /// </summary>
        public decimal? TopSpeed { get; set; }

        /// <summary>
        /// Defines the 0-100 km/h time in seconds
        /// </summary>
        public decimal? ZeroToHundredKph { get; set; }

        /// <summary>
        /// Defines the 0-100 km/h time in seconds with boost
        /// </summary>
        public decimal? ZeroToHundredKphBoost { get; set; }

        /// <summary>
        /// Defines the market option type
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PerformanceOptionType? OptionType { get; set; }

        /// <summary>
        /// Defines the market type
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? OptionId { get; set; }

        public string? GetPerformanceClass()
        {
            if(HasAllValues())
            {
                if(HasBoostValues())
                {
                    if (PowerKwBoost.Value > 600 && TorqueNmBoost.Value > 800)
                    {
                        return "extreme";
                    }
                    else if (PowerKwBoost.Value > 399 && TorqueNmBoost.Value > 600)
                    {
                        return "performance";
                    }
                    else if (PowerKwBoost.Value > 209 && TorqueNmBoost.Value > 300)
                    {
                        return "standardev";
                    }
                    else if (PowerKwBoost.Value > 109 && TorqueNmBoost.Value > 200) 
                    {
                        return "weakev";
                    }
                }
                else
                {
                    if (PowerKw.Value > 600 && TorqueNm.Value > 800)
                    {
                        return "extreme";
                    }
                    else if (PowerKw.Value > 399 && TorqueNm.Value > 600)
                    {
                        return "performance";
                    }
                    else if (PowerKw.Value > 209 && TorqueNm.Value > 300)
                    {
                        return "standardev";
                    }
                    else if (PowerKw.Value > 109 && TorqueNm.Value > 200)
                    {
                        return "weakev";
                    }
                    else if (PowerKw.Value > 10 && TorqueNm.Value > 10)
                    {
                        return "weak";
                    }

                }
            }

            return null;
        }

        private bool HasAllValues()
        {
            if(TopSpeed.HasValue && PowerKwBoost.HasValue && TorqueNmBoost.HasValue && ZeroToHundredKphBoost.HasValue)
            {
                return true;
            }
            else if (TopSpeed.HasValue && PowerKw.HasValue && TorqueNm.HasValue && ZeroToHundredKph.HasValue)
            {
                return true;
            }

            return false;
        }

        [MemberNotNullWhen(true, nameof(PowerKwBoost), nameof(TorqueNmBoost), nameof(ZeroToHundredKphBoost))]
        public bool HasBoostValues()
        {
            if (PowerKwBoost.HasValue && 
                TorqueNmBoost.HasValue && 
                ZeroToHundredKphBoost.HasValue)
            {
                return true;
            }

            return false;
        }

        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "Performance" };    
            if(!PowerKw.HasValue && !PowerKwBoost.HasValue)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(!TorqueNm.HasValue && !TorqueNmBoost.HasValue)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(!TopSpeed.HasValue)
            {
                dataQualityScore.ReduceScore(10);
            }

            if(!ZeroToHundredKph.HasValue && !ZeroToHundredKphBoost.HasValue)
            {
                dataQualityScore.ReduceScore(10);
            }

            return dataQualityScore;
        }
    }
}
