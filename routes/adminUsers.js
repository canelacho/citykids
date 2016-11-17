module.exports = function(app){

console.log('Route to area successful');

	loadUsers = function(req, res){
		
		res.render('adminUsers');
	};


	// Link routes

	app.get('/adminUsers', loadUsers);
};