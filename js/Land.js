(function (argument) {
	   var Land = window.Land = function (argument) {
	          this.w = 336;
	          this.h = 112;
	          this.x = 0;
	   }
	   Land.prototype.render = function (argument) {
	      game.ctx.drawImage(game.R["land"],this.x,game.canvas.height-this.h);
	      game.ctx.drawImage(game.R["land"],this.w+this.x,game.canvas.height-this.h);
	      game.ctx.drawImage(game.R["land"],2*this.w+this.x,game.canvas.height-this.h);
	   }
	   Land.prototype.update = function (argument) {
	   	  this.x-=3;
	   	  if(this.x<-this.w){
	   	  	this.x = 0;
	   	  }
	   }
})()