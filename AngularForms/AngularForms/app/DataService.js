angularFormsApp.factory('DataService',
    function () {
        var getEmployee = function (id) {
            if (id === 123) {
                return {
                    id: 123,
                    fullName: "Sandip Patel",
                    notes: "Self employed.",
                    department: "Computer",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return true;
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });