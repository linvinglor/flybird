(function (argument) {
	var Game  = window.Game = function (argument) {

		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		 this.w = document.documentElement.clientWidth;
		 this.h = document.documentElement.clientHeight; 
         this.canvas.width = this.w>420?420:this.w; 
         this.canvas.height = this.h>750?750:this.h;
          this.scene = 0;
          this.loadFile();
	}

	Game.prototype.start = function (argument) {
	    this.frame  = 0;
	    var self = this;
	    this.manager = new SceneManager();
	    this.manager.enter(this.scene);
	   this.timer = setInterval(function (argument) {
	      self.frame++;
	      self.clear();
	      self.manager.renderAndUpdate();
	      self.ctx.fillStyle = "black";
	      self.ctx.fillText("frame:"+self.frame,0,10);
	   },20);
	}
	Game.prototype.clear = function (argument) {
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
	}
	Game.prototype.loadFile = function (argument) {
         this.R = {
         	  "bg_day":"images/bg_day.png",
         	  "land":"images/land.png",
         	  "pipe_up":"images/pipe_down.png",
         	  "pipe_down":"images/pipe_up.png",
         	  "bird0_0":"images/bird0_0.png",
         	  "title":"images/title.png",
         	  "button_play":"images/button_play.png",
         	  "tutorial":"images/tutorial.png"
         };
         var count = 0;
         var picAmount = Object.keys(this.R).length;

         for(k in this.R){
            var src = this.R[k];
            this.R[k] = new Image();
            this.R[k].src = src;
            var self = this;
            this.R[k].onload = function function_name(argument) {
            	 count++;
            	 if(count==picAmount){
            	 	self.start();
            	 }
            }
         }
	}
})()