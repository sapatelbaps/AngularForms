using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularForMVC.Models
{
    public class EmployeeVM
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Notes { get; set; }
        public string Department { get; set; }
        public bool perkCar { get; set; }
        public bool perkStock { get; set; }
        public bool perkSixWeeks { get; set; }
        public string PayrollType { get; set; }
    }
}