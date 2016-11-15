var app = angular.module('galleryApp', ['ngMaterial']);

app.controller('galleryCtrl',['$scope','$http', function($scope,$http){

	console.log('Connected to angular in Gallery controller');
	
	$scope.quantity = 3; // quantity to present in front
	$scope.verMas = function(){
		$scope.quantity +=3
	};
	

	$scope.like = function(likeName, indexLike){
		likeName = 'Marcelino Pan y Vino'
		$scope.pictures[indexLike].likes.push(likeName);
		console.log($scope.pictures[indexLike].likes);
	};

	$scope.pictures = [
		{
			name: 'kids1.png',
			group: 'Puppies',
			likes: ['pedroperez','juanalacubana','richardkleiderman'],
			tag: ['Group','Hallowen','Daniel','pedro'],
			comments: [{user: 'HernanPiña', msg: 'Que bello mi hijo, lo amo'},
									{user: 'PatriciaCabrera', msg: 'Hermoso, @hernanpiña que bueno es aprender..'},
									{user: 'Juliano', msg: 'Cool, @hernanpiña que bueno es aprender..'},
									{user: 'Juliano', msg: 'Cool, @hernanpiña que bueno es aprender..'}]
		},
		{
			name: 'kids2.png',
			room: 'Kitties',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			comments: [{user: 'HernanPiña', msg: 'Que bello mi hijo, lo amo'},
									{user: 'PatriciaCabrera', msg: 'Hermoso, @hernanpiña que bueno es aprender..'}],
			tag: ['room','Papaito','Jose']
		},
		{
			name: 'kidsparties.jpg',
			room: 'Bees',
			likes: ['antonioledezma','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			tag: ['room','chamfle','Andre']
		},
		{
			name: 'kids3.jpeg',
			room: 'Puppies',
			likes: ['brayan','pitijulli','traquitraqui','robelto','mariana','yuleisy'],
			tag: ['room','Hallowen','Daniel']
		},
		{
			name: 'kids2.png',
			room: 'Kitties',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane','pedroperez'],
			comments: [{user: 'HernanPiña', msg: 'Que bello mi hijo, lo amo'},
									{user: 'PatriciaCabrera', msg: 'Hermoso, @hernanpiña que bueno es aprender..'}],
			tag: ['room','Papaito','Jose']
		},
		{
			name: 'kidsparties.jpg',
			room: 'Bees',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			tag: ['room','chamfle','Andre']
		},
		{
			name: 'kids1.png',
			room: 'Puppies',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			tag: ['Group','Hallowen','Daniel']
		}
	]

	

}]);