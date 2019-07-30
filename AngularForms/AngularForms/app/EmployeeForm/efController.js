
angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, DataService) {

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.topcodinglang = [
            "C#",
            "C",
            "C++",
            "JavaScript",
            "Java",
            "NodeJS",
            "jQuery",
            "CSS",
            "HTML",
            "T-SQL",
            "PSQL",
            "NoSQL"
        ];

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / 10);
        }

        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                // insert new employee
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                // update the employee
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
        };

        $scope.cancelForm = function () {
            $window.history.back();
        };

    });