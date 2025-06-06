using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MorningAndCo.Server.Models; 
using MorningAndCo.Server.DTOs;   
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;

    public AccountController(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

   
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto model)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var user = new ApplicationUser
        {
            UserName = model.Username,       
            Email = model.Email,
            FirstName = model.FirstName,
            Surname = model.Surname,
            DateOfBirth = model.DateOfBirth
        };

        var result = await _userManager.CreateAsync(user, model.Password);

        if (result.Succeeded)
        {
            // Optional: you can add roles, send email confirmation, etc.
            return Ok(new { Message = "User registered successfully" });
        }

        if (result.Errors.Any(e => e.Code == "DuplicateUserName" || e.Code == "DuplicateEmail"))
        {
            return BadRequest(new { message = "Email already in use" });
        }

        return BadRequest(result.Errors);
    }
}
