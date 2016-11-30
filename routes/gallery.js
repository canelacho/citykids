module.exports = function(app){



	loadMyGallery = function(req, res){
		console.log('Route to area successful');
		res.render('gallery');
		console.log(req.session);
	};


	// Link routes

	app.get('/app/gallery/', loadMyGallery);
};