function Pingo(x,y,canvasMae){
	var x = x;
	var y = y;
	var canvasMae = canvasMae;
	var raio = 0;
	var cor = randomizar_cor();
	var id = canvasMae.getIndicePingos();
	canvasMae.incrementarIndicePingos();
	
	setInterval(crescer,10);
	
	function randomizar_cor(){
		var cor = '#'
		var qnt_f = 0;
		var qnt_zero = 0;
		for (var i=0;i<3;i+=1){
			if ((qnt_f != 2 && Math.floor(Math.random()*10) % 2 == 0) || qnt_zero == 2){
				cor += 'ff';
				qnt_f += 1;
			} else {
				cor += '00';
				qnt_zero += 1;
			}
		}
		return cor;
	}
	
	function crescer(){
		raio += 5;
	}
	
	this.getX = function(){
		return x;
	}
	
	this.getY = function(){
		return y;
	}
	
	this.getRaio = function(){
		return raio;
	}
	
	this.getCor = function(){
		return cor;
	}
}