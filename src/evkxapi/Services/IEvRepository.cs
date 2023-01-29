using evdb.Models;

namespace evdb.Services
{
    public interface IEvRepository
    {
        Task<List<EV>> GetAllEv();
    }
}
