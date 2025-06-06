using System.ComponentModel.DataAnnotations;

namespace MorningAndCo.Server.DTOs

{
    public class RegisterDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string Surname { get; set; }
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string Username { get; set; }
    }
}
