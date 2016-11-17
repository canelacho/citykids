module.exports = function(app){

	loadMyGallery = function(req, res){
		console.log('Route to area successful');
		res.render('gallery');
	};


	// Link routes

	app.get('/gallery/', loadMyGallery);
};