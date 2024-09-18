function Player(x,y,w,h,col){
  this.x= x
  this.y= y
  this.w = w;
  this.h = h;
  this.col = col;
  
  this.display = function(){
    push()
    fill(this.col)
    ellipse(this.x, this.y, this.w, this.h)
    pop()
  }
  this.update = function(){
    //look to see if the user presses a key
    if(keyIsDown(37)){
      //the left arrow key
      this.x -= 5
    }
    if(keyIsDown(38)){
      //the up arrow key
      this.y -= 5
    }
    if(keyIsDown(39)){
      //the right arrow key
      this.x += 5
    }
    if(keyIsDown(40)){
      //the down arrow key
      this.y += 5
    }
  }
  
}
