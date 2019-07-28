
angularFormsApp.controller('efController',
    function efController($scope, $window, DataService) {

        $scope.employee = DataService.employee;

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration",
            "Computer"
        ];

        $scope.submitForm = function () {
            debugger;
        };

        $scope.cancelForm = function () {
            debugger;
        };

    });