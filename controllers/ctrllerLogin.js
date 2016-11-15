var app = angular.module('loginApp',['ngMaterial','ngMessages']);

app.controller('loginCtrl',['$scope','$http','$window', function($scope, $http, $window){

	console.log('Connected to angular in login controller');

	$scope.login = function(user, pwd){
		var userToCheck = {
			usr: user,
			pwd: pwd
		}

		if(typeof userToCheck.usr !== 'undefined' && typeof userToCheck.pwd !== 'undefined'){
			$http({method:'POST', url:'/login', data:{userToCheck} }).success(function(data, status, headers, config){
				if(data){
					$window.location.href = '/dashboard/' + data[0]._id;
				} else {
					console.log('error login Ususario');
				}
			});
		} else {
			console.log("Usuario o Clave invalida .... quizá no existe el usuario");
		}
		
	};

}]);