using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLSmartPhone.DTO
{
    public class CBBItem
    {
        public string Text { get; set; }
        public string Value { get; set; }
        public override string ToString()
        {
            return this.Text;
        }
    }
}
