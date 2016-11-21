var 
		http = require('http'),
		express = require('express'),
		app = express(),
		serverPort = 3005,
		bodyParser = require('body-parser'),
		session = require('express-session'),
		mongoose = require('mongoose'),

		multer  = require('multer');
	  upload = multer({ dest: 'public/photos/uploadsTemp/' }),

		server = http.createServer(app);
		

var session_middleware = require('./middlewares/session.js');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/controllers',express.static('controllers'));
app.use('/routes',express.static('routes'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'secretcitykids',
	resave: false,
	saveUnitialized: false
}));
//app.use(formidable.parse({ keepExtensions: true }));

mongoose.connect('mongodb://localhost/citykids', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database Citykids');
  }
});


app.get('/', function(req, res){
	res.render('login');
});
	
app.get('/logout', function(req, res){
	req.session.destroy(function(err){
		if(!err){
			console.log(req.session);
			res.render('login');
		} else {
			console.log("error destoying session: " + err);
		}
	});
});

routes = require('./routes/login')(app);
routes = require('./routes/dashboard')(app);
routes = require('./routes/gallery')(app);

routes = require('./routes/adminUsers')(app);
routes = require('./routes/adminGallery')(app);

server.listen(serverPort, function(){
	console.log('Server running on ' + serverPort + ' port');
});