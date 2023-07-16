// factory.js
angular.module('myApp')
  .factory('myFactory', function() {
    var factory = {};

    factory.someFunction = function() {
      console.log('Factory function called!');
      return 'Hello from factory!';
    };

    return factory;
  });
