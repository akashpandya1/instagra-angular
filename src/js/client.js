  
var app = angular.module('instaApp', ["ngRoute"]);
  
app.config(['$routeProvider',
  function($routeProvider) {
     $routeProvider.when('/ShowOrder/:orderId', {
	templateUrl: 'static/showorders.html',
	controller: 'ShowOrderController'
      });
}]);
 
app.controller('ShowOrderController', function($scope, $routeParams) {
	$scope.order_id = $routeParams.orderId;
});

app.controller('instaCtrl', function instaCtrl($scope, $http) { 
        console.log("inside instaCtrl");  
        $http({
                method: 'GET',                
                url: 'http://localhost:8080/getFollowerPosts/1/'
            }).then(function successCallback(response) {
                console.log(response.data);               
                $scope.followerPosts = response.data;                  
            }, function errorCallback(response) {
                console.log(response);
            });       
}); 

 