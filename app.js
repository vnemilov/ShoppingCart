/**
 * Created by vemilov on 9.12.2015 г..
 */
var shopApp = angular.module('shopApp',['ui.router']);

shopApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home',{
            url:'/home',
            templateUrl:'home.html'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'products.html',
            controller: 'ProductsCtrl'
        });
        //// nested list with custom controller
        //.state('home.animal', {
        //    url: '/animal/:name',
        //    templateUrl: 'partials-home-animals.html',
        //    controller: 'AnimalCtrl'
        //});

});
shopApp.controller('ProductsCtrl', function ($scope, $http) {
    $http.get('laptops/laptops.json').success(function (data) {
        $scope.laptops = data;
    })
});