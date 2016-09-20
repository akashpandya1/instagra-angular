  
var app = angular.module('instaApp', []);
  
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

 