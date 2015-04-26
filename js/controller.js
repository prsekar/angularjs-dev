var App = angular.module('Knob', ['angular.filter']);
App.controller('myCtrl', function ($scope) {
    $scope.dialvalue1 = 69;
    $scope.dialvalue2 = 69;
    $scope.arrayOfObjects = [];
    $scope.initData = function() {
        $scope.arrayOfObjects = [
            {"name": "x1", "value": "100", "team": "giants"},
            {"name": "x2", "value": "200", "team": "giants"},
            {"name": "x3", "value": "200", "team": "cardinals"}
        ]
    }


    $scope.getDialValueFromAPI = function () {
        $scope.dialvalue1 = 45;
    }
})

App.directive('dialmeter', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            scope.getDialValueFromAPI()

            scope.$watch('dialvalue1', function (newVal) {
                if (newVal) {
                    $(element).val(scope.dialvalue1).trigger('change').knob(
                        {
                            "readOnly": true,
                            "fgColor": "#ffcc00",
                            "lineCap": "round",
                            "skin": "tron",
                            "bgColor": "white",
                            "inputColor": "#ffcc00",
                            "width": "75",
                            "thickness": ".3"
                        }
                    );
                    $(element).val(scope.dialvalue1)
                }
            }, true);
        }
    };
});
