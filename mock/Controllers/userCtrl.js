(function() {
  var module = angular.module("EmployeeApp");

  var userCtrl = function($scope, service, $location, toastr) {

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.minDate = $scope.minDate ? null : new Date();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
      };

      $scope.vari = service.getRoleData();
      $scope.roles = [];
      angular.forEach($scope.vari, function(value, key) {
          if (value.status == "Activated") {
              $scope.roles.push(value.role);
          }
      });

      $scope.supervisers = ["Person1", "Person2", "Person3"];

      $scope.type = "User";
      $scope.addUser = function(){
        $scope.userData ={ role: $scope.newrole, username: $scope.newusername, name: $scope.newname, email: $scope.newemail, createdon:moment().format('LLL'), type:$scope.type, $$treeLevel: 1, children: [] };

          // $scope.userData = {role:$scope.newrole, username:$scope.newusername, name:$scope.newname, email:$scope.newemail, createdon:moment().format('LLL'), type:$scope.type};
          service.setUserData($scope.userData);
          toastr.info('A new Employee is added', 'Information');
          $location.path('/userListing');
      }
  };
  module.controller("userCtrl", userCtrl);
//   module.directive('validPasswordC', function () {
//     return {
//         require: 'ngModel',
//         link: function (scope, elm, attrs, ctrl) {
//             ctrl.$parsers.unshift(function (viewValue, $scope) {
//                 var noMatch = viewValue != scope.myForm.password.$viewValue
//                 ctrl.$setValidity('noMatch', !noMatch)
//             })
//         }
//     }
// });
  module.directive('wjValidationError', function () {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctl) {
        scope.$watch(attrs['wjValidationError'], function (errorMsg) {
          elm[0].setCustomValidity(errorMsg);
          ctl.$setValidity('wjValidationError', errorMsg ? false : true);
        });
      }
    };
  });

}());
