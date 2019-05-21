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
    	if (ultimo_caracter != "+" && ultimo_caracter != "-" && ultimo_caracter != "/" && ultimo_caracter != "*") {
			this.display+=".";
		}
    },
  	total:function(){
        var separacion=this.display.split("=");
        console.log(separacion);
        var ult_operando=separacion[separacion.length-1];
        //agarro el ultimo numero de la operacion

        console.log(ult_operando);
        console.log(separacion.length);
        if (separacion.length >1) {
          console.log(this.ult_op);
          console.log(this.ult_resultado+this.operacion+this.ult_op);
          this.display=this.display+"="+eval(this.ult_resultado+this.operacion+this.ult_op);
        }else{
          this.display=this.display+"="+eval(ult_operando);
          this.ult_resultado=eval(ult_operando);
          this.ult_op=ult_operando.split(this.operacion);
          console.log(this.ult_op[separacion.length-1]);
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
        this.operacion='/';
				break;
			case "por":
				this.multiplicar();
        this.operacion='*';
				break;
			case "menos":
				this.restar();
        this.operacion='-';
				break;
			case "mas":
				this.sumar();
        this.operacion='+';
				break;
			case "on":
				this.resetear();
        this.operacion='';
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


