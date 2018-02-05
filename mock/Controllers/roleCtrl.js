(function() {
  var module = angular.module("EmployeeApp");

  var roleCtrl = function($scope, service, $location, toastr) {

      $scope.type = "Role";
      $scope.addRole = function(){
          $scope.roleData = {role:$scope.newrole, type:$scope.type};
          service.setRoleData($scope.roleData);
          toastr.info('A new role is added', 'Information');
          $location.path('/roleListing');
      }
  };
  module.controller("roleCtrl", roleCtrl);
}());
