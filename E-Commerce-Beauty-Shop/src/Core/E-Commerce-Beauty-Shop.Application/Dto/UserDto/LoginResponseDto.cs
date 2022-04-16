using System;
using System.Collections.Generic;

namespace E_Commerce_Beauty_Shop.Application.Dto.UserDto
{
    public class LoginResponseDto:ResponseDto
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        public string Username { get; set; }

        public string Token { get; set; }

        public DateTime ExpiryDate { get; set; }

        public List<string> Roles { get; set; }

        public BasketDto Basket { get; set; }

    }
}
