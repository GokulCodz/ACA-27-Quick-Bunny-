var bunny;
var carrot;
var brick;


function preload() {
 
 
}


function setup() {
  createCanvas(600,600);
  bgSprite = createSprite;
  bgSprite.scale=4.5;

  bunny = createSprite(40,550,30,30);
  bunny.scale = 0.6;
  bunny.shapeColor = "blue";


  carrot = createSprite(550,40,30,30);
  carrot.scale = 0.7;
  carrot.shapeColor = "orange";


  brick1 = createSprite(300,300,100,20);
  brick1.shapeColor = "red";

  brick2 = createSprite(330,270,100,20);
  brick2.shapeColor = "red";

  brick3 = createSprite(360,240,100,20);
  brick3.shapeColor = "red";

  brick4 = createSprite(100,240,100,20);
  brick4.shapeColor = "red";

  brick5 = createSprite(130,270,100,20);
  brick5.shapeColor = "red";

  brick6 = createSprite(160,300,100,20);
  brick6.shapeColor = "red";

  brick7 = createSprite(500,240,100,20);
  brick7.shapeColor = "red";

  brick8 = createSprite(530,270,100,20);
  brick8.shapeColor = "red";

  brick9 = createSprite(560,300,100,20);
  brick9.shapeColor = "red";

  brick10 = createSprite(100,100,20,100);
  brick10.shapeColor = "green";

  brick11 = createSprite(200,100,20,100);
  brick11.shapeColor = "green";

  brick12 = createSprite(300,100,20,100);
  brick12.shapeColor = "green";

  brick13= createSprite(400,100,20,100);
  brick13.shapeColor = "green";

  brick14 = createSprite(500,100,20,100);
  brick14.shapeColor = "green";

  brick15 = createSprite(100,450,20,100);
  brick15.shapeColor = "yellow";

  brick16 = createSprite(200,400,20,100);
  brick16.shapeColor = "yellow";

  brick17 = createSprite(300,450,20,100);
  brick17.shapeColor = "yellow";

  brick18 = createSprite(400,400,20,100);
  brick18.shapeColor = "yellow";

  brick19 = createSprite(500,450,20,100);
  brick19.shapeColor = "yellow";

  
  brick20= createSprite(40,240,100,20);
  brick20.shapeColor = "red";


}

function draw() {
  background("black");  

  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(carrot)){
    text("YOU WIN",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick1)){
    text("YOU LOSE",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick2)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick3)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick4)){
    text("YOU LOSE",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick5)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick6)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick7)){
    text("YOU LOSE",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick8)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick9)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick10)){
    text("YOU LOSE",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick11)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick12)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick13)){
    text("YOU LOSE",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick14)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick15)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick16)){
    text("YOU LOSE",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick17)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick18)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  if(bunny.isTouching(brick19)){
    text("YOU LOSE",150,150);
    noLoop();
  }
  if(bunny.isTouching(brick20)){
    text("YOU LOSE",200,200);
    noLoop();
  }
  
  drawSprites();
}

