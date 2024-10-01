let myLetter,i,p, myImage,secondCharacter,isBlackJacketOn,myInput;
let str = "Welcome to my game, good luck.";
function setup() {
  createCanvas(400, 400);
  myFont = loadFont("guerilla.ttf")
  myImage = new Pictures(20,200,40,40,"texaMacNew.png")
  secondCharacter = new Pictures(360,200,40,50,"secondCar.png")
  myLetter  =""
  i=0;
  textFont(myFont)
  //buttonStuff();
  textStuff();
  p = new Player(200,200,10,10,"#9D8189")
  isBlackJacketOn = false;
  inputBoxStuff();
}
function draw() {
  background(220);
  textStuff();
  if(isBlackJacketOn){
    resolveBlackJacket()
  }else{
    playerStuff();  
  }
  imageStuff();
  checkForCollisions();
}

function inputBoxStuff(){
  myInput = createInput();
  myInput.position(0, 300)
}
function resolveBlackJacket(){

  if(keyIsDown(89)){
    //They pressed the letter y
    myLetter = ""
    i = 0;
    getLetter("Here is some Gouda cheese \n Enjoy making homemade Mac & Cheese!")
  }
  if(keyIsDown(78)){
    //They pressed the letter n
    myLetter = ""
    i = 0;
    getLetter("So you don't like cheese eh!\nMaybe you should change your attitude towards cheese. \n thanks for playing.")
  }
}
function checkForCollisions(){
  
  if(collision(p,myImage)){
    //put the player infront of Texas Mac
    p.x = 100
    p.y = 220
    myLetter = ""
    i = 0;
    getLetter("This game is hard. Good Luck")
  }
   if(collision(p,secondCharacter)){
    //put the player to the left of the guy w leather jacket
    p.x = 300
    p.y = 220
    myLetter = ""
    i = 0;
    getLetter("Hey wanna buy some cheese?")
     isBlackJacketOn  = true;
  }
}
function imageStuff(){
  myImage.display()
  secondCharacter.display()
  
}
function playerStuff(){
  p.display()
  p.update()
}
function getLetter(thisString){
  if(i < thisString.length){
    myLetter += thisString.charAt(i);
    i+=1;
    setTimeout(getLetter, 100, thisString)
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
  
  text("Boughen's game",10,50)
  pop()
  
  textSize(15)
  rect(0,325,400,100)
  text(myLetter,10,350)
}
function buttonStuff(){
  myButton = createButton("Click and I will show somethin")
  myButton.position(100,100);
  //myButton.style("font-family")
  myButton.style("cursor", "pointer");
  myButton.style("background-color", "#e4c1f9");
  myButton.mousePressed(getLetter)
}
