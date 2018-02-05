(function() {
  var module = angular.module("EmployeeApp");

  var userListCtrl = function($http, $scope, RowEditor, service) {
        $scope.editRowa = function(row){
            row.status='Activated';
        }
        $scope.editRowr = function(row){
          row.status='Deactivated';
        }

        var vm = this;
        // vm.editRowa = RowEditor.editRowa;
        // vm.editRowr = RowEditor.editRowr;
        vm.editRow  = RowEditor.editRow;
        vm.gridOptions = {
          columnDefs: [
            // { name: 's.no.', cellTemplate:`<div style="margin-left:50%"> {{rowRenderIndex+1}} </div>`},
            { name: 'role'},
            { name: 'username'},
            { name: 'name'},
            { name: 'email'},
            { name: 'createdon', width: 180},
            // { name: 'status', enableCellEdit: false},
            { name: 'action', cellTemplate: '../Templates/edit-button.html'}
          ],
          // enableRowSelection: true,
          exporterSuppressColumns: [ 'action' ],
          enableFiltering : true,
          paginationPageSizes: [3,6,9],
          paginationPageSize: 3,
          exporterPdfDefaultStyle: {fontSize: 9},
          exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
          exporterPdfOrientation: 'portrait',
          exporterPdfPageSize: 'LETTER',
          exporterPdfMaxGridWidth: 500,
          // treee view grid gridOptions
          enableSorting: true,
          showTreeExpandNoChildren: false,
          enableRowSelection: true,
          enableRowHeaderSelection: false,
          multiSelect: true,
          // noUnselect: true,
          modifierKeysToMultiSelect: false,
          onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
          }
        };
        // getting all the roles
        $scope.vari = service.getRoleData();
        $scope.roles = [];
        angular.forEach($scope.vari, function(value, key) {
            if (value.status == "Activated") {
                $scope.roles.push(value.role);
            }
        });

        vm.gridOptions.data1 = service.getUserData();

        vm.gridOptions.data2 = [];
        for (var i = 0; i < $scope.roles.length; i++) {
            vm.gridOptions.data2.push({role: $scope.roles[i], $$treeLevel: 0, children: []});
        }

        for (var i = 0; i < vm.gridOptions.data1.length; i++) {
            for(var j = 0; j<$scope.roles.length; j++){
                if(vm.gridOptions.data1[i].role == $scope.roles[j]){
                    vm.gridOptions.data2[j].children.push(vm.gridOptions.data1[i]);
                }
            }
        }
        // console.log(vm.gridOptions.data2);

        var writeoutNode = function( childArray, currentLevel, dataArray ){
          childArray.forEach( function( childNode ){
            if ( childNode.children.length > 0 ){
              childNode.$$treeLevel = currentLevel;
            }
          dataArray.push( childNode );
          writeoutNode( childNode.children, currentLevel + 1, dataArray );
        });
      };

    vm.gridOptions.data = [];
    writeoutNode( vm.gridOptions.data2, 0, vm.gridOptions.data );

        $scope.export = function(){
          if ($scope.export_format == 'csv') {
            var myElement = angular.element(document.querySelectorAll(".custom-csv-link-location"));
            $scope.gridApi.exporter.csvExport( $scope.export_row_type, myElement );
          } else if ($scope.export_format == 'pdf') {
            $scope.gridApi.exporter.pdfExport( $scope.export_row_type);
          };
        };
      };
  module.controller("userListCtrl", userListCtrl);


}());
