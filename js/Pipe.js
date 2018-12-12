(function (argument) {
	  var Pipe = window.Pipe = function (argument) {
	  	     this.w = 52;
	  	     this.h = 320;
	  	     this.h1 = parseInt(Math.random()*270)+50;
	  	     this.space = 140;
	  	     this.h2 = game.canvas.height-112-this.h1-this.space;
	  	     this.x = game.canvas.width;
            game.pipeArr.push(this);
	  }
	  Pipe.prototype.render = function (argument) {
	    game.ctx.drawImage(game.R["pipe_up"],0,this.h-this.h1,this.w,this.h1,this.x,0,this.w,this.h1);
	    game.ctx.drawImage(game.R["pipe_down"],0,0,this.w,this.h2,this.x,this.h1+this.space,this.w,this.h2);
        game.ctx.fillStyle = "black";
	  }
	  Pipe.prototype.update = function (argument) {
	  	   this.x-=3;

	  	   this.x1 = this.x;
	  	   this.x2 = this.x+this.w;
	  	   this.y1 = this.h1;
	  	   this.y2 = this.h1+this.space;

	  	   if(game.bird.x2>this.x1&&game.bird.y1<this.y1&&game.bird.x1<this.x2||
              game.bird.x2>this.x1&&game.bird.y2>this.y2&&game.bird.x1<this.x2
	  	   	){
	  	   	     clearInterval(game.timer);
	  	   }
	  }
})()