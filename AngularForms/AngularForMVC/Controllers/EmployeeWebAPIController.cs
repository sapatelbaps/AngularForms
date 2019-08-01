using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularForMVC.Models;

namespace AngularForMVC.Controllers
{
    public class EmployeeWebAPIController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<EmployeeVM> Get()
        {
            List<EmployeeVM> list = new List<EmployeeVM>()
            {
                new EmployeeVM() { FullName = "Ghanshyam"},
                new EmployeeVM() { FullName = "Nilkanth"}
            };

            return list;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]string value)
        {
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent("12345");
            return response;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}