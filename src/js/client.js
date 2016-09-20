  
var app = angular.module('instaApp', ["ngRoute"]);
  
app.config(['$routeProvider',
  function($routeProvider) {
     $routeProvider
     .when('/', {
            templateUrl: 'static/logon.html'           
          })
     .when('/ShowFeeds/:userId', {
            templateUrl: 'static/showFeeds.html',
            controller: 'instaCtrl'
      })
      .otherwise({
            redirectTo: '/'
          });
}]);
 
 

app.controller('instaCtrl', function instaCtrl($scope, $http, $routeParams) {   
        console.log("inside instaCtrl:" + $routeParams.userId);     
         $http({
                method: 'GET',                
                url: 'http://localhost:8080/getFollowerPosts/' + $routeParams.userId + '/'
            }).then(function successCallback(response) {
                console.log(response.data);               
                $scope.followerPosts = response.data;                  
            }, function errorCallback(response) {
                console.log(response);
            }); 
}); 


/**
 * app.controller('ShowOrderController', function($scope, $routeParams) {
	$scope.order_id = $routeParams.orderId;
});
 * 
 */

 