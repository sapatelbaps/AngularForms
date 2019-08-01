
angularFormsApp.controller('efController',
    ["$scope", "$window", "$routeParams", "DataService",
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

        $scope.shouldShowFullName = function () {
            return true;
        }

        $scope.submitForm = function () {
            debugger;
            // if we allow click of the "submit" button to user then we will perform validation after user clicks the submit button.
            $scope.$broadcast('show-errors-event');

            // If the form is invalid then we'll just return. It will automatically show all the error messages on UI.
            if ($scope.employeeForm.$invalid) return;

            if ($scope.editableEmployee.id == 0) {
                // insert new employee
                DataService.insertEmployee($scope.editableEmployee).then(
                    function (results) {
                        // success
                        $scope.employee = angular.copy($scope.editableEmployee);
                        $window.history.back();
                    },
                    function (results) {
                        // error
                        alert(results);
                    });
            }
            else {
                // update the employee
                DataService.updateEmployee($scope.editableEmployee);
            }

        };

        $scope.cancelForm = function () {
            $window.history.back();
        };

        $scope.resetForm = function () {
            $scope.$broadcast('hide-errors-event');
        };

    }]);