var mongoose = require ('mongoose');

module.exports = mongoose.model('Articulo',{
	id:      {type :String},
	tipo:    {type :String},
	marca:   {type :String},
	modelo:  {type :String},
	color:   {type :String},
	tejido:  {type :String},
	pais:    {type :String},
	fecha:   {type :String},
	talla:   {type :Number},
	cantidad:{type :Number}
});

