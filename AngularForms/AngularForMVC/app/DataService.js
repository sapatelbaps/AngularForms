
angularFormsApp.factory('DataService',
    ["$http", function ($http) {

        var getEmployees = function () {
            // updated the promise to make a call to web api instead of MVC controller. Check the history of the file.
            return $http.get("api/EmployeeWebApi/Get");
        }

        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    dateHired: "07 July 2019",
                    breakTime: "07 July 2019 3:00 PM",
                    fullName: "Aham Brahmasmi",
                    notes: "The ideal employee. Just don't touch his red stapler.",
                    department: "Administration",
                    url: "https://www.linkedin.com/in/sandip-patel-30108826/",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return $http.post("api/EmployeeWebApi/Post", newEmployee);
        };

        var updateEmployee = function (employee) {
            return $http.post("Employee/Update", employee);
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee,
            getEmployees: getEmployees

        };
    }]);