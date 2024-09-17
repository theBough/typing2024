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
    
  }
  
}
