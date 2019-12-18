using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLSmartPhone.DTO
{

        public class DT
        {   
            [Key][Required]
            public string MDT { get; set; }
            public string Name_DT { get; set; }
            public int Soluong_DT { get; set; }
            public int Gia_DT { get; set; }
            public DateTime Date_DT { get; set; }
            public string ID_Hang { get; set; }
            public Boolean Gender_DT { get; set; }

            [ForeignKey("ID_Hang")]
            public virtual Hang hang { get; set; }

        }
    
}
