self.addEventListener("message",function(e){
	var local=JSON.parse(e.data);
	console.log(local);
	var result=null;
    if (local.hasOwnProperty('documento')) {
		result=true;

	}else{
		result=false;
	}
	self.postMessage(result);
});