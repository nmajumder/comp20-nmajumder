function init() {
	canvas = document.getElementById("game_canvas");
	ctx = canvas.getContext('2d');
	img = new Image(); 
	img.src = 'pacman10-hp-sprite.png';
	img.onload = function() {
		ctx.drawImage(img, 322, 2, 464, 135, 0, 0, 464, 135);
	}
}