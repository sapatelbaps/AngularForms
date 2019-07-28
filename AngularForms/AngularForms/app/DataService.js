angularFormsApp.factory('DataService',
    function () {
        return {
            employee: {
                fullName: "Sandip Patel",
                notes: "Self employed.",
                department: "Computer",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    }
);