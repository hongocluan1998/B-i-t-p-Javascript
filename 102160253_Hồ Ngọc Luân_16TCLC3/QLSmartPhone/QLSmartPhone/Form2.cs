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
    public partial class Form2 : Form
    {
        public delegate void ShowDelegate(CBBItem comboBox1);
        public ShowDelegate myDelegate { get; set; }
        public DienthoaiBLL bll { get; set; }
        public string id { get; set; }
        public Form2(String id)
        {
            InitializeComponent();
            bll = new DienthoaiBLL();
            getCBBItem();
            if(id == "")
            {
                ShowAdd();
            }
            else if(id != "")
            {
                this.id = id;
                fillData();
            }
        }

        private void fillData()
        {
            DT ex = bll.getDTById(this.id);
            textBox1.Enabled = false;
            textBox1.Text = this.id;
            textBox2.Text = ex.Name_DT;
            textBox3.Text = (ex.Soluong_DT).ToString();
            textBox4.Text = (ex.Gia_DT).ToString();
            dateTimePicker1.Text = (ex.Date_DT).ToString();
            comboBox1.SelectedItem = getItemById(ex.ID_Hang);
            if(ex.Gender_DT)
            {
                radioButton1.Checked = true;
            }
            else
            {
                radioButton2.Checked = true;
            }

        }
        public CBBItem getItemById(String id)
        {
            CBBItem cbb_item = null;
            foreach (CBBItem i in comboBox1.Items)
            {
                if (i.Value == id)
                {
                    cbb_item = i;
                }
            }
            return cbb_item;
        }
        private void ShowAdd()
        {
            label7.Visible = false;
            radioButton1.Visible = false;
            radioButton2.Visible = false;
        }

        private void getCBBItem()
        {
            Hang[] listHang = bll.getAllHangs();
            foreach (Hang h in listHang)
            {
                CBBItem i = new CBBItem
                {
                    Text = h.Name_hang,
                    Value = h.ID_hang
                };
                comboBox1.Items.Add(i);
            }
        }
        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }
        public bool checkEmpty()
        {
            if(textBox1.Text == "" || textBox2.Text == "" || textBox3.Text == "" || textBox4.Text == "" || dateTimePicker1.Value.ToString() == "" || comboBox1.Text == "")
            {
                return false;
            }
            return true;
        }
        private void button1_Click(object sender, EventArgs e)
        {
            if (this.id == null)
            {
                if (!checkEmpty())
                {
                    MessageBox.Show("Không được để trống !");
                }
                else
                {
                    CBBItem i = (CBBItem)comboBox1.SelectedItem;
                    DT ex = new DT
                    {
                        MDT = textBox1.Text,
                        Name_DT = textBox2.Text,
                        Soluong_DT = Int16.Parse(textBox3.Text),
                        Gia_DT = Int32.Parse(textBox4.Text),
                        Date_DT = DateTime.Parse(dateTimePicker1.Value.ToString()),
                        ID_Hang = i.Value,
                        Gender_DT = bool.Parse("true")
                    };
                    bll.addDienthoai(ex);
                    this.myDelegate(null);
                    this.Close();
                }
            }
            else
            {
                if(!checkEmpty())
                {
                    MessageBox.Show("Không được để trống !");
                }
                else
                {
                    CBBItem i = (CBBItem)comboBox1.SelectedItem;
                    DT ex = new DT
                    {
                        MDT = textBox1.Text,
                        Name_DT = textBox2.Text,
                        Soluong_DT = Int16.Parse(textBox3.Text),
                        Gia_DT = Int32.Parse(textBox4.Text),
                        Date_DT = DateTime.Parse(dateTimePicker1.Value.ToString()),
                        ID_Hang = i.Value,
                        Gender_DT = radioButton1.Checked ? true : false
                    };
                    bll.updateDTBBL(ex);
                    this.myDelegate(null);
                    this.Close();
                }
            }
        }
    }
}
