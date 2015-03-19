angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout, Courts, $state) {
            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
            $scope.refresh = function () {
                $state.reload();
            };
        })

        .controller('CourtsCtrl', ['$scope', 'Courts', '$state', '$stateParams', function ($scope, Courts, $state, $stateParams) {
                Courts.getAll().success(function (data) {
                    $scope.courts = data.results;
                });
                $scope.doRefresh = function () {
                    Courts.getAll()
                            .success(function (data) {
                                $scope.courts = data.results;
                            })
                            .finally(function () {
                                // Stop the ion-refresher from spinning
                                $scope.$broadcast('scroll.refreshComplete');
                            });
                };
            }])

        .controller('CourtCtrl', ['$scope', 'Courts', '$state', '$stateParams', function ($scope, Courts, $state, $stateParams) {
                $scope.params = {id: $stateParams.id, content: $stateParams.content};

                $scope.optionen = [
                    {label: "eins", wert: 1},
                    {label: "zwei", wert: 2},
                    {label: "drei", wert: 3},
                    {label: "vier", wert: 4},
                    {label: "fuenf", wert: 5}
                ];
                $scope.anzahl = $scope.optionen[0];
                $scope.dauer = $scope.optionen[1];

                $scope.slots = [
                    {epochTime: 12600, step: 15, format: 12},
                    {epochTime: 54900, step: 1, format: 24}
                ];

                $scope.submit = function () {
                    if ($scope.anzahl) {
                        var neuerWert = this.anzahl.wert;
                        Courts.get($stateParams.id).success(function (data) {
                            var alterWert = data.anzahl;
                            neuerWert = neuerWert + alterWert;
                            Courts.edit($stateParams.id, {anzahl: neuerWert}).success(function (data) {
                                $state.go('app.home', null, {reload: true});
                            });
                        });


                    }
                };

            }]);


