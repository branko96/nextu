var calculadora={
    display:document.getElementById("display").innerHTML,
    dividir:function(){
    	if (this.verificar_nulos()) {
			this.display+="/";
		}
    },
    multiplicar:function(){
    	if (this.verificar_nulos()) {
			this.display+="*";
		}
    },
    sumar:function(){
    	if (this.verificar_nulos()) {
			this.display+="+";
		}
    },
    restar:function(){
    	if (this.verificar_nulos()) {
			this.display+="-";
		}
    },
    punto:function(ultimo_caracter){
    	if (this.display != "0" && ultimo_caracter != "+" && ultimo_caracter != "-" && ultimo_caracter != "/" && ultimo_caracter != "*") {
			this.display+=".";
		}
    },
  	total:function(){
  		if (this.display != "-" && this.display != "+") {
			this.display=this.display+"="+eval(this.display);
		}
  	},
  	verificar:function(tecla){
  		if (tecla != "punto" && tecla != "por" && tecla != "dividido" && tecla != "mas" && tecla != "menos" && tecla != "igual") {
  			return true;
  		}else{
  			return false;
  		}
  	},
  	verificar_nulos:function(){
  		if (this.display != "" && this.display != "0") {
  			return true;
  		}else{
  			return false;
  		}
  	},
  	resetear:function(){
  		this.display="0";
  	},
  	teclea:function(tecla){
  		if (this.display == "0" && this.verificar(tecla)) {
  			this.display="";
  		}

		switch(tecla){
			case "dividido":
				this.dividir();
				break;
			case "por":
				this.multiplicar();
				break;
			case "menos":
				this.restar();
				break;
			case "mas":
				this.sumar();
				break;
			case "on":
				this.resetear();
				break;
			case "punto":
				var ultimo_caracter=this.display[this.display.length-1];
				this.punto(ultimo_caracter);
				break;
			case "igual":
				if (this.verificar_nulos()) {
					this.total();
				}
				break;
			default:
				this.display+=tecla;
		}
		document.getElementById("display").innerHTML=this.display;

  	}		
}

// function calculadora(total, accion) {
//   this.total = total;
//   this.accion=accion;
// }

var tecla=document.getElementsByClassName("tecla");
//console.log(tecla);
for (var i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('click',function() {calculadora.teclea(this.id)}, false);
}

//console.log(calculadora);

