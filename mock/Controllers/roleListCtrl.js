(function() {
  var module = angular.module("EmployeeApp");

  var roleListCtrl = function($scope, service) {

        $scope.editRowa = function(row){
            row.status='Activated';
        }
        $scope.editRowr = function(row){
            row.status='Deactivated';
        }
        // $scope.status = "true";
        $scope.columnDefs = [
          {name: 's.no.', cellTemplate:`<div style="margin-left:25%; margin-top:6px;"> {{rowRenderIndex+1}}. </div>`},
          {name :'role',  displayName:'Roles'},
          {name :'status'},
          // {name : 'action', cellTemplate:`<div ng-if="row.entity.status==undefined"><button type="button"  class=" leave btn btn-success btn-xs" ng-click=" show=true; grid.appScope.editRowa(row.entity)  " ng-hide=show>Activate</button>
          //   <button type="button"  class=" leave btn btn-danger btn-xs" ng-click=" show=true; grid.appScope.editRowr(row.entity)" ng-hide=show>Deactivate</button></div> `}
          {name : 'action', cellTemplate:`<button type="button"  class=" leave btn btn-success btn-xs" ng-click=" show=true; grid.appScope.editRowa(row.entity)  " >Activate</button>
            <button type="button"  class=" leave btn btn-danger btn-xs" ng-click=" show=true; grid.appScope.editRowr(row.entity)">Deactivate</button></div> `}
        ];
        // $scope.change = function(){$scope.status = "accept"};
        $scope.roles = service.getRoleData();
  };
  module.controller("roleListCtrl", roleListCtrl);


}());
