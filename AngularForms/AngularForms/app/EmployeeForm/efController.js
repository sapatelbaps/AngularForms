
angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, $modalInstance, DataService) {

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 }; //indicates new value by passing some default value.

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration",
            "Computer"
        ];

        $scope.submitForm = function () {
            debugger;

            if ($scope.editableEmployee.id === 0) {
                // insert new employee
                DataService.insertEmployee($scope.editableEmployee);
            } else {
                // update the employee
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();
            $modalInstance.close(); // do our processing. resolve the promise

        };

        $scope.cancelForm = function () {
            debugger;
            //$window.history.back();
            $modalInstance.dismiss(); // don't save any changes on datamodel while calling dismiss. reject the promise.
        };

    });