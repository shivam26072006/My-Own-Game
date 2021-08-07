var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("background1.jpeg")
  
  
}

function setup() {
  createCanvas(1000,690);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("EYES SCORE: " + score, 100, 25);

  text("EAR SCORE:" , 400, 25)
  

  //if(score === 3) {
  //  clear()
  //  background(bg2)
  //  fill("black")
  //  textSize(40);
  //  text("TREASURE UNLOCKED",250, 200);
  //}

  drawSprites()
}