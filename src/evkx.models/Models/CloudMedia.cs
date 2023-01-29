using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evdb.Models
{
    public class CloudMedia
    {
        public string? FileName { get; set; }

        public string? RepoPath { get; set; }

        public string? CloudPath { get; set; }

        public string? ExternalUrl { get; set; }

        public bool? HasSmallThumb { get; set; }

        public bool? HasMediumThumb { get; set; }

        public List<string> Tags { get; set; }

        public Dictionary<string, string>? Description { get; set; }

        public int? Width { get; set; }

        public int? Height { get; set; }


        public string? GetThumbExternalUrl()
        {
            string extension = Path.GetExtension(RepoPath);
            if (ExternalUrl != null)
            {
                if(HasSmallThumb != null && HasSmallThumb.Value)
                {
                    return ExternalUrl.Replace(extension, "_st"+ extension);
                }
                else if(HasMediumThumb != null && HasMediumThumb.Value)
                {
                    return ExternalUrl.Replace(extension, "_mt" + extension);
                }

                return ExternalUrl;
            }

            return null;
        }

        public string? GetDescription(string language)
        {
            if (Description != null && Description.ContainsKey(language))
            {
                return Description[language];
            }

            return null;
        }
    }
}
