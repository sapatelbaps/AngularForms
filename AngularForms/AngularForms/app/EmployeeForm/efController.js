
angularFormsApp.controller('efController',
    function efController($scope, $window, DataService) {

        $scope.employee = DataService.employee;

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
            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();

        };

        $scope.cancelForm = function () {
            debugger;
            $window.history.back();

        };

    });