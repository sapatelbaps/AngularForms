using System;
using System.Collections.Generic;
using System.Net;
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
            // MVC will validate the model and set the flag automatically.
            if (ModelState.IsValid)
            {
                return new HttpStatusCodeResult(201, "New employee added.");
            }

            // Server side validation code below before creating any new entity.
            List<string> errors = new List<string>();
            errors.Add("Insert failed.");

            if (!ModelState.IsValidField("Notes"))
            {
                errors.Add("Notes must be at least five characters long.");
            }

            var s = string.Join("\n", errors);
            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError, String.Join(" ", errors));
        }
    }
}