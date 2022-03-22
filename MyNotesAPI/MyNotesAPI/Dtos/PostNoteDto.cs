using System.ComponentModel.DataAnnotations;

namespace MyNotesAPI.Dtos
{
    public class PostNoteDto
    {
        [Required, MaxLength(200)]
        public string Title { get; set; }

        public string Content { get; set; }
    }
}
