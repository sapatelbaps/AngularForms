using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularForMVC.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularForMVC.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult GetEmployees()
        {
            List<EmployeeVM> list = new List<EmployeeVM>()
            {
                new EmployeeVM() { FullName = "Ghanshyam"},
                new EmployeeVM() { FullName = "Nilkanth"}
            };

            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(list, camelCaseFormatter),
                ContentType = "application/json"
            };

            return jsonResult;

            // Throw an error to angular client.
            // return new HttpStatusCodeResult(404, "Custom error message...");
        }

        public ActionResult Create(EmployeeVM employee)
        {
            return new HttpStatusCodeResult(201, "New employee added.");
        }
    }
}