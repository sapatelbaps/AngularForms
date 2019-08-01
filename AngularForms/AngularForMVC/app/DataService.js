
angularFormsApp.factory('DataService',
    ["$http", function ($http) {

        var getEmployees = function () {
            return $http.get("Employee/GetEmployees");
        }

        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    dateHired: "07 July 2019",
                    breakTime: "07 July 2019 3:00 PM",
                    fullName: "Milton Waddams",
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
            return $http.post("Employee/Create", newEmployee);
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee,
            getEmployees: getEmployees

        };
    }]);