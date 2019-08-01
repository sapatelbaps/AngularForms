
var angularFormsApp = angular.module('angularFormsApp', ["ngRoute", "ui.bootstrap"]);

angularFormsApp.config(["$routeProvider", "$locationProvider",
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/Home.html",
                controller: "HomeController"
            })
            .when("/newEmployeeForm", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .when("/updateEmployeeForm/:id", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }]);

angularFormsApp.controller("HomeController",
    ["$scope", "$location", "DataService",
    function ($scope, $location, DataService) {

        // promise().then(successfun,errorfunc[optional]);
        DataService.getEmployees().then(function (result) {
            var data = result.data;
        });

        $scope.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm');
        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id);
        };

    }]);

