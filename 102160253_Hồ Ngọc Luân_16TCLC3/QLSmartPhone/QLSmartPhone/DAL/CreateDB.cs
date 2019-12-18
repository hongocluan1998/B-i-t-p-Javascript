using QLSmartPhone.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLSmartPhone.DAL
{
    public class CreateDB : CreateDatabaseIfNotExists<QLDT>
    {
        protected override void Seed(QLDT context)
        {
            context.DTs.Add(new DT
            {
                MDT = "102160251",
                Name_DT = "Samsung Galaxy S1",
                Soluong_DT = 1,
                Gia_DT = 12000000,
                Date_DT = DateTime.Parse("2019/12/16"),
                ID_Hang = "1",
                Gender_DT = Boolean.Parse("true")
            });
            context.DTs.Add(new DT
            {
                MDT = "102160252",
                Name_DT = "Samsung Galaxy S2",
                Soluong_DT = 5,
                Gia_DT = 22000000,
                Date_DT = DateTime.Parse("2019/11/02"),
                ID_Hang = "1",
                Gender_DT = Boolean.Parse("true")
            });
            context.DTs.Add(new DT
            {
                MDT = "102160253",
                Name_DT = "Oppo F1s",
                Soluong_DT = 1,
                Gia_DT = 7000000,
                Date_DT = DateTime.Parse("2019/10/21"),
                ID_Hang = "2",
                Gender_DT = Boolean.Parse("true")
            });
            context.DTs.Add(new DT
            {
                MDT = "102160254",
                Name_DT = "Iphone 7 plus",
                Soluong_DT = 9,
                Gia_DT = 19000000,
                Date_DT = DateTime.Parse("2019/9/16"),
                ID_Hang = "3",
                Gender_DT = Boolean.Parse("true")
            });
            context.DTs.Add(new DT
            {
                MDT = "102160255",
                Name_DT = "Iphone Xs",
                Soluong_DT = 5,
                Gia_DT = 25000000,
                Date_DT = DateTime.Parse("2019/11/16"),
                ID_Hang = "3",
                Gender_DT = Boolean.Parse("true")
            });
            context.DTs.Add(new DT
            {
                MDT = "102160256",
                Name_DT = "LG V35 ThinQ",
                Soluong_DT = 10,
                Gia_DT = 20000000,
                Date_DT = DateTime.Parse("2019/12/16"),
                ID_Hang = "4",
                Gender_DT = Boolean.Parse("true")
            });
            context.Hangs.Add(new Hang
            {
                ID_hang = "1",
                Name_hang = "Samsung"
            });
            context.Hangs.Add(new Hang
            {
                ID_hang = "2",
                Name_hang = "Oppo"
            });
            context.Hangs.Add(new Hang
            {
                ID_hang = "3",
                Name_hang = "Iphone"
            });
            context.Hangs.Add(new Hang
            {
                ID_hang = "4",
                Name_hang = "LG"
            });
        }
    }
}
