namespace QLSmartPhone
{
    using QLSmartPhone.DTO;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class QLDT : DbContext
    {
        // Your context has been configured to use a 'QLDT' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'QLSmartPhone.QLDT' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'QLDT' 
        // connection string in the application configuration file.
        public QLDT()
            : base("name=QLDT")
        {
            Database.SetInitializer<QLDT>(new DAL.CreateDB());
        }
        public DbSet<DT> DTs { get; set; }
        public DbSet<Hang> Hangs { get; set; }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}