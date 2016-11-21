var app = angular.module('adminGalleryApp',['ngRoute']);


app.controller('adminGalleryCtrl',['$scope','$http','$window','$routeParams', function($scope,$http,$window,$routeParams){

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
   

}])
