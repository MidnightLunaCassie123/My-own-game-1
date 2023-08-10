var backgroundImg;


function preload(){
 backgroundImg=loadImage("background.png")
 Hana=loadImage("Hana.png")
 ninja=loadImage("Ninja.png")
 OldMan=loadImage("Oldman.png")
 Flower=loadImage("SakuraFlower.png")
 
}

function setup(){
  createCanvas(850,600)
//Making boundary of the game.
var boundary1 = createSprite(420,30,760,5);
boundary1.shapeColor = "#517843";

var boundary2 = createSprite(40,120,5,200);
boundary2.shapeColor = "#517843";

var boundary3 = createSprite(15,220,100,5);
boundary3.shapeColor = "#517843";

var boundary4 = createSprite(800,120,5,200);
boundary4.shapeColor = "#517843";

var boundary5 = createSprite(825,220,100,5);
boundary5.shapeColor = "#517843";

var boundary6 = createSprite(15,350,100,5);
boundary6.shapeColor = "#517843";

var boundary7 = createSprite(40,440,5,180);
boundary7.shapeColor = "#517843";

var boundary8 = createSprite(420,525,760,5);
boundary8.shapeColor = "#517843";

var boundary9 = createSprite(800,440,5,175);
boundary9.shapeColor = "#517843";

var boundary10 = createSprite(825,350,100,5);
boundary10.shapeColor = "#517843";


 
}

function draw(){
  background(backgroundImg)
 
  
drawSprites()
}
