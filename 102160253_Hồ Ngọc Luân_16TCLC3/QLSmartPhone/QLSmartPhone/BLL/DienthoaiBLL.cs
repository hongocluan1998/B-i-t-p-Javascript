using QLSmartPhone.DAL;
using QLSmartPhone.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLSmartPhone.BLL
{
    public class DienthoaiBLL
    {
        DienthoaiDAL dal { get; set; }
        
           
        public DienthoaiBLL()
        {
            dal = new DienthoaiDAL();
        }
        public DataTable getAllDienthoaiBLL()
        {
            return dal.GetAllsmartphone();
        }
        public bool addDienthoai(DT dt)
        {
            return dal.addDienthoai(dt);
        }
        public Hang[] getAllHangs()
        {
            return dal.getAllHangs();
        }
        public bool deleteDienthoaiBLL(string id)
        {
            return dal.deleteDienthoai(id);
        }
        public DT getDTById(string id)
        {
            return dal.getDTById(id);
        }
        public bool updateDTBBL(DT dt)
        {
            return dal.editDT(dt);
        }
        
    }
}
