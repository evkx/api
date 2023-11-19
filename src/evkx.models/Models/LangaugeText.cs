using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Models
{
    public class LangaugeText
    {
        public string? Id { get; set; }

        public string? Translation { get; set; }    

        public string GetYamlForText()
        {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.AppendLine($"- id: {Id}");
            stringBuilder.AppendLine($"  translation: {Translation}");
            stringBuilder.AppendLine();
            return stringBuilder.ToString();
        }
    }
}
