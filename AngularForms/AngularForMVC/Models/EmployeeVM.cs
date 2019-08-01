using System.ComponentModel.DataAnnotations;

namespace AngularForMVC.Models
{
    public class EmployeeVM
    {
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        [MinLength(5)]
        public string Notes { get; set; }
        public string Department { get; set; }
        public bool perkCar { get; set; }
        public bool perkStock { get; set; }
        public bool perkSixWeeks { get; set; }
        public string PayrollType { get; set; }
    }
}