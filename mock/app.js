(function(){

    var mockapp = angular.module('EmployeeApp',['ui.router', 'ui.grid','ui.grid.treeView', 'ui.grid.selection', 'ui.grid.pagination', 'ui.grid.cellNav', 'ui.bootstrap', 'schemaForm', 'ngAnimate', 'toastr', 'ui.grid.exporter', 'ngTouch', 'ui.grid.moveColumns']);
    mockapp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl : "./Templates/main.html",
                controller: 'mainCtrl'
            })

            .state('applyLeave', {
                url: '/applyLeave',
                templateUrl : "./Templates/applyleave.html",
                controller: 'leaveCtrl'
            })

            .state('leaveListing', {
                url: '/leaveListing',
                templateUrl : "./Templates/leavelisting.html",
                controller: 'leaveListCtrl'
            })

            .state('addUser', {
                url: '/addUser',
                templateUrl: './Templates/adduser.html',
                controller: 'userCtrl'
            })

            .state('userListing', {
                url: '/userListing',
                templateUrl : "./Templates/userlisting.html",
                controller: 'userListCtrl as vm'
            })

            .state('addRole', {
                url: '/addRole',
                templateUrl : "./Templates/addrole.html",
                controller: 'roleCtrl'
            })

            .state('roleListing', {
                url: '/roleListing',
                templateUrl : "./Templates/rolelisting.html",
                controller: 'roleListCtrl'
            });
    });



}());
