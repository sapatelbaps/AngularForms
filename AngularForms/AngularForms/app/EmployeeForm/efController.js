angularFormsApp.controller('efController',
    function EmployeeFormController($scope, efService) {
        $scope.employee = efService.employee;
    }
);