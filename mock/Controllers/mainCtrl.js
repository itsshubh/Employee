(function() {

    var module = angular.module('EmployeeApp');
    var mainCtrl = function($scope, service){
          // $scope.msg = "hello";
          $scope.updates = service.getUpdate();
    };

    module.controller("mainCtrl", mainCtrl);
}());
