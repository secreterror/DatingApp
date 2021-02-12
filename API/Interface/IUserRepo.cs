using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interface
{
    public interface IUserRepo
    {
        void Update(AppUser user);

        Task<bool> SaveAllAsync();

        Task<IEnumerable<AppUser>> GetUsersAsync();

        Task<AppUser> GetUserByIdAsync(int id);
        Task<AppUser> GetUserByUsernameAsync(string username);

        

        
        
        
    }
}