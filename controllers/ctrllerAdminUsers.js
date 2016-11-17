var app = angular.module('adminUsersApp',[]);

app.controller('adminUsersCtrl',['$scope', '$http',function($scope, $http){

	console.log('Connected to angular in Gallery controller');

	$scope.users = [
		{
			name: 'Juana',
			lastname: 'La Cubana',
			username: 'laquemasbaila',
			rol: 'Usuario'
		},
		{
			name: 'Richard',
			lastname: 'kleiderman',
			username: 'manosdeseda',
			rol: 'Usuario'
		},
		{
			name: 'Amanada',
			lastname: 'Riz',
			username: 'teacher_riz',
			rol: 'Teacher'
		},

	]
	
}]);