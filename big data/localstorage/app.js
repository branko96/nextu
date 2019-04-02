
var formRegistro = document.getElementsByClassName('registro')[0],
    formReserva  = document.getElementsByClassName('reserva')[0];

// Almacenamos el objeto localStorage en una variable
var Storage = window.localStorage
// Verificar si localStorage tiene alguna
if (Storage.length > 0 && Storage.hasOwnProperty('usuario')) {
  // Si la llave usuario existe en localStorage mostrar el formulario de reserva
  formReserva.className = "reserva"
  formRegistro.className = "registro hide"
} else {
  // Si no existe se debe mostrar el formulario de regisro
  formRegistro.className = "registro"
  formReserva.className += "reserva hide"
}


var botonRegistro = document.getElementById('registrar'),
    botonReserva  = document.getElementById('reservar')
    inputDocumento = document.getElementById('numDocRes');




botonRegistro.addEventListener('click', function(e) {
  e.preventDefault()
  var documento=document.getElementById('numDoc').value;
  var nombre=document.getElementById('nombreCom').value;
  var correo=document.getElementById('correo').value;
  var nombreUsuario=document.getElementById('nombreUsuario').value;
  var password=document.getElementById('password').value;

  var obj_usuario={documento:documento,nombre:nombre,correo:correo,nombreUsuario:nombreUsuario,password:password};
  Storage.setItem('usuario',JSON.stringify(obj_usuario));
  alert('Usuario Registrado');
  var usuario=JSON.parse(Storage.getItem('usuario'));
  console.log(usuario);
})

botonReserva.addEventListener('click', function(e) {
  e.preventDefault()
  	var nombreRes=document.getElementById('nombreComRes').value;
	var correo=document.getElementById('correoRes').value;
	var nombreUsuarioRes=document.getElementById('nombreUsuarioRes').value;
	var documentoRes=document.getElementById('numDocRes').value;
	var destinoRes=document.getElementById('destino').value;

	var obj_reserva={documentoRes:documentoRes,nombreRes:nombreRes,correoRes:correo,nombreUsuarioRes:nombreUsuarioRes,destinoRes:destinoRes};
  	Storage.setItem('reserva',JSON.stringify(obj_reserva));
  	alert('Reserva Generada');
  	var reserva=JSON.parse(Storage.getItem('reserva'));
  	console.log(reserva);

})

inputDocumento.addEventListener('keypress', function(e) {
  if (e.which === 13) {
  		var documento=document.getElementById('numDocRes').value;
  		var user=JSON.parse(Storage.getItem('usuario'));
  		//console.log(user);
  		if (documento == user.documento) {
  			var nombre=document.getElementById('nombreComRes');
  			var correo=document.getElementById('correoRes');
  			var nombre_u=document.getElementById('nombreUsuarioRes');
  			nombre.disabled=false;
  			nombre.value=user.nombre;
  			correo.disabled=false;
  			correo.value=user.correo;
  			nombre_u.disabled=false;
  			nombre_u.value=user.nombreUsuario;
  		}else{
  			alert("no es usuario");
  		}
	  	
  }
})
