var calculadora={
    display:document.getElementById("display").innerHTML,
    operacion:'',
    ult_resultado:0,
    ult_op:'',
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
    sumar:function(ultimo_caracter){
    	if (this.verificar_nulos() && ultimo_caracter != "+") {
  			this.display+="+";
  		}
    },
    restar:function(ultimo_caracter){
    	if (this.verificar_nulos() && ultimo_caracter != "-") {
        this.display+="-";
        // deberia poner la pantalla en blanco "" y nada mas
      }
    },
    punto:function(ultimo_caracter){
    	if (ultimo_caracter != "+" && ultimo_caracter != "-" && ultimo_caracter != "/" && ultimo_caracter != "*" && ultimo_caracter != ".") {
  			this.display+=".";
  		}
    },
  	total:function(){
        var separacion=this.display.toString().split("=");
        //console.log(separacion);
        var ult_operando=separacion[separacion.length-1];
        //agarro el ultimo numero de la operacion

        //console.log(ult_operando);
        //console.log(separacion.length);
        var u=ult_operando.toString().split(this.operacion);
        //console.log(u);
        if (u.length == 1) {
          //console.log(this.ult_op);
          var res=eval(this.ult_resultado+this.operacion+this.ult_op[this.ult_op.length-1]);
          //console.log(res);
          this.display=res;
    	    this.ult_resultado=res;
        }else{
          this.display=eval(ult_operando);
          this.ult_resultado=eval(ult_operando);
          this.ult_op=ult_operando.split(this.operacion);
          //console.log(this.ult_op[separacion.length-1]);
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
    cambio_signo:function(primer_caracter){
        if (this.verificar_nulos()){
          if(primer_caracter == "-") {
            this.display= this.display.slice(1,this.display.length);
          }else{
            this.display="-"+this.display;
          }
        }
    },
  	teclea:function(tecla){
  		// if (! this.verificar(tecla)) {
  		// 	this.display="";
  		// }

		switch(tecla){
			case "dividido":
				this.dividir();
        this.operacion='/';
				break;
			case "por":
				this.multiplicar();
        this.operacion='*';
				break;
			case "menos":
        var ultimo_caracter=this.display[this.display.length-1];
				this.restar(ultimo_caracter);
        this.operacion='-';
				break;
			case "mas":
        var ultimo_caracter=this.display[this.display.length-1];
				this.sumar(ultimo_caracter);
        this.operacion='+';
				break;
			case "on":
				this.resetear();
        this.operacion='';
				break;
      case "sign":
        var primer_caracter=this.display[0];
        this.cambio_signo(primer_caracter);
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
        if (this.verificar_nulos()) {
          this.display+=tecla;
        }else{
          this.display=tecla;
        }
		}

    //muestro en pantalla
      if (this.display.toString().length >8) {
        document.getElementById("display").innerHTML=this.display.toString().slice(0,8);
      }else{
  		  document.getElementById("display").innerHTML=this.display;
      }
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


