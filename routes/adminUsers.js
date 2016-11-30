module.exports = function(app){

var User = require('../models/user'); 

console.log('Route to area successful');

	loadPage = function(req, res){
		res.render('adminUsers');
	}; 

	loadUsers = function(req, res){
		
		var user = User.find({}, function(err, docs){
			console.log('get listado usuarios: '+ docs)
	    res.send(docs);
		});

		// res.render('adminUsers');
	};


	findOneUser = function(req, res){
		return User.findById(req.params.id, function(err, doc){
			if (!err) {
				console.log('find user by id: '+ doc)
				return res.send(doc);
			} else {
				return console.log(err);
			} 
		});
	};

	saveUser = function(req, res){
		// console.log(JSON.stringify(req.body, null, 4));

		var user = new User ({
			name: 			req.body.userData.name,
			lastname: 	req.body.userData.lastname,
			email: 			req.body.userData.email,
			username: 	req.body.userData.username,
			pwd: 				req.body.userData.pwd,
			rol: 				req.body.userData.rol,
			datecreate: req.body.userData.datecreate,
			status: 		req.body.userData.status,
			photoname: 	req.body.userData.photoname,
			photofile: 	req.body.userData.photofile
		});

		user.save(function(err){
			if(!err){
				console.log("User created");
			} else {
				console.log("Error creating user " + err)
			}
		});

		res.send(req.body);
	};


	updateUser = function(req, res){
		// console.log('editandini ' + req.params.id + ' y lalgunos body ' + JSON.stringify(req.body, null, 4));
		// console.log('====================================');
		// console.log(req.body.data.name);
		// console.log('====================================');
		return User.findById(req.params.id, function (err, user) {
	    user.name = req.body.data.name;
			user.lastname = req.body.data.lastname;
			user.email = req.body.data.email;
			user.username = req.body.data.username;
			user.pwd = req.body.data.pwd;
			user.rol = req.body.data.rol;
			user.status = req.body.data.status;
			user.photoname = req.body.data.photoname;
			user.photofile = req.body.data.phtofile;
	    return user.save(function (err) {
	      if (!err) {
	        console.log("user updated");
	      } else {
	        console.log(err);
	      }
	      return res.send(user);
	    });
	  });
		res.send(true);
	};


	deleteUser = function(req, res){
		return User.findById(req.params.id, function (err, user) {
	    return user.remove(function (err) {
	      if (!err) {
	        console.log("User removed");
	        return res.send(true);
	      } else {
	        console.log(err);
	      }
	    });
  	});
	};


	// Link routes
	app.get('/app/adminUsers', loadPage);
	app.get('/app/adminUsers/load', loadUsers);
	app.get('/app/adminUsers/:id', findOneUser);
	app.post('/app/adminUsers', saveUser);
	app.put('/app/adminUsers/:id', updateUser);
	app.delete('/app/adminUsers/:id', deleteUser);
};