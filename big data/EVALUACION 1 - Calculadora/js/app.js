var calculadora={
    display:document.getElementById("display").innerHTML,
    operacion:'',
    ult_resultado:0,
    a:0,
    b:0,
    ult_b:0,
    bucle:false,
    dividir:function(){
    	if (this.verificar_nulos()) {
			  //this.display+="/";
        this.a=this.display;
        this.display="";
        this.bucle=false;
		  }
    },
    multiplicar:function(){
    	if (this.verificar_nulos()) {
  			//this.display+="*";
        this.a=this.display;
        this.display="";
        this.bucle=false;
  		}
    },
    sumar:function(ultimo_caracter){
    	if (this.verificar_nulos() && ultimo_caracter != "+") {
  			//this.display+="+";
        this.a=this.display;
        this.display="";
        this.bucle=false;
  		}
    },
    restar:function(ultimo_caracter){
    	if (this.verificar_nulos() && ultimo_caracter != "-") {
        this.a=this.display;
        this.display="";
        this.bucle=false;
      }
    },
    punto:function(ultimo_caracter){
    	if (this.display = "" && ultimo_caracter != "+" && ultimo_caracter != "-" && ultimo_caracter != "/" && ultimo_caracter != "*" && ultimo_caracter != ".") {
  			this.display+=".";
  		}
    },
  	total:function(){
        this.b=this.display;
        console.log(this.b);
        if (this.bucle) {
         var res=eval(this.ult_resultado+this.operacion+this.ult_b);
          this.display=res;
        }else{
          var res=eval(this.a+this.operacion+this.b);
          this.display=res;
          this.ult_b=this.b;
        }
        this.ult_resultado=res;
        this.bucle=true;
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


var tecla=document.getElementsByClassName("tecla");
//console.log(tecla);
for (var i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('click',function() {calculadora.teclea(this.id)}, false);
}


