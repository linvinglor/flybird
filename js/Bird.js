(function (argument) {
	 var Bird = window.Bird = function (argument) {
	 	   this.x = game.canvas.width*(1-0.618);
	 	   this.y = 100;
	 	   this.rad = 0;
	 	   this.dy =0;
	 	   this.ddy = -0.2;
	 	   this.fsm = "下降";
	 }
	 Bird.prototype.render = function (argument) {
	      game.ctx.save();
	      game.ctx.translate(this.x,this.y);
	      game.ctx.rotate(this.rad);
	      game.ctx.drawImage(game.R["bird0_0"],-24,-24);
	      game.ctx.restore();
           game.ctx.fillStyle = "black";
	 }
	 Bird.prototype.update = function (argument) {
	    if(this.fsm=="下降"){
	    	this.dy+=0.2;
	 	    this.y+=this.dy;
	 	    this.rad =0.4;
            if(this.y>game.canvas.height-112){
               clearInterval(game.timer);
            }
	    }else{
	    	this.dy+=this.ddy;
	    	if(this.dy<0){
	    		 this.fsm = "下降" ;
	    	}
	    	if(this.y<0){
	    		 this.y = 0;
	    	}
	 	    this.y-=this.dy;
	    }

	     this.x1 = this.x-12;
	     this.x2 = this.x+12;
	     this.y1 = this.y-12;
	     this.y2 = this.y+12;
	 }
	 Bird.prototype.fly = function (argument) {
	        this.fsm = "上升";
            this.dy = 5.8;
            this.rad = -0.4;
	 }
})()