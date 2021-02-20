using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Extension;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName {get;set;}

        public byte[] PasswordHash{get;set;}
        public byte[] PasswordSalt{get;set;}

        public DateTime DateOfBirth{get;set;}

        public string KnownAs {get;set;}

        public DateTime  Created {get;set;}=DateTime.Now;

        public DateTime LastActive {get;set;}= DateTime.Now;

        public string Gender {get;set;}

        public string Introduction {get;set;}

        public string Organization {get;set;}

        public string Skills {get;set;}

        public string City {get;set;}
        public string Country {get;set;}

        public ICollection<Blog> Blogs {get;set;} 

        public ICollection<Project> Projects {get;set;}


        public int GetAge(){

            return DateOfBirth.CalculatAge();
        }
        



        



        
    }
}