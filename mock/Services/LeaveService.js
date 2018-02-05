(function() {

    var module = angular.module('EmployeeApp');
        module.service('LeaveService',LeaveService);
        function LeaveService() {

            // $http.get("sample1.json")
            //     .then(function(response){
            //         var leaveData = response.data;
            //         this.getLeaveData = function() {
            //             return leaveData;
            //         }
            //       }, function() {
            //         console.log("error");
            //     });
            //


            var leaveData = [{username:'itsshubh', name: 'Shubham', dateFrom:'01/01/2018', dateTo:'05/01/2018', reason:'Medical leave', action:'', type:'Leave'}];
            this.getLeaveData = function() {
                return leaveData;
            };
        };


}());
