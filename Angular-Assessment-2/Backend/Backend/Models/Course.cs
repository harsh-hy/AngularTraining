using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Instructor { get; set; } = string.Empty;

        [Range(1, 1000)]
        public int Duration { get; set; } // in hours
    }
}