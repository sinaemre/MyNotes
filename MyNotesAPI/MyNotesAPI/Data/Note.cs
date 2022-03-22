using System;
using System.ComponentModel.DataAnnotations;

namespace MyNotesAPI.Data
{
    public class Note
    {
        public int Id { get; set; }
        
        [Required, MaxLength(200)]
        public string Title { get; set; }
        
        public string Content { get; set; }

        public DateTime CreationTime { get; set; } = DateTime.Now;

        public DateTime ModifiedTime { get; set; } = DateTime.Now;



    }
}
