using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Projects")]
    public class Project
    {
        public int Id {get;set;}

        public string url {get;set;}

        public string about {get;set;}
        public string title {get;set;}
        public AppUser AppUser {get;set;}
        public int AppUserId {get;set;}
        
    }
}