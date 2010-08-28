var canvas;

function init(){
	canvas = new Canvas('pingos');
	setInterval(atualizar,10);
}

function onCanvasClick(e){
	canvas.pingar(e.pageX,e.pageY);
}

function atualizar(){
	canvas.atualizar();
}