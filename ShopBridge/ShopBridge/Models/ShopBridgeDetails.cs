using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Npgsql;
using System.Configuration;
using System.Text;

namespace ShopBridge.Models
{
    public class ShopBridgeDetails
    {
        public string ItemName { get; set; }
        public string NoofItems { get; set; }
        public string Description { get; set; }
        public string PricePerItem { get; set; }
        public string PurchaseDate { get; set; }
        public string TotalAmount { get; set; }
        public string Button { get; set; } = "Save";
        public string Message { get; set; }

        public int Pkid { get; set; }
        public int StatusID { get; set; }


        public List<ShopBridgeDetails> listSavedDetails = new List<ShopBridgeDetails>();


        NpgsqlConnection con = new NpgsqlConnection();      


            /// <summary>
            /// this is to decrypt password
            /// </summary>
            /// <param name="pwd"></param>
            /// <returns></returns>
        public string Decrypt(string pwd)
        {
            string decryptpwd = string.Empty;
            UTF8Encoding encodepwd = new UTF8Encoding();
            Decoder Decode = encodepwd.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(pwd);
            int charCount = Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            decryptpwd = new String(decoded_char);
            return decryptpwd;
        }
        /// <summary>
        /// to save details
        /// </summary>
        /// <param name="objDetails">object contains the details of all the feilds value</param>
        /// <returns></returns>
        public ShopBridgeDetails SaveShopBridgeDetails(ShopBridgeDetails objDetails)
        {
            try
            {
                string strConnectionString = ConfigurationManager.ConnectionStrings["pgSQL"].ConnectionString + Decrypt(ConfigurationManager.AppSettings["DBPassword"]);

                NpgsqlConnection objCon = new NpgsqlConnection();
                NpgsqlCommand cmd = new NpgsqlCommand();
                string sQry = string.Empty;
                string strConn = Convert.ToString(ConfigurationManager.ConnectionStrings["pgSQL"]);
                string sEncryptedpsww = Convert.ToString(ConfigurationManager.AppSettings["DBPassword"]);
                objCon = new NpgsqlConnection(strConnectionString);
                objCon.Open();
                objDetails.Description = (objDetails.Description == null) ? "" : Convert.ToString(objDetails.Description);
                if (objDetails.Pkid == 0)
                {
                    sQry = "INSERT INTO tbl_shop_bridge( sb_name, sb_quantity, sb_price, sb_description, sb_purchase_date) VALUES ('" + objDetails.ItemName + "', " + Convert.ToInt32(objDetails.NoofItems) + ", " + Convert.ToDecimal(objDetails.PricePerItem) + ", '" + Convert.ToString(objDetails.Description) + "', to_date('" + objDetails.PurchaseDate + "','dd/mm/yyyy'))";
                    objDetails.Message = objDetails.ItemName.ToUpper() + " Details Saved Succesfully";
                }
                else
                {
                    sQry = "UPDATE tbl_shop_bridge SET sb_name = '" + objDetails.ItemName + "', sb_quantity = " + Convert.ToInt32(objDetails.NoofItems) + ", sb_price = " + Convert.ToDecimal(objDetails.PricePerItem) + ", sb_description = '" + objDetails.Description + "', sb_purchase_date = to_date('" + objDetails.PurchaseDate + "','dd/mm/yyyy') WHERE sb_id = " + objDetails.Pkid + ";";
                    objDetails.Message = objDetails.ItemName.ToUpper() + " Details Updated Succesfully";

                }
                objDetails.StatusID = 1;

                cmd.CommandText = sQry;
                cmd.Connection = objCon;
                cmd.ExecuteNonQuery();

            }
            catch (Exception ex)
            {
                objDetails.Message = " Something went wrong .Please Try again later";
                objDetails.StatusID = -1;
                throw ex;
            }
            return objDetails;
        }


        /// <summary>
        /// this is ti fetch the details
        /// </summary>
        /// <param name="objDetails"></param>
        /// <returns></returns>
        public ShopBridgeDetails FetchGridDetails(ShopBridgeDetails objDetails)
        {
            string strConnectionString = ConfigurationManager.ConnectionStrings["pgSQL"].ConnectionString + Decrypt(ConfigurationManager.AppSettings["DBPassword"]);

            NpgsqlConnection objCon = new NpgsqlConnection();
            NpgsqlCommand cmd = new NpgsqlCommand();
            string sQry = string.Empty;

            try
            {
                string strConn = Convert.ToString(ConfigurationManager.ConnectionStrings["pgSQL"]);
                string sEncryptedpsww = Convert.ToString(ConfigurationManager.AppSettings["DBPassword"]);
                objCon = new NpgsqlConnection(strConnectionString);
                objCon.Open();
                NpgsqlDataAdapter npgsqlDataAdapter = new NpgsqlDataAdapter();
                DataTable dt = new DataTable();
                if (objDetails.Pkid == 0)
                {
                    sQry = "select sb_id,sb_name,sb_quantity,sb_price,sb_description,to_char(sb_purchase_date,'dd-MON-yyyy') as pDate from tbl_shop_bridge";
                }
                else
                {
                    sQry = "select sb_id,sb_name,sb_quantity,sb_price,sb_description,to_char(sb_purchase_date,'dd/mm/yyyy') as pDate from tbl_shop_bridge where sb_id=" + objDetails.Pkid + "";
                }
                cmd.CommandText = sQry;
                cmd.Connection = objCon;
                npgsqlDataAdapter = new NpgsqlDataAdapter(cmd);
                npgsqlDataAdapter.Fill(dt);
                if (dt.Rows.Count > 0 && objDetails.Pkid != 0)
                {
                    objDetails.Pkid = Convert.ToInt32(dt.Rows[0]["sb_id"]);
                    objDetails.ItemName = Convert.ToString(dt.Rows[0]["sb_name"]);
                    objDetails.NoofItems = Convert.ToString(dt.Rows[0]["sb_quantity"]);
                    objDetails.PricePerItem = Convert.ToString(dt.Rows[0]["sb_price"]);
                    objDetails.Description = Convert.ToString(dt.Rows[0]["sb_description"]);
                    objDetails.PurchaseDate = Convert.ToString(dt.Rows[0]["pDate"]);
                    objDetails.TotalAmount = Convert.ToString(Convert.ToInt32(dt.Rows[0]["sb_quantity"]) * Convert.ToInt32(dt.Rows[0]["sb_price"]));
                    objDetails.Button = "Update";

                }
                else
                {
                    objDetails.listSavedDetails = (from drDetails in dt.AsEnumerable()
                                                   select new ShopBridgeDetails()
                                                   {
                                                       Pkid = Convert.ToInt32(drDetails["sb_id"]),
                                                       ItemName = Convert.ToString(drDetails["sb_name"]),
                                                       NoofItems = Convert.ToString(drDetails["sb_quantity"]),
                                                       PricePerItem = Convert.ToString(drDetails["sb_price"]),
                                                       Description = Convert.ToString(drDetails["sb_description"]),
                                                       PurchaseDate = Convert.ToString(drDetails["pDate"]),
                                                       TotalAmount = Convert.ToString(Convert.ToInt32(drDetails["sb_quantity"]) * Convert.ToInt32(drDetails["sb_price"]))
                                                   }).ToList();
                }
                return objDetails;
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                objCon.Close();
            }
        }


        /// <summary>
        /// to Delete the data with respect to primary key
        /// </summary>
        /// <param name="objDetails"></param>
        /// <returns></returns>
        public ShopBridgeDetails Delete(ShopBridgeDetails objDetails)
        {
            try
            {
                string strConnectionString = ConfigurationManager.ConnectionStrings["pgSQL"].ConnectionString + Decrypt(ConfigurationManager.AppSettings["DBPassword"]);

                NpgsqlConnection objCon = new NpgsqlConnection();
                NpgsqlCommand cmd = new NpgsqlCommand();
                string sQry = string.Empty;
                string strConn = Convert.ToString(ConfigurationManager.ConnectionStrings["pgSQL"]);
                string sEncryptedpsww = Convert.ToString(ConfigurationManager.AppSettings["DBPassword"]);
                objCon = new NpgsqlConnection(strConnectionString);
                objCon.Open();
                sQry = "delete  from tbl_shop_bridge where sb_id=  " + objDetails.Pkid + ";";
                cmd.CommandText = sQry;
                cmd.Connection = objCon;
                cmd.ExecuteNonQuery();
                objCon.Close();

            }
            catch (Exception ex)
            {
                objDetails.Message = " Something went wrong .Please Try again later";
                objDetails.Pkid = -1;
                throw ex;
            }
            
            return objDetails;
        }
    }
}