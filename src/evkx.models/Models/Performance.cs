using evdb.models.Enums;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;
using System.Xml.Linq;

namespace evdb.Models
{
    public class Performance
    {
        public int? PowerKw { get; set; }

        public int? PowerKwBoost { get; set; }

        public int? TorqueNm { get; set; }  

        public int? TorqueNmBoost { get; set; }

        public int? BoostLengthSeconds { get; set; }

        public int? TopSpeed { get; set; }

        public double? ZeroToHundredKph { get; set; }

        public double? ZeroToHundredKphBoost { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PerformanceOptionType? OptionType { get; set; }

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
                    else if (PowerKwBoost.Value > 249 && TorqueNmBoost.Value > 300)
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
                    else if (PowerKw.Value > 249 && TorqueNm.Value > 300)
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

    }
}
