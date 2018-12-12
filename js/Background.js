(function (argument) {
	var Background = window.Background = function (argument) {
		
	    this.h = 512;
	    this.w = 288;
	     this.x = 0;
	}
	Background.prototype.render = function(argument) {
		game.ctx.fillStyle = "#4ec0ca";
		game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height-512);
		game.ctx.drawImage(game.R["bg_day"],this.x,game.canvas.height-512);
		game.ctx.drawImage(game.R["bg_day"],this.w+this.x,game.canvas.height-512);
		game.ctx.drawImage(game.R["bg_day"],2*this.w+this.x,game.canvas.height-512);
	}
	Background.prototype.update = function (argument) {
		 this.x -=2;
		if(this.x<-this.w){
			this.x =0;
		}
	}
})()