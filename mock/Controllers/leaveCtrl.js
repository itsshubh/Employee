(function() {
  var module = angular.module("EmployeeApp");

  var leaveCtrl = function($scope, service, $location, toastr) {

      $scope.open1 = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.minDate1 = $scope.minDate1 ? null : new Date();

          $scope.popup1.opened = true;
      };
      $scope.popup1 = {
          opened: false
      };
      $scope.open2 = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.minDate2 = $scope.minDate2 ? null : new Date();
          // $scope.minDate2 = $scope.minDate2.setDate($scope.minDate1.getDate() + 10);

          $scope.popup2.opened = true;
      };
      $scope.popup2 = {
          opened: false
      };
      // $scope.endDate = $scope.endDate.setDate($scope.endDate.getDate() + 10);
      $scope.format = 'dd.mm.yyyy';
      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.format =  'dd.MM.yyyy';
      $scope.setDate = function(year, month, day) {
            $scope.dt1 = new Date(year, month, day);
            $scope.dt2 = new Date(year, month, day);
      };


      //add leave
      $scope.type = "Leave";
      $scope.applyLeave = function(){
          $scope.leaveData = {username:$scope.newusername, name:$scope.newname, dateFrom:moment($scope.dt1).format('ll'), dateTo:moment($scope.dt2).format('ll'), reason:$scope.newreason, type:$scope.type};
          service.setLeaveData($scope.leaveData);
          toastr.info('Employee applied for a leave.', 'Information');
          $location.path('/leaveListing');
      }
  };
  module.controller("leaveCtrl", leaveCtrl);
}());
