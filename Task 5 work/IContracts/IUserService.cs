using Microsoft.AspNetCore.Mvc;
using Models;

namespace IContracts
{
    public interface IUserService
    {
        JsonResult GetProfile(int id);

        IActionResult AddUser(string email, string password);
    }
}