/**
 * Created by JorgeDantas on 15/12/2015.
 */
(function () {
    'use strict';

    angular.module('mwt').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'home/index.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'account/login.html'
            })
            .when('/logout', {
                controller: 'LogoutCtrl',
                controllerAs: 'vm',
                templateUrl: 'account/login.html'
            })

    });
})();