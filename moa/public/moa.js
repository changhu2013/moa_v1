/**
 * 自定义指令
 */
angular.module('moaDirective', [])
    .controller('moaGridController', ['$scope', '$http', function($scope, $http){
        $scope.data = [];
        $scope.loadData = function(){
            $http({
                method : 'POST',
                url : $scope.dataurl,
                params : {
                    skip : $scope.skip,
                    limit : $scope.limit
                }
            }).success(function(data){
                $scope.data = data || [];
            });
        };
    }])
    .directive('moaGrid', ['$http', function($http){
        return {
            restrict : 'E',
            replace : false,
            transclude : true,
            templateUrl : '/tpls/moa-grid.tpl.html',
            controller : 'moaGridController',
            scope : true,
            link : function(scope){

            },
            compile : function(element, attributes){
                var dataurl = attributes.dataurl,
                    title = attributes.title,
                    limit = attributes.limit,
                    clazz = attributes.class;
                return {
                    pre : function ($scope, iElement) {
                        $scope.title = title;
                        $scope.dataurl = dataurl;
                        $scope.skip = 0;
                        $scope.limit = limit;
                        $scope.clazz = clazz;

                        $scope.loadData();
                    }
                }
            }
        };
    }]);

