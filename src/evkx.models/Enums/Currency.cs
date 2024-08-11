using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    /// <summary>
    /// Defines the currency of a price.
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Currency
    {
        NOTSET, // Default
        USD, // United States Dollar
        EUR, // Euro
        GBP, // British Pound Sterling
        JPY, // Japanese Yen
        AUD, // Australian Dollar
        CAD, // Canadian Dollar
        CHF, // Swiss Franc
        CNY, // Chinese Yuan
        SEK, // Swedish Krona
        NZD, // New Zealand Dollar
        INR, // Indian Rupee
        BRL, // Brazilian Real
        RUB, // Russian Ruble
        ZAR, // South African Rand
        MXN, // Mexican Peso
        SGD, // Singapore Dollar
        HKD, // Hong Kong Dollar
        NOK, // Norwegian Krone
        KRW, // South Korean Won
        TRY  // Turkish Lira
             // Add more currencies as needed...
    }

}
