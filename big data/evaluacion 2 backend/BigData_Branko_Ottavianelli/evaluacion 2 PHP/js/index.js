/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();

$(function(){

    $('select').material_select();


    /*$("#selectCiudad").change(function(){
        cargar(0);
    });
    $("#selectTipo").change(function(){
        cargar(0);
    });
    $("#rangoPrecio").change(function(){
        cargar(0);
    });*/
    $("#formulario").submit(function(e){
        e.preventDefault();
        cargar(0);
    });
   $("#mostrarTodos").click(function(){
       cargar(1);
   });
});
function cargar(tipo){
    $("#results").html("");
    $("#cargando").show("fast");
    setTimeout(function(){
        $("#cargando").hide("fast");
        actualizar(tipo);
    },1400);

}
function actualizar(todos){
    $.ajax({
        method: "POST",
        url: "buscador.php",
        data: { todos: todos, tipo: $("#selectTipo").val(), ciudad: $("#selectCiudad").val(),precio:$("#rangoPrecio").val()}
    }).done(function( msg ) {
        $("#results").html(msg);
    });
}
