using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{ 
    [Table("Blogs")]
    public class Blog
    {
       
        public int Id {get;set;}

        public string Url {get;set;}

        public bool isMain {get;set;}

        public string PublicId {get;set;}

        public AppUser AppUser {get;set;}

        public int AppUserId {get;set;}
    }
}