using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class AppUser:IdentityUser
    {
        public string Name { get; set; }
        public string Surname { get; set;}
       
        // public DateTime DateOfBirth { get; set;}
        //
        // public bool IsActive { get; set;}
        //
        //
        // [NotMapped]
        // public string Role { get; set; }
    
    }
}