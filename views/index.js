function envioConsultaID() {

	  document.getElementById("mi_form").action="/api/articulos/consultaID/"+document.getElementById("id").value;

	return true;
}

function envioConsultaModelo() {
	  
	  document.getElementById("mi_form").action="/api/articulos/consultaModelo/"+document.getElementById("modelo").value;

	return true;
}

function envioEliminarID() {
	 
	document.getElementById("mi_form").action="/api/articulos/eliminarID/"+document.getElementById("id").value;

	return true;
}

function envioEliminarModelo() {
	 
	document.getElementById("mi_form").action="/api/articulos/eliminarModelo/"+document.getElementById("modelo").value;

	return true;
}

function envioComprar() {

	  document.getElementById("mi_form").action="/api/articulos/comprar/"+document.getElementById("id").value;

	return true;
}

function envioActualizarID() {

	
	 document.getElementById("mi_form").action="/api/articulos/actualizarID/"+document.getElementById("id_actual").value;

	 var tipo= document.getElementById("tipo");
	 var marca = document.getElementById("marca");
	 var modelo = document.getElementById("modelo");
	 var color = document.getElementById("color");
	 var tejido = document.getElementById("tejido");
	 var pais = document.getElementById("pais");
	 var fecha = document.getElementById("fecha");
	 var talla = document.getElementById("talla");
	 var cantidad = document.getElementById("cantidad");
	 var id=document.getElementById("id");
	
	 if(tipo.value.length==0) tipo.removeAttribute("name");
	 if(modelo.value.length==0) modelo.removeAttribute("name");
	 if(marca.value.length==0) marca.removeAttribute("name");
	 if(tejido.value.length==0) tejido.removeAttribute("name"); 
	 if(pais.value.length==0) pais.removeAttribute("name");
	 if(fecha.value.length==0) fecha.removeAttribute("name");
	 if(talla.value.length==0) talla.removeAttribute("name");
	 if(cantidad.value.length==0) cantidad.removeAttribute("name");
	 if(color.value.length==0) color.removeAttribute("name");
         if(id.value.length==0)	id.removeAttribute("name"); 
 

	 return true;
}

function envioActualizarModelo() {

	
	 document.getElementById("mi_form").action="/api/articulos/actualizarModelo/"+document.getElementById("modelo_actual").value;

	 var tipo= document.getElementById("tipo");
	 var marca = document.getElementById("marca");
	 var id = document.getElementById("id");
	 var color = document.getElementById("color");
	 var tejido = document.getElementById("tejido");
	 var pais = document.getElementById("pais");
	 var fecha = document.getElementById("fecha");
	 var talla = document.getElementById("talla");
	 var cantidad = document.getElementById("cantidad");
	 var modelo = document.getElementById("modelo");
	
	 if(tipo.value.length==0) tipo.removeAttribute("name");
	 if(marca.value.length==0) marca.removeAttribute("name");
	 if(tejido.value.length==0) tejido.removeAttribute("name"); 
	 if(pais.value.length==0) pais.removeAttribute("name");
	 if(fecha.value.length==0) fecha.removeAttribute("name");
	 if(talla.value.length==0) talla.removeAttribute("name");
	 if(cantidad.value.length==0) cantidad.removeAttribute("name");
	 if(color.value.length==0) color.removeAttribute("name");
	 if(id.value.length==0) id.removeAttribute("name");
	 if(modelo.value.length==0) modelo.removeAttribute("name");

	 return true;
}























