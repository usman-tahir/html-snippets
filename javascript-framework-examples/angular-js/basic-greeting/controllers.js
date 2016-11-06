(function () {
  "use strict";
  
  angular.module("myApp", []).controller("SimpleDate", function($scope) {
    $scope.helloMessages = ["Hello", "Bonjour", "Hola", "Ciao", "Hallo"];
    $scope.greeting = $scope.helloMessages[0];
    $scope.date = new Date();
    $scope.getRandomHelloMessage = function () {
      $scope.greeting = $scope.helloMessages[parseInt((Math.random() * $scope.helloMessages.length))];
    }
  });
  
}());