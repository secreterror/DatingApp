using System;
using System.Collections.Generic;

namespace API.Data
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string UserName {get;set;}

        public string PhotoUrl {get;set;}

        public int Age {get;set;}

        public string KnownAs {get;set;}

        public DateTime  Created {get;set;}=DateTime.Now;

        public DateTime LastActive {get;set;}= DateTime.Now;

        public string Gender {get;set;}

        public string Introduction {get;set;}

        public string Organization {get;set;}

        public string Skills {get;set;}

        public string City {get;set;}
        public string Country {get;set;}

        public ICollection<BlogDto> Blogs {get;set;} 

        
    }
}