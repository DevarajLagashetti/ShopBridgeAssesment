using ShopBridge.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopBridge.Controllers
{
    public class ShopBridgeDetailsController : Controller
    {
        /// <summary>
        /// This is for viewpage 
        /// </summary>
        /// <returns></returns>
        public ActionResult ShopBridgeDetailsView()
        {
            ShopBridgeDetails objDetails = new ShopBridgeDetails();
            TempData.Remove("ITEMPKID");
            return View(objDetails);
        }


        [HttpGet]
        // GET: ShopBridgeDetails
        public ActionResult ShopBridgeDetails()
        {
            ShopBridgeDetails objDetails = new ShopBridgeDetails();
            try
            {
                if (TempData["ITEMPKID"] != null)
                {
                    objDetails.Pkid = Convert.ToInt32(TempData["ITEMPKID"]);
                    TempData.Keep("ITEMPKID");
                    objDetails.FetchGridDetails(objDetails);

                }
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return View(objDetails);
        }

        /// <summary>
        /// This is post method to save or update the Details
        /// </summary>
        /// <param name="objDetails"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult ShopBridgeDetails(ShopBridgeDetails objDetails)
        {
            try
            {
                objDetails.SaveShopBridgeDetails(objDetails);
            }
            catch (Exception ex)
            {
                objDetails.Message = " Something went wrong .Please Try again later";
                objDetails.StatusID = -1;

            }
            return View(objDetails);
        }


        /// <summary>
        /// this meyhod is to fetch saved details from database
        /// </summary>
        /// <returns></returns>
        public ActionResult FetchSavedDetailsGrids()
        {
            ShopBridgeDetails objDetails = new ShopBridgeDetails();
            try
            {
                objDetails.FetchGridDetails(objDetails);
                return Json(new { data = objDetails.listSavedDetails }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// this is for editing the details
        /// </summary>
        /// <param name="SelectedRow"> it is primary key </param>
        /// <returns></returns>
        public ActionResult ItemEdit(string SelectedRow)//edit
        {
            TempData["ITEMPKID"] = SelectedRow;//Employee id
            TempData.Keep("ITEMPKID");
            return Json(JsonRequestBehavior.AllowGet);
        }


        /// <summary>
        /// this is to delete data
        /// </summary>
        /// <param name="SelectedRow">it is primary key</param>
        /// <returns></returns>
        public ActionResult DeleteItem(int SelectedRow)//edit
        {
            ShopBridgeDetails objDetails = new ShopBridgeDetails();
            try
            {
                objDetails.Pkid = SelectedRow;
                objDetails.Delete(objDetails);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Json(1, JsonRequestBehavior.AllowGet);
        }
    }
}