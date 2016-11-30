module.exports = function(app){

	loadMyDashboard = function(req, res){
		console.log('Route to dashboard area successful');
		res.render('dashboard');
		console.log(req.session);
	};


	// Link routes

	app.get('/app/dashboard/', loadMyDashboard);
};