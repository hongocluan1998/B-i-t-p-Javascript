using QLSmartPhone.BLL;
using QLSmartPhone.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace QLSmartPhone
{
    public partial class Form1 : Form
    {
        DienthoaiBLL bll { get; set; }
        public Form1()
        {
            InitializeComponent();
            bll = new DienthoaiBLL();
            showData(null);
            getCBBItem();
        }

        private void getCBBItem()
        {
            Hang[] listHang = bll.getAllHangs();
            foreach(Hang h in listHang)
            {
                CBBItem i = new CBBItem
                {
                    Text = h.Name_hang,
                    Value = h.ID_hang
                };
                comboBox1.Items.Add(i);
            }
        }

        private void btn_add_Click(object sender, EventArgs e)
        {
            Form2 fm = new Form2("");
            fm.myDelegate = new Form2.ShowDelegate(showData);
            
            fm.Show();
        }

        public void showData(CBBItem item )
        {
            dataGridView1.DataSource = bll.getAllDienthoaiBLL();
        }

        private void btn_delete_Click(object sender, EventArgs e)
        {
            DataGridViewSelectedRowCollection r = dataGridView1.SelectedRows;
            foreach(DataGridViewRow i in r)
            {
                bll.deleteDienthoaiBLL(i.Cells["Mã điện thoại"].Value.ToString());
            }
            showData(null);
        }

        private void btn_edit_Click(object sender, EventArgs e)
        {
            DataGridViewSelectedRowCollection r  = dataGridView1.SelectedRows;
            String id = "";
            foreach(DataGridViewRow i in r)
            {
                id = i.Cells["Mã điện thoại"].Value.ToString();
            }
            Form2 fm = new Form2(id);
            fm.myDelegate = new Form2.ShowDelegate(showData);
            fm.Show();
        }

        private void CBB_sort_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (CBB_sort.SelectedIndex == 0)
            {
                dataGridView1.Sort(dataGridView1.Columns[0], ListSortDirection.Ascending);
            }
            else if (CBB_sort.SelectedIndex == 1)
            {
                dataGridView1.Sort(dataGridView1.Columns[1], ListSortDirection.Ascending);
            }
            else if (CBB_sort.SelectedIndex == 2)
            {
                dataGridView1.Sort(dataGridView1.Columns[3], ListSortDirection.Ascending);
            }
        }
    }
}
