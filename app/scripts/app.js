(function () {
    "use strict";

    angular.module('myApp', ['ui.router', 'ngMaterial'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/gridList");

        $stateProvider
            .state('gridList', {
                url: "/gridList",
                templateUrl: "../views/gridList.html",
                controller: "gridListController as gridList"
            })
    });
})(window);