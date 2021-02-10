using System.ComponentModel.DataAnnotations;

namespace API.DTO
{
    public class RegisterDTO
    {
        [Required]
        public string UserName {get;set;}
        [Required ]
        [StringLength(40,MinimumLength=5)]
        public string Password {get;set;}
        
    }
}