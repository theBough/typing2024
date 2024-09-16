function setup() {
  createCanvas(400, 400);
  myFont = loadFont("guerilla.ttf")
  textFont(myFont)
  buttonStuff();
  textStuff();
}

function draw() {
  background(220);
  textStuff();
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
  text("test",10,200)
}
function buttonStuff(){
  myButton = createButton("Click and I will show somethin")
  myButton.position(100,100);
  //myButton.style("font-family")
  myButton.style("cursor", "pointer");
  myButton.style("background-color", "#e4c1f9");
  //myButton.mousePressed(spitFacts)
}
