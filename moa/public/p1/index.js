

//路由
angular.module('mainRouter', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){

        $routeProvider.when('/items', {
            templateUrl : '/p1/items.tpl.html',
            controller : 'main'
        }).when('/items/:itemCode', {
            templateUrl : '/p1/item.tpl.html',
            controller : 'main'
        }).otherwise({
            redirectTo : 'items'
        });

    }]);

//主程序
angular.module('moa', ['mainRouter'])
    .controller('main', function ($scope) {

        $scope.items = [{
            itemCode : 'XX',
            itemName : 'NN'
        }];

    });