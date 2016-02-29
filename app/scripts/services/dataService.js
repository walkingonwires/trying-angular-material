angular.module('myApp').service('dataService', function ($http) {
    var service = {};

    service.getGridLabels = function () {
        return $http.get('http://jsonplaceholder.typicode.com/photos?albumId=20').then(function (results) {
            return results;
        }, function (err) {
            console.log("something went wrong, could not get data", err);
        });
    };

    return service;

});