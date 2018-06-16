var app = angular.module("app", []);

app.controller('emp', ['$scope', function($scope) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.doDoubleAndSum = function() {
        $scope.num1 = $scope.num1 * 2;
        $scope.num2 = $scope.num2 * 2;

        $scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
    }
}]);