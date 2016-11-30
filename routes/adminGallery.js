module.exports = function(app){

var fs = require('fs');

	loadPage = function(req, res){

		fs.readdir('./public/photos/uploads/', function(error, files){
			console.log('hay ' + files.length + ' imagenes en la carpeta');
      console.log('la primera es ' + files[1]);
      files.shift();

      console.log('===============');
			console.log('');
			console.log('===============');
			console.log(req.session);

      res.render('adminGallery', {files});
		}); 

	};


	postPhotos = function(req, res){
		console.log('===============');
		console.log(req.files);
		console.log(req.files.length);

		for(var x=0;x<req.files.length;x++) {
        //copiamos el archivo a la carpeta definitiva de fotos
       fs.createReadStream('./public/photos/uploadsTemp/'+req.files[x].filename).pipe(fs.createWriteStream('./public/photos/uploads/'+req.files[x].originalname)); 
       //borramos el archivo temporal creado
       fs.unlink('./public/photos/uploadsTemp/'+req.files[x].filename); 
    }  
    var pagina='<!doctype html><html><head></head><body>'+
               '<p>Se subieron las fotos</p>'+
               '<br><a href="/adminGallery">Retornar</a></body></html>';
      res.send(pagina); 
	}





// Link routes
	app.get('/app/adminGallery', loadPage);
  app.post('/app/adminGallery/postPhotos', upload.array('XimagenX',20), postPhotos);

};