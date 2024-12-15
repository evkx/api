using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evdb.models.Models
{
    public class EvModelSaleStat
    {
        public EvModelReference Model { get; set; }
        
        public int? SaleCount { get; set; }
    }
}
