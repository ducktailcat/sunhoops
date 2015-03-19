angular.module('myDirectives', [])
        .directive("timepicker", function () {
            return {
                restrict: 'AEC',
                template: '<span id="start-time-display">{{timedisplay}}</span><input id="start-time-input" type="time" step="900" ng-model="time">',
                scope: {
                    time: '=ngModel'
                },
                controller: function ($scope, $filter) {
                    $scope.$watch('time', function (nv, ov) {
                        console.log(nv);
                        var parts = nv.split(" ")[0].split(":");
                        var hours = parts[0];
                        var minutes = parts[1];
                        $scope.timedisplay = $filter('date')(new Date(2014, 03, 06, hours, minutes, 0), "H:mm");
                    });
                    $scope.time = "14:00";
                },
                link: function (scope, element, attr) {
                    scope.displayElement = element.find('span');
//                    scope.displayElement = element.find('span');
                    scope.displayElement.bind("click", function(event) {
                        console.log('test');
//                        scope.inputElement[1].hide();
//                        scope.inputElement[1].click();
                    });
                }
            };

        });


