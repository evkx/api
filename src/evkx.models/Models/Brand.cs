namespace evdb.Models
{
    public class Brand
    {
        public int? Id { get; set; }

        public required string Name { get; set; }

        public string? SubBrand { get; set; }

    }
}
