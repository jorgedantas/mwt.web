/**
 * Created by JorgeDantas on 15/12/2015.
 */
(function () {
    'use strict';
    angular.module('mwt').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$rootScope'];

    function HomeCtrl($rootScope) {
        var vm = this;

        $rootScope.user = {
            email: 'jorgedantas@gmail.com',
            nome: 'Jorge Dantas'
        };
        activate();

        function activate() {

        }
    };
})();