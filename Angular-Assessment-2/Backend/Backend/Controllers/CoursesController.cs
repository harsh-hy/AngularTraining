using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public CoursesController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        /// <summary>
        /// Get all courses
        /// </summary>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Course>>> GetAllCourses()
        {
            var courses = await _dbContext.Courses.ToListAsync();
            return Ok(courses);
        }

        /// <summary>
        /// Get a course by ID
        /// </summary>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Course>> GetCourseById(int id)
        {
            var course = await _dbContext.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound(new { message = $"Course with ID {id} not found." });
            }

            return Ok(course);
        }

        /// <summary>
        /// Create a new course
        /// </summary>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Course>> CreateCourse(Course course)
        {
            // Validation
            if (string.IsNullOrWhiteSpace(course.Title) || course.Title.Length > 100)
            {
                return BadRequest(new { message = "Title is required and must be 100 characters or less." });
            }

            if (string.IsNullOrWhiteSpace(course.Instructor) || course.Instructor.Length > 100)
            {
                return BadRequest(new { message = "Instructor is required and must be 100 characters or less." });
            }

            if (course.Duration < 1 || course.Duration > 1000)
            {
                return BadRequest(new { message = "Duration must be between 1 and 1000 hours." });
            }

            _dbContext.Courses.Add(course);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCourseById), new { id = course.Id }, course);
        }

        /// <summary>
        /// Update an existing course
        /// </summary>
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Course>> UpdateCourse(int id, Course courseUpdate)
        {
            var course = await _dbContext.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound(new { message = $"Course with ID {id} not found." });
            }

            // Validation
            if (string.IsNullOrWhiteSpace(courseUpdate.Title) || courseUpdate.Title.Length > 100)
            {
                return BadRequest(new { message = "Title is required and must be 100 characters or less." });
            }

            if (string.IsNullOrWhiteSpace(courseUpdate.Instructor) || courseUpdate.Instructor.Length > 100)
            {
                return BadRequest(new { message = "Instructor is required and must be 100 characters or less." });
            }

            if (courseUpdate.Duration < 1 || courseUpdate.Duration > 1000)
            {
                return BadRequest(new { message = "Duration must be between 1 and 1000 hours." });
            }

            course.Title = courseUpdate.Title;
            course.Instructor = courseUpdate.Instructor;
            course.Duration = courseUpdate.Duration;

            _dbContext.Courses.Update(course);
            await _dbContext.SaveChangesAsync();

            return Ok(course);
        }

        /// <summary>
        /// Delete a course
        /// </summary>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _dbContext.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound(new { message = $"Course with ID {id} not found." });
            }

            _dbContext.Courses.Remove(course);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
