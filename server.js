const express = require('express');
const app = express();
var mongoose = require('mongoose');
var path = require('path');

const port = 3000;
const bodyParser= require('body-parser');

//config files
var publicPath = path.join(__dirname, '/views');
app.use(express.static(publicPath));

var db = require('./app/config/db');
console.log("connecting--",db);
mongoose.set('useFindAndModify', false);
mongoose.connect(db.url,{ useNewUrlParser: true ,useUnifiedTopology: true}); //Mongoose connection created

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/inicio.html')
});

app.get('/consultaID', (req, res) => {
  res.sendFile(__dirname + '/views/consultaID.html')
});

app.get('/consultaModelo', (req, res) => {
  res.sendFile(__dirname + '/views/consultaModelo.html')
});

app.get('/crear', (req, res) => {
  res.sendFile(__dirname + '/views/crear.html')
});

app.get('/eliminarID', (req, res) => {
  res.sendFile(__dirname + '/views/eliminarID.html')
});

app.get('/eliminarModelo', (req, res) => {
  res.sendFile(__dirname + '/views/eliminarModelo.html')
});

app.get('/actualizarID', (req, res) => {
  res.sendFile(__dirname + '/views/actualizarID.html')
});

app.get('/actualizarModelo', (req, res) => {
  res.sendFile(__dirname + '/views/actualizarModelo.html')
});

app.get('/comprar', (req, res) => {
  res.sendFile(__dirname + '/views/comprar.html')
});

var Articulo = require('./app/models/articulos');

//CONSULTAR ARTÍCULOS
app.get('/api/articulos', function(req, res) {
     Articulo.find(function(err, articulo) {
      if (err)
         res.send(err);
     
      else{ 
		 res.json(articulo);
		 }
   });
});


app.get('/api/articulos/consultaID/:id', function(req, res) {
     Articulo.find({
      id: req.params.id
   },  function(err,articulo) {
      if (err)
         res.send(err);
      else res.json(articulo);
		/*res.send(articulo+"<html><head> <LINK href='index.css' rel='stylesheet' type='text/css'></head><body><form action='/api/articulos/comprarID/"+req.params.id+"' id='mi_form' method='GET'><h1><input type='hidden' value="+req.params.id +"id='id')/><input class='boton' type='submit' value='COMPRAR'/></h1></form></body></html>");*/
   });
});


app.get('/api/articulos/consultaModelo/:modelo', function(req, res) {
     Articulo.find({
      modelo: req.params.modelo
   },  function(err,articulo) {
      if (err)
         res.send(err);
      else res.json(articulo);
	   /*res.send(articulo+"<html><head> <LINK href='index.css' rel='stylesheet' type='text/css'></head><body><form action='/api/articulos/comprarModelo/"+req.params.modelo+"' id='mi_form' method='GET'><h1><input type='hidden' value="+req.params.modelo +"id='modelo')/><input class='boton' type='submit' value='COMPRAR'/></h1></form></body></html>");*/
   });
});



//CREAR ARTÍCULO
app.post('/api/articulos/crear', function (req , res) { 
var articulo = new Articulo (); 
articulo.id = req.body.id;
articulo.tipo = req.body.tipo;
articulo.marca = req.body.marca;
articulo.modelo = req.body.modelo;
articulo.color = req.body.color;
articulo.tejido = req.body.tejido;
articulo.pais = req.body.pais;
articulo.fecha = req.body.fecha;
articulo.talla = req.body.talla;
articulo.cantidad = req.body.cantidad;

articulo.save(function(err){
	if(err) 
         res.send(err); 
         res.json({ message : '¡Artículo con ID = '+ articulo.id +' añadido correctamente!' }); 
	}); 
});

//ELIMINAR ARTÍCULO
app.get('/api/articulos/eliminarID/:id', function (req, res) {
   Articulo.deleteOne({
      id: req.params.id,
   }, function(err,bear) {
      if (err)
         res.send(err);
      else res.json({ message: '¡Artículo con ID = '+ req.params.id + ' eliminado correctamente!' });
   });

  
});

app.get('/api/articulos/eliminarModelo/:modelo', function (req, res) {
   Articulo.deleteOne({
      modelo: req.params.modelo,
   }, function(err,bear) {
      if (err)
         res.send(err);
      else res.json({ message: '¡Artículo con MODELO = '+ req.params.modelo + ' eliminado correctamente!' });
   });
});

//ACTUALIZAR ARTÍCULO
app.post('/api/articulos/actualizarID/:id_actual', function(req, res) {
	    
      var articulo = new Articulo (); 
      
      Articulo.findOneAndUpdate({id:req.params.id_actual},req.body, function(err,bear) {
      if (err)
         res.send(err);
      else res.json({ message: '¡Artículo con ID = '+ req.params.id_actual + ' actualizado correctamente!' })
});


});


app.post('/api/articulos/actualizarModelo/:modelo_actual', function(req, res) {
	    
      var articulo = new Articulo (); 
      
      Articulo.findOneAndUpdate({modelo:req.params.modelo_actual},req.body, function(err,bear) {
      if (err)
         res.send(err);
      else res.json({ message: '¡Artículo con MODELO = '+ req.params.modelo_actual + ' actualizado correctamente!' })
});


});


//COMPRAR ARTÍCULO
app.get('/api/articulos/comprar/:id', function(req, res) {
     Articulo.find({
      cantidad:{$gt:0},id:req.params.id
   },  function(err,articulo) {
      if (err)
         res.send(err);
      else {
		if(articulo.toString().length==0) res.json({ message: 'El artículo seleccionado está agotado'});
		else {
			  Articulo.findOneAndUpdate({id:req.params.id},{$inc:{cantidad:-1}}, function(err,bear) {
		          if (err)
			 	res.send(err);
		          else res.json({message:'¡La compra del artículo con ID = ' + req.params.id + ' se ha realizado correctamente!'});	
			  });
		}		
	}
   });

});

app.listen(port,() => console.log('Escuchando en el puerto',port));
