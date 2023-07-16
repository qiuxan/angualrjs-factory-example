// controller.js
angular.module('myApp')
  .controller('myController', ['$scope', 'myFactory', function($scope, myFactory) {
    $scope.result = myFactory.someFunction();
  }]);
