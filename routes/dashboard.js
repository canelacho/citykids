module.exports = function(app){

	loadMyDashboard = function(req, res){
		console.log('Route to area successful');
		res.render('dashboard');
	};


	// Link routes

	app.get('/dashboard/', loadMyDashboard);
};