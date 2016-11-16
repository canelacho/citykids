var app = angular.module('galleryApp', []);

app.controller('galleryCtrl',['$scope','$http', function($scope,$http){

	console.log('Connected to angular in Gallery controller');
	
	$scope.quantity = 3; // quantity to present in front
	$scope.watchMore = function(){
		$scope.quantity +=3
	};
	

	$scope.like = function(likeName, indexLike){
		likeName = 'Marcelino Pan y Vino'
		$scope.pictures[indexLike].likes.push(likeName);
	};


	$scope.sendInfoModal = function(picture,tags,comments){
		$scope.showNewModal = {
			picture: picture,
			tags: tags,
			comments: comments
		}
		
	};

	$scope.pictures = [
		{
			_id: 1,
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
			_id: 2,
			name: 'kids2.png',
			room: 'Kitties',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			comments: [{user: 'HernanPiña', msg: 'Que bello mi hijo, lo amo'},
									{user: 'PatriciaCabrera', msg: 'Hermoso, @hernanpiña que bueno es aprender..'}],
			tag: ['room','Papaito','Jose']
		},
		{
			_id: 3,
			name: 'kidsparties.jpg',
			room: 'Bees',
			likes: ['antonioledezma','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			tag: ['room','chamfle','Andre']
		},
		{
			_id: 4,
			name: 'kids3.jpeg',
			room: 'Puppies',
			likes: ['brayan','pitijulli','traquitraqui','robelto','mariana','yuleisy'],
			tag: ['room','Hallowen','Daniel']
		},
		{
			_id: 5,
			name: 'kids2.png',
			room: 'Kitties',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane','pedroperez'],
			comments: [{user: 'HernanPiña', msg: 'Que bello mi hijo, lo amo'},
									{user: 'PatriciaCabrera', msg: 'Hermoso, @hernanpiña que bueno es aprender..'}],
			tag: ['room','Papaito','Jose']
		},
		{
			_id: 6,
			name: 'kidsparties.jpg',
			room: 'Bees',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			tag: ['room','chamfle','Andre']
		},
		{
			_id: 7,
			name: 'kids1.png',
			room: 'Puppies',
			likes: ['pedroperez','juanalacubana','richardkleiderman','juanquercuto','ricardomontane'],
			tag: ['Group','Hallowen','Daniel']
		}
	]

	

}]);