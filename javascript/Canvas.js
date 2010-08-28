function Canvas(id){
	var indicePingos = 0;
	var pingos = [];
	var elem = document.getElementById(id);
	elem.onclick = onCanvasClick;
	var context = elem.getContext('2d');
	context.lineWidth = 4;
	
	this.pingar = function(x,y){
		pingos.push(new Pingo(x,y,this));
	}
	
	this.atualizar = function(){
		context.clearRect(0,0,elem.width,elem.height);
		for (var i=0;i < pingos.length;i+=1){
			pintar_pingo(pingos[i]);
		}
	}
	
	function pintar_pingo(pingo){
		context.strokeStyle = pingo.getCor();
		context.beginPath();
		context.arc(pingo.getX(),pingo.getY(),pingo.getRaio(),0,Math.PI*2,true);
		context.stroke();
		context.closePath();
	}
	
	this.getPingos = function(){
		return pingos;
	}
	
	this.getIndicePingos = function(){
		return indicePingos;
	}
	
	this.incrementarIndicePingos = function(){
		indicePingos++;
	}
}