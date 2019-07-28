angularFormsApp.controller('efController',
    function efController($scope, efService) {
        $scope.employee = efService.employee;

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration",
            "Computer"];

        $scope.submitForm = function () {
            // If you put a breakpoint then this function will be called from the html component when submitted from the html tag at top or input tag at bottom.
            debugger;

        }
    }
);