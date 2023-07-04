using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class EvSummary
    {
        public string? EvId { get; set; }

        public string? Brand { get; set; }

        public string? Model { get; set; }

        public string? Variant { get; set; }

        public DateTime? Added { get; set; }

        public DateTime? Complete  { get; set; }

        public bool? HideFromFrontpage { get; set; }

        public string? Path { get; set; }

        public string? ImagePath { get; set; }

        public int? ImageWidth { get; set; }

        public int? ImageHeight { get; set; }

        public bool? HasMediumThumb { get; set; }

        public bool? HasSmallThumb { get; set; }

        public Dictionary<string, string>? Description { get; set; }

        public string? GetMediumThumbExternalUrl()
        {
            string extension = System.IO.Path.GetExtension(ImagePath);
            if (ImagePath != null)
            {
                if (HasMediumThumb != null && HasMediumThumb.Value)
                {
                    return ImagePath.Replace(extension, "_mt" + extension);
                }
                else if (HasSmallThumb != null && HasSmallThumb.Value)
                {
                    return ImagePath.Replace(extension, "_st" + extension);
                }

                return ImagePath;
            }

            return null;
        }

        public string? GetSmallThumbExternalUrl()
        {
            string extension = System.IO.Path.GetExtension(ImagePath);
            if (ImagePath != null)
            {
                if (HasSmallThumb != null && HasSmallThumb.Value)
                {
                    return ImagePath.Replace(extension, "_st" + extension);
                }
                else if (HasMediumThumb != null && HasMediumThumb.Value)
                {
                    return ImagePath.Replace(extension, "_mt" + extension);
                }

                return ImagePath;
            }

            return null;
        }

        public int GetMediumHeight()
        {
            if (ImageHeight.HasValue && ImageWidth.HasValue)
            {
                return (int)((double)((double)1200 / (double)ImageWidth.Value) * (double)ImageHeight.Value);
            }
            return default;
        }

        public int GetSmallHeight()
        {
            if (ImageHeight.HasValue && ImageWidth.HasValue)
            {
                return (int)((double)((double)800 / (double)ImageWidth.Value) * (double)ImageHeight.Value);
            }
            return default;
        }

        public int GetXSmallHeight()
        {
            if (ImageHeight.HasValue && ImageWidth.HasValue)
            {
                return (int)((double)((double)400 / (double) ImageWidth.Value) * (double)ImageHeight.Value);
            }
            return default;
        }
    }
}
