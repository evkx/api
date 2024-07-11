using System;
using System.Collections.Generic;
using System.Text;

namespace evdb.models.Config
{
    public class EvkxConfig
    {
        public string RepoBasePath { get; set; } = "d:/repos";

        public string TextRepo { get; set; } = "evtext";

        public string SpecRepo { get; set; } = "evspec";

        public string MediaRepo { get; set; } = "evmedia";

        public string SiteRepo { get; set; } = "evkx.github.io";

    }
}
