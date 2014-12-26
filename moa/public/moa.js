/**
 * 自定义指令
 */
angular.module('moaDirective', [])
    .controller('moaGridController', ['$scope', '$http', function($scope, $http){
        $scope.data = [];

        var loadCallback = function(data){
            if(data instanceof Array){
                $scope.skip = $scope.skip + data.length;
                $scope.data = $scope.data.concat(data);
                if($scope.paging == 'more'){
                    if(data.length < $scope.limit){
                        $scope.showMoreBtn = false;
                    }else {
                        $scope.showMoreBtn = true;
                    }
                }else {
                    $scope.showMoreBtn = false;
                }
            }
        };

        $scope.loadData = function(){
            $http({
                method : 'POST',
                url : $scope.dataurl,
                params : {
                    skip : $scope.skip,
                    limit : $scope.limit
                }
            }).success(loadCallback);
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
                    limit = attributes.limit || 10,
                    clazz = attributes.class,
                    headers = attributes.headers,
                    cols = attributes.cols,
                    paging = attributes.paging || 'more';

                headers = typeof headers == 'string' ? headers.split(',') : [];
                cols = typeof cols == 'string' ? cols.replace(' ', '').split(',') : [];

                return {
                    pre : function ($scope, iElement) {
                        $scope.title = title;
                        $scope.dataurl = dataurl;
                        $scope.skip = 0;
                        $scope.limit = limit;
                        $scope.clazz = clazz;
                        $scope.headers = headers;
                        $scope.cols = cols;
                        $scope.paging = paging;
                        $scope.showMoreBtn = false;

                        $scope.loadData();
                    }
                }
            }
        };
    }]);

