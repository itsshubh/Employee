(function() {
      var module = angular.module("EmployeeApp");
      module.constant('PersonSchema', {
        type: 'object',
        properties: {
          username: { type: 'string', title: 'Username' },
          name: { type: 'string', title: 'Fullname' },
          email: { type: 'string', title: 'Email' }
        }
      });

      module.service("RowEditor", function RowEditor($rootScope, $modal) {
          var service = {};
          service.editRow = editRow;
          // service.editRowa = editRowa;
          // service.editRowr = editRowr;
          // function editRowa(row){
          //     row.status = 'Activated';
          //     return row.status;
          // }
          // function editRowr(row){
          //   row.status = 'Deactivated';
          //   return row.status;
          // }
          function editRow(grid, row) {
                $modal.open({
                templateUrl: '../Templates/edit-modal.html',
                controller: ['$modalInstance', 'PersonSchema', 'grid', 'row', RowEditCtrl],
                controllerAs: 'vm',
                resolve: {
                  grid: function () { return grid; },
                  row: function () { return row; }
                }
              });
            }
        return service;
      });
      function RowEditCtrl($modalInstance, PersonSchema, grid, row) {
          var vm = this;
          vm.schema = PersonSchema;
          vm.entity = angular.copy(row.entity);
          vm.form = [
            'username',
            'name',
            'email',
          ];
          vm.save = save;
          function save() {
            // Copy row values over
            row.entity = angular.extend(row.entity, vm.entity);
            $modalInstance.close(row.entity);
          }
      };


}());
