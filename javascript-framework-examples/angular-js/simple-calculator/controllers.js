(function () {
  "use strict";
  
  // Create the functionality for the angular application controller
  angular.module("myApp.controllers", []).controller("CalculatorController", function($scope) {
    $scope.numberOne = 0; // Default first number
    $scope.numberTwo = 0; // Default second number
    
    // Default operation
    $scope.operation = "add";
    
    // Based on the selection from the list, update the view
    $scope.result = function () {
      switch($scope.operation) {
        case "add":
          return ($scope.numberOne + $scope.numberTwo);
          break;
        case "subtract":
          return ($scope.numberOne - $scope.numberTwo);
          break;
        case "multiply":
          return ($scope.numberOne * $scope.numberTwo);
          break;
        case "divide":
          return ($scope.numberOne / $scope.numberTwo);
        default:
          break;
      }
    };
  });
  
}());