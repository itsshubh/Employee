(function() {
    var module = angular.module("EmployeeApp");
    module.service('service', service);

    function service(){
        // this.roles = ['UI', 'Java', 'Big Data'];
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
         var update = [];
         var userData = [];
         var leaveData = [];
         var roleData = [
           {role: 'UI', type:'Role', status:'Activated'},
           {role: 'Java', type:'Role', status:'Activated'},
           {role: 'Big Data', type:'Role', status:'Activated'},
         ];

         this.getas = function(){
           return an_obj;
         }
         this.setUserData = function(object){
              userData.push(object);
              update.unshift(object);
         };
         this.getUserData = function(){
              return userData;
         };


         this.setLeaveData = function(object){
              leaveData.push(object);
              update.unshift(object);
         };
         this.getLeaveData = function(){
              return leaveData;
         };


         this.setRoleData = function(object){
              roleData.unshift(object);
              update.unshift(object);
         };
         this.getRoleData = function(){
              return roleData;
         };

         this.getUpdate = function () {
              return update;
         }
        // var data =  [{
        //   username:'user1', name: 'name1', email:'user1@gmail.com',
        //   createdon: this.gettime(), dateFrom:'01/01/2018', dateTo:'05/01/2018',
        //   reason:'Medical leave',role:'Big Data',
        //   action:'', type:'User'
        // },{
        //   username:'user2', name: 'name2', email:'user2@gmail.com',
        //   createdon: this.gettime(), dateFrom:'01/01/2018', dateTo:'05/01/2018',
        //   reason:'Leave', role:'UI',
        //   action:'', type:'Leave'
        // },
        // {
        //   username:'user2', name: 'name2', email:'user2@gmail.com',
        //   createdon: this.gettime(), dateFrom:'01/01/2018', dateTo:'05/01/2018',
        //   reason:'Leave',role:'Java',
        //   action:'', type:'Role'
        // }
        // ];
        // var data1 = [];
        // this.setUserData = function(username, name, email){
        //     data1 = {'username' : username,
        //     'name' : name,
        //     'email' : email };
        // };
        //
        // this.getUserData = function(){
        //     return data1;
        // };

    }
}());
