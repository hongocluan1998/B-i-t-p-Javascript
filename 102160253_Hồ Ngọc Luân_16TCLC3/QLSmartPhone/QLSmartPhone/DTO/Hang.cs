using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLSmartPhone.DTO
{
    public class Hang
    {
        [Key][Required]
        public string ID_hang { get; set; }
        public string Name_hang { get; set; }
        public virtual ICollection<DT> DTs { get; set; }
    }
}
