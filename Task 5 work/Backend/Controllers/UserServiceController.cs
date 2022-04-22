using IContracts;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserServiceController : ControllerBase
    {
        IUserService _userService;

        public UserServiceController([FromServices]IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("getprofile")]
        public JsonResult GetProfile([FromHeader]int id)
        {
            return _userService.GetProfile(id);
        }

        [HttpPost("create")]
        public IActionResult AddUser([FromHeader]string email,[FromHeader]string password)
        {
            return _userService.AddUser(email, password);
        }
    }
}
