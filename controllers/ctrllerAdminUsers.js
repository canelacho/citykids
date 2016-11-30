var app = angular.module('adminUsersApp',[]);

app.controller('adminUsersCtrl',['$scope', '$http', '$window',function($scope, $http, $window){

	console.log('Connected to angular in Gallery controller');

	var loadUsersList = function(){
		$http({method:'GET',url:'/app/adminUsers/load' }).success(function(data,status,headers,config) {
      if(data){
      	// console.log('valor json: ' + JSON.stringify(data, null, 4));
        $scope.users = data;
      }else{
        console.log('error loading user list')
      }
    });
	};
	

  $scope.saveUser = function(userData) {

  	// Checking values unrecheable by angular
  	var photoName = $window.photoName;
  	if(typeof photoName === 'object'){
  		photoName = "";
  	};
  	console.log('valor photoName: ' + photoName);


  	var photoFile = $window.photoFile;
  	if(typeof photoFile === 'object'){
  		photoFile = "";
  	};
  	console.log('valor photoFile: ' + photoFile);
  	
  	userData.photoname = photoName;
  	userData.photofile = photoFile;
  	userData.datecreate = Date();


  	$scope.uploadFile = function(files) {
	    var fd = new FormData();
	    //Take the first selected file
	    fd.append("file", files[0]);

	    var uploadUrl = "/img/";

	    console.log(fd);
	    console.log(uploadUrl);
	    
	   //  var filePaArriba = 
	   //  { 
	   //  	uploadUrl: uploadUrl, 
	   //  	fd: fd, 
	   //  	{
	   //      withCredentials: true,
	   //      headers: {'Content-Type': undefined },
	   //      transformRequest: angular.identity
	   //  	}
	  	// }

	   //  userData.uploadFile = filePaArriba;

	    // $http.post(uploadUrl, fd, {
	    //     withCredentials: true,
	    //     headers: {'Content-Type': undefined },
	    //     transformRequest: angular.identity
	    // }).success( ...all right!... ).error( ..damn!... );
		};

  	//console.log("dato del select que busco: " + userData[0].rol)
  	console.log('data que llega de form: ' + JSON.stringify(userData, null, 4));
    $http({method:'POST',url:'/app/adminUsers', data:{ userData } }).success(function(data,status,headers,config) {
      if(data){
        console.log('User added and saved');
        console.log(data);
        $scope.newUser = {};
      }else{
        console.log('error adding new user')
      }
    });
    loadUsersList();
  };


	$scope.editUser = function(id){
		console.log('entrando al controlador de edicion usuarios id: ' + id);
		$scope.btnSave = false;
		$scope.btnCancel = true;
		$scope.btnUpdate = true;
		$scope.idUpdate = id;

		$http({method:'GET',url:'/app/adminUsers/' + id }).success(function(data,status,headers,config) {
      if(data){
      	// console.log('valor json: ' + JSON.stringify(data, null, 4));
        console.log(data);
        $scope.newUser = data;
				$window.photoName = data.photoname;
				$window.photoName = data.photofile;
      }else{
        console.log('error loading user list')
      }
    });
	}


	$scope.updateUser = function(id, data){
		console.log('guardo cambios nuevos del usuarios id: ' + id);
		$http({method:'PUT', url:'/app/adminUsers/'+ id, data:{ data } }).success(function(data,status,headers,config){
			if(data){
				console.log('User edited and saved: ' + data.name);
				loadUsersList();
				$scope.newUser = {};
				$scope.btnSave = true;
				$scope.btnCancel = false;
				$scope.btnUpdate = false;
			} else {
				console.log('error editing user');
			}
		});
	}


	$scope.deleteUser = function(id){
		$http({method:'DELETE', url:'/app/adminUsers/' + id }).success(function(data,status,headers,config) {
			if(data){
				console.log('User deleted');
				loadUsersList();
			} else {
				console.log('error deleting user')
			}
		});
	}


	$scope.cancelUpdate = function(){
		$scope.newUser = {};
		$scope.btnSave = true;
		$scope.btnCancel = false;
		$scope.btnUpdate = false;
	};




	loadUsersList();
	$scope.btnSave = true;
	$scope.btnCancel = false;
	$scope.btnUpdate = false;
	
}]);