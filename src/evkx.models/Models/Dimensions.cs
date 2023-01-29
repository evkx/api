using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class Dimensions
    {
        public decimal? Length { get; set; }

        public decimal? Height { get; set; }

        public decimal? WidthExcludingMirrors { get; set; }

        public decimal? WidhtIncludingMirrors { get; set; }

        public decimal? Wheelbase { get; set; }

        public decimal? TrackWidthFront { get; set; }

        public decimal? TrackWidthRear  { get; set; }

        public decimal? DragCoefficient { get; set; }

        public decimal? FrontalArea { get; set; }

        public decimal? OverhangAngleFront { get;  set; }

        public decimal? OverhangAngleRear { get; set; }

        public decimal? TurningCircle { get; set; }

    }
}
