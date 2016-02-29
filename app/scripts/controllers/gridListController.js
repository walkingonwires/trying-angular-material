angular.module('myApp').controller('gridListController', function ($scope, dataService, $mdDialog) {
    var that = this;
    $scope.dataLoaded = false;

    dataService.getGridLabels().then(function (results) {
        var data = results.data;
        that.tiles = buildGridModel({
            background: "",
            title: ""
        });

        function randomSizing () {
            return Math.floor(Math.random() * 2) + 1
        }

        function randomColor () {
            return Math.floor(Math.random() * 10) + 1
        }
        function buildGridModel(tileTmpl) {
            var it, results = [];
            for (var j = 0; j < data.length; j++) {
                it = angular.extend({}, tileTmpl);
                it.title = data[j].title;
                it.span = {row: randomSizing(), col: randomSizing()};

                switch(randomColor()) {
                    case 1: it.background = "lightGray";    break;
                    case 2: it.background = "mint"; break;
                    case 3: it.background = "paleYellow";   break;
                    case 4: it.background = "blue"; break;
                    case 5: it.background = "seaFoamBlue"; break;
                    case 6: it.background = "skyBlue"; break;
                    case 7: it.background = "purple";   break;
                    case 8: it.background = "lightPurple";  break;
                    case 9: it.background = "salmon";   break;
                    case 10: it.background = "pink";    break;
                }

                results.push(it);
            }
            $scope.dataLoaded = true;
            return results;
        }
    });


    $scope.showColorDialog = function(ev, tile) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: '../views/dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            })
            .then(function(answer) {
                tile.background = answer;
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function DialogController ($scope, $mdDialog) {
        $scope.choices = {
            colors: [
                "lightGray",
                "mint",
                "paleYellow",
                "blue",
                "seaFoamBlue",
                "skyBlue",
                "purple",
                "lightPurple",
                "salmon",
                "pink"
            ]
        };

        this.newColor = '';


        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $scope.newColor = '';
            $mdDialog.cancel();
        };
        $scope.answer = function() {
            $mdDialog.hide($scope.newColor);
        };
    }

});
