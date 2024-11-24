using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines the interior material type of a vehicle.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteriorMaterialType : int
    {
        None,
        Fabric,
        Microfiber,
        Alcantara,
        Dinamica,
        Leatherette,
        Leather,
        NappaLeather,
        DinamicaLeatherette,
        AlcantaraLeatherette,
        Wool,
        WoolLeather,
        MicrofiberLeatherette,
        FabricLeatherette,
        WoolLeatherette,
        NappaLeatherMicrofiber,
        DinamicaLeather,
        MicrofiberLeatheretteFabric,
    }
}
