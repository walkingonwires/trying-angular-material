angular.module('myApp').controller('menuController', function ($scope) {
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
});