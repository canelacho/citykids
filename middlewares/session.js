var User = require('../models/user');

module.exports = function(req, res, next){

	console.log(' ************ ')
	console.log(req.session);
	console.log(req.sessionID);
	console.log(' ************ ')

	if(req.session.CitykidsSession){
		User.findById(req.session.CitykidsSession.id, function(err, doc){
			console.log('este usuario fue encontrado para validar la sesion');
			console.log(doc);
			if(!err || typeof 	(req.session.CitykidsSession) != 'undefined'){
				console.log('Continue Sessison or Created... ok ');
				console.log(doc);
				res.locals = { user: doc };
				next();
			}else{
				console.log('Sessison Created error: ' + err);
				res.redirect("/login");
			}
		});
	}	else {
		console.log("there is NO session");
		res.redirect("/");
	}
}