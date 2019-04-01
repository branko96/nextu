var ruta = 'https://'+window.location.host;

var db= firebase.database();
var vm=new Vue({
	el: '#app',
	data: {
    perfil:{
      username:'branko96',
      password:'1234',
      ciudad:'Bahia',
      direccion:'san martin'
    }
  },
	methods:{
    guardar_perfil(){
      var username=this.perfil.username;
      var password=this.perfil.password;
      var ciudad=this.perfil.ciudad;
      var direccion=this.perfil.direccion;
      db.ref('/perfiles/'+username).set({
          username:username,
          password:password,
          ciudad:ciudad,
          direccion: direccion
      });
    }
  },
  mounted(){
    
  }
});
