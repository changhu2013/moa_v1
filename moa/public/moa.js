/**
 * 自定义指令
 */
angular.module('moaDirective', [])
    .controller('moaTableController', ['$scope', '$http', function($scope, $http){

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

        $scope.generateHref = function(data){
            var link = $scope.link;
            if(typeof link == 'string'){
                var args = link.split('/:');
                var href = args[0];
                for(var i = 1, len = args.length;i < len; i++){
                    var arg = args[i];
                    if(typeof data[arg] == 'string'){
                        href += '/' + data[arg];
                    }else {
                        href += '/' + arg;
                    }
                }
                return href;
            }
        }
    }])
    .directive('moaTable', ['$http', function($http){
        return {
            restrict : 'E',
            replace : true,
            transclude : true,
            templateUrl : '/tpls/moa-table.tpl.html',
            controller : 'moaTableController',
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
                    paging = attributes.paging || 'more',
                    link = attributes.link;

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

                        $scope.link = link;

                        $scope.loadData();
                    }
                }
            }
        };
    }])
    .directive('moaMedialist', ['$http', function($http){
        return {
            restrict : 'E',
            replace : true,
            transclude : true,
            templateUrl : '/tpls/moa-medialist.tpl.html',
            controller : 'moaTableController',
            scope : true,
            link : function(scope){

            },
            compile : function(element, attributes){
                var dataurl = attributes.dataurl,
                    title = attributes.title,
                    limit = attributes.limit || 10,
                    clazz = attributes.class,
                    mediaobject = attributes.mediaobject;
                    mediaheading = attributes.mediaheading,
                    mediabody = attributes.mediabody,
                    paging = attributes.paging || 'more',
                    link = attributes.link;

                return {
                    pre : function ($scope, iElement) {
                        $scope.title = title;
                        $scope.dataurl = dataurl;
                        $scope.skip = 0;
                        $scope.limit = limit;
                        $scope.clazz = clazz;
                        $scope.mediaobject = mediaobject;
                        $scope.mediaheading = mediaheading;
                        $scope.mediabody = mediabody;
                        $scope.paging = paging;
                        $scope.showMoreBtn = false;
                        $scope.link = link;

                        $scope.loadData();
                    }
                }
            }
        };
    }])
    .controller('moaTableController', ['$scope', '$http', function($scope, $http){

        $scope.root = {
            id : 'root'
        };

        var loadNodes = function(node){
            $http({
                method : 'POST',
                url : $scope.dataurl,
                params : {
                    pid : node.id
                }
            }).success(function(nodes){
                node.nodes = nodes;
            });
        };

        $scope.expandNode = function(node, element){

            loadNodes(node);
        };

    }])
    .directive('moaTree', function(){

        return {
            restrict : 'E',
            replace : true,
            transclude : true,
            templateUrl : '/tpls/moa-tree.tpl.html',
            controller : 'moaTableController',
            scope : true,
            compile : function(element, attributes){
                var dataurl = attributes.dataurl,
                    title = attributes.title,
                    clazz = attributes.class,
                    link = attributes.link;

                return {
                    pre : function ($scope, iElement) {
                        $scope.title = title;
                        $scope.dataurl = dataurl;
                        $scope.clazz = clazz;
                        $scope.link = link;

                        $scope.expandNode($scope.root);
                    }
                }
            }
        };

    });

