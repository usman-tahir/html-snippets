(function () {
  "use strict";
  
  // The myApp Controller
  angular.module("myApp.controllers", []).controller("FinanceController", function($scope) {
    $scope.salary = 0; // Set the salary value to 0
    $scope.percentage = 0; // Set the percentage value to 0
    
    // Calculate the result
    $scope.result = function() {
      return $scope.salary * $scope.percentage * 0.01;
    };
  });
  
}());