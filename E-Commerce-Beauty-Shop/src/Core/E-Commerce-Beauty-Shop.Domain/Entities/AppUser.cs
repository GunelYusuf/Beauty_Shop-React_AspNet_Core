using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class AppUser:IdentityUser<Guid>
    {
        public UserAddress Address { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public bool IsActive { get; set; }

    }
}