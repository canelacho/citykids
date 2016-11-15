module.exports = function(app){

	loadMyDash = function(req, res){
		console.log('Route to area successful');
		res.render('dashboard');
	};


	// Link routes

	app.get('/dashboard/:id', loadMyDash);
};