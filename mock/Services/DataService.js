(function() {
  var DataService = function($http){

        this.gettime = function()
         {

           var date = new Date();
           var hours = date.getHours();
           var minutes = date.getMinutes();
           var ampm = hours >= 12 ? 'pm' : 'am'; hours = hours % 12;
           hours = hours ? hours : 12; // the hour '0' should be '12'
           minutes = minutes < 10 ? '0' + minutes : minutes;
           var strTime = hours + ':' + minutes + ' ' + ampm;
           return strTime;
         };


         // $http.get("../sample1.json")
         //     .then(function(response){
         //       var getAllUsers = response.data;
         //
         //     }, function() {
         //         console.log("error");
         //     });
         //
         //


        var userData = [{username:'user1', name:'user1name', email:'user1@gmail.com',createdon: this.gettime(), action:'', type:'User'},
                        {username:'user2', name:'user2name', email:'user2@gmail.com',createdon: this.gettime(), action:'', type:'User'},
                        {username:'user3', name:'user3name', email:'user3@gmail.com',createdon: this.gettime(), action:'', type:'User'}];
        this.l = userData.length;
        this.getAllUsers=function(){
        return userData;
      };
  }

  var module = angular.module("EmployeeApp");
  module.service("DataService", DataService);
}());
