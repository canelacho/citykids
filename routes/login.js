module.exports = function(app){

	User = require('../models/user');

	loginGet = function(req, res){
		res.render('login')
	}


	loginUser = function(req, res){
		console.log('Starting to login');
		console.log(req.body);

		User.find({ username: req.body.userToCheck.usr }, function(err, userFinded){
			console.log(userFinded);

			if(typeof userFinded[0] == 'undefined' || typeof userFinded[0] == null){
				console.log('Usuario NO encontrado... ' + err);
				res.send(false);
			} else {
				if(userFinded[0].username == req.body.userToCheck.usr && userFinded[0].pwd == req.body.userToCheck.pwd){
					req.session.CitykidsSession = {
						id: userFinded[0].id,
						user: userFinded[0].username
					}
					console.log("usuario encontrado y enviado a angular");
					res.send(userFinded);	
				}
			}

		});
	};

	// Link routes

	app.get('/login', loginGet);
	app.post('/login', loginUser);

};