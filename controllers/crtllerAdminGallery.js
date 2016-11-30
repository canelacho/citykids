var app = angular.module('adminGalleryApp',['ngRoute']);

app.directive('file', function(){
    return {
        scope: {
            file: '='
        },
        link: function(scope, el, attrs){
            el.bind('change', function(event){
                var files = event.target.files;
                var file = files[0];
                scope.file = file ? file.name : undefined;
                scope.$apply();
            });
        }
    };
});

app.directive('fileInput', function ($parse) {
    return {
        restrict: "EA",
        template: "<input type='file' />",
        replace: true,          
        link: function (scope, element, attrs) {
 
            var modelGet = $parse(attrs.fileInput);
            var modelSet = modelGet.assign;
            var onChange = $parse(attrs.onChange);
 
            var updateModel = function () {
                scope.$apply(function () {
                    modelSet(scope, element[0].files[0]);
                    onChange(scope);
                });                    
            };
             
            element.bind('change', updateModel);
        }
    };
});



app.controller('adminGalleryCtrl',['$scope','$http','$window','$routeParams','fileReader', function($scope,$http,$window,$routeParams,fileReader){

$scope.param = {};


 $scope.readFile = function () {            
        fileReader.readAsDataUrl($scope.file, $scope)
                  .then(function(result) {
                        $scope.imageSrc = result;
                    });
 };



	console.log('Connected to angular in Admin Gallery controller');
  // console.log('routeParams: ' + $routeParams);
  // console.log($routeParams);
  
  // obtengo del arreglo de x de ejs del front end el arreglo de imagenes en la carpeta uploads
  var newArray = window.x.split(",");
  // elimino del arreglo el .DS archivo oculto.
  // newArray.shift(); // pero en el servidor no existe el archivo oculto asi que mejor no quitar.
  // genero un nuevo array y publico para que angular muestre.
  $scope.fotos = newArray;

  $http({method:'GET',url:'/adminGallery' }).success(function(data,status,headers,config) {
    if(data){
    	// console.log('valor json: ' + JSON.stringify(data, null, 4));
      console.log(newArray);
    }else{
      console.log('error loading fotos')
    }
  });


	// // NOW UPLOAD THE FILES.
 //  $scope.uploadFiles = function () {
 //    var request = {
 //        method: 'POST',
 //        url: '/adminGallery/uploadFiles',
 //        data: formdata,
 //        headers: {
 //            'Content-Type': undefined
 //        }
 //  	};

	//   // SEND THE FILES.
	//   $http(request)
	//     .success(function (data, status, headers, config) {
	//         alert(data);
	//     })
	//     .error(function () {
	//     });
 //  };








  $scope.quantity = 3; // quantity to present in front
  $scope.watchMore = function(){
    $scope.quantity +=3
  };
  

  $scope.like = function(likeName, indexLike){
    likeName = 'Marcelino Pan y Vino'
    $scope.pictures[indexLike].likes.push(likeName);
    console.log($scope.pictures[indexLike].likes);
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



}])
