using QLSmartPhone.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLSmartPhone.DAL
{
    public class DienthoaiDAL
    {
        QLDT db { get; set; }
        public DienthoaiDAL ()
        {
            db = new QLDT();
        }
        
        public DataTable GetAllsmartphone()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Mã điện thoại");
            dt.Columns.Add("Tên điện thoại");
            dt.Columns.Add("Số lượng");
            dt.Columns.Add("Đơn giá");
            dt.Columns.Add("Ngày nhập hàng");
            dt.Columns.Add("Hãng cung cấp");
            dt.Columns.Add("Tình trạng");


            var query = from han in db.Hangs
                        from die in db.DTs
                        where han.ID_hang == die.ID_Hang
                        select new
                        {
                            die.MDT,
                            die.Name_DT,
                            die.Soluong_DT,
                            die.Gia_DT,
                            die.Date_DT,
                            han.Name_hang,
                            die.Gender_DT
                        };

            foreach(var i in query)
            {
                DataRow r = dt.NewRow();
                r["Mã điện thoại"] = i.MDT;
                r["Tên điện thoại"] = i.Name_DT;
                r["Số lượng"] = i.Soluong_DT;
                r["Đơn giá"] = i.Gia_DT;
                r["Ngày nhập hàng"] = i.Date_DT;
                r["Hãng cung cấp"] = i.Name_hang;
                if(i.Gender_DT)
                {
                    r["Tình trạng"] = "Còn";
                }
                else
                {
                    r["Tình trạng"] = "Hết";
                }
                dt.Rows.Add(r);
            }
            return dt;

        }
        public bool addDienthoai(DT dt)
        {
            db.DTs.Add(dt);
            db.SaveChanges();
            return true;
        }
        public Hang[] getAllHangs()
        {
            return db.Hangs.ToArray();
        }
        public DT getDTById(String id)
        {
            var query = from exa in db.DTs
                        where exa.MDT == id
                        select exa;
            DT ex = null;
            foreach(var i in query)
            {
                ex = i;
            }
                return ex;
        }
        public bool deleteDienthoai(string id)
        {
            var query = from ex in db.DTs
                        where ex.MDT == id
                        select ex;
            foreach(var i in query)
            {
                db.DTs.Remove(i);
            }
            db.SaveChanges();
            return true;
        }
        public bool editDT(DT dt)
        {
            var query = from sm in db.DTs
                        where sm.MDT == dt.MDT
                        select sm;
            foreach(var i in query)
            {
                i.MDT = dt.MDT;
                i.Name_DT = dt.Name_DT;
                i.Soluong_DT = dt.Soluong_DT;
                i.Gia_DT = dt.Gia_DT;
                i.Date_DT = dt.Date_DT;
                i.ID_Hang = dt.ID_Hang;
                i.Gender_DT = dt.Gender_DT;
            };
            db.SaveChanges();
            return true;
        }
    }
}
