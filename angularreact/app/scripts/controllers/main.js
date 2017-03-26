'use strict';

/**
 * @ngdoc function
 * @name angularreactApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularreactApp
 */
angular.module('angularreactApp')
.controller('MainCtrl', function ($scope,$q) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  function add(x,y){
    var q=$q.defer();
    setTimeout(function(){
      var result = x + y;
      if(result >= 0){
        q.resolve(x+y);
      }
      else{
        q.reject('negative value ' + result);
      }
    },100);
    return q.promise;
  }

  var startTime = Date.now();
  add(5,2)
    .then(function(result){
      return add(result,-13);
    })
    .then(function(result){
      return add(result,1);
    })
    .then(function(result){
      $scope.result = result;
      $scope.elapsedTime = Date.now() - startTime;
    })
    .catch(function(failure){
      $scope.failure = failure;
    })
    .finally(function(){
      $scope.elapsedTime = Date.now() - startTime;
    })
    ;
  /*function add(x,y,callback){
    $timeout(function(){
      callback(x+y);
    },100);
  }

  var startTime = Date.now();
  add(5,2,function(result){
      add(result,3, function(result){
        add(result,1, function(result){
          $scope.result = result;
          $scope.elapsedTime =Date.now()-startTime;
        });
      });
    });*/


});
