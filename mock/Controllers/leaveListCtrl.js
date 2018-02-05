(function() {
  var module = angular.module("EmployeeApp");

  var leaveListCtrl = function($scope, service, toastr) {
    $scope.editRowa = function(row){
        row.status='Accepted';
        toastr.info('Leave accepted', 'Information');
    }
    $scope.editRowr = function(row){
      row.status='Rejected';
      toastr.info('Leave rejected', 'Information');
    }
      $scope.gridOptions = {
        enableFiltering : true,
        paginationPageSizes: [3,6,9],
        paginationPageSize: 3
      };

      $scope.gridOptions.onRegisterApi = function(gridApi){
        $scope.gridApi = gridApi;
      }

      $scope.gridOptions.columnDefs = [
        {name: 's.no.',width:70, cellTemplate:`<div style="margin-left:50%"> {{rowRenderIndex+1}} </div>`},
        {field: 'username',displayName:'Applied By'},
        {name: 'dateFrom', type:'date',cellFilter: 'date:\'dd.MM.yyyy\'', displayName:'Date From'},
        {name: 'dateTo', type:'date',cellFilter: 'date:\'dd.MM.yyyy\'', displayName:'Date To'},
        {name: 'reason', displayName: 'Reason'},
        {name: 'status', enableCellEdit: false},
        {name: 'action', width:120, enableCellEdit: false, cellTemplate:`../Templates/leave-button.html`}
      ];

        $scope.gridOptions.data = service.getLeaveData();
  };
  module.controller("leaveListCtrl", leaveListCtrl);


}());
