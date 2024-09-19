let myLetter,i,p, myImage;
let str = "Welcome to my game, good luck.";
function setup() {
  createCanvas(400, 400);
  myFont = loadFont("guerilla.ttf")
  myImage = new Pictures(20,200,40,40,"texasMac.png")
  myLetter  =""
  i=0;
  textFont(myFont)
  buttonStuff();
  textStuff();
  p = new Player(200,200,10,10,"#9D8189")
  
}
function draw() {
  background(220);
  textStuff();
  playerStuff();
  imageStuff();
}
function imageStuff(){
  myImage.display()
  
}
function playerStuff(){
  p.display()
  p.update()
}
function getLetter(){
  if(i < str.length){
    myLetter += str.charAt(i);
    i+=1;
    setTimeout(getLetter, 100)
  }
  
}
function textStuff(){
   push()
  fill("#D8E2DC")
  rect(0,0,400,75)
  pop()
  textSize(50)
  
  push()
  fill("#9D8189")
  
  text("Typing",10,50)
  pop()
  
  textSize(15)
  text(myLetter,10,200)
}
function buttonStuff(){
  myButton = createButton("Click and I will show somethin")
  myButton.position(100,100);
  //myButton.style("font-family")
  myButton.style("cursor", "pointer");
  myButton.style("background-color", "#e4c1f9");
  myButton.mousePressed(getLetter)
}
