//calling all the variables globally
var back_img;

var blueBoxer, redBoxer;
var boxer1, boxer2;

var gameState = 0;

var moveBoxer1 = 0;
var moveBoxer2 = 0;

var blueHealth = 100;
var redHealth = 100;

var counterRedHealth = 0;
var counterBlueHealth = 0;

function preload() {
  //loading all the images 
  back_img = loadImage("images/bg.jpg");

  blueBoxer = loadImage("images/boxer_11.png");
  blueBoxer2 = loadImage("images/boxer_22.png");
  blueBoxer3 = loadImage("images/boxer_33.png");

  redBoxer = loadImage("images/boxer_1.png");
  redBoxer2 = loadImage("images/boxer_2.png")
  redBoxer3 = loadImage("images/boxer_3.png");

  //loading all the sounds
  crowd = loadSound("sounds/crowd cheer.mp3");
  death = loadSound("sounds/death sound.mp3");
}

function setup() {
  //the canvas size will be of the size of the screen
  createCanvas(windowWidth,windowHeight);

  //sprites of the boxers
  boxer1 = createSprite(590,600);
  boxer1.addImage(blueBoxer);
  boxer1.scale = 5.8;
  boxer1.debug = true;
  boxer1.setCollider("circle",-33,5);

  boxer2 = createSprite(1200,600);
  boxer2.addImage(redBoxer);
  boxer2.scale = 5.8;
}

function draw() {
  //adding our own background
  background(back_img);
  
  //BOXER 1 
  //adding all the keys for boxer number 1
  if(keyDown("S") && moveBoxer1 === 0)
  {
    boxer1.addImage(blueBoxer2);
    changePosition(20,10,boxer1);
    moveBoxer1 = 1;
  }

  if(keyDown("A") && moveBoxer1<=6)
  {
    boxer1.addImage(blueBoxer3);
    changePosition(50,10,boxer1);
    moveBoxer1 = moveBoxer1+1;
    //the crowd will cheer if boxer 1 hits boxer 2 or vice-versa
    //crowd.play();
  }

 /* if(boxer1.isTouching(boxer2))
    {
       if(counterRedHealth === 0)
       {
          redHealth=80;
          counterRedHealth = counterRedHealth+1;
       }else if(counterRedHealth === 1)
       {
         redHealth=60;
         counterRedHealth = counterRedHealth+1;
       }
     }
     switch(counterRedHealth)
     {
       case 1:
         redHealth = 80;
         break;
        
     }*/

  //BOXER 2
  //adding all the keys for boxer number 2
  if(keyDown("K") && moveBoxer2 === 0)
  {
    boxer2.addImage(redBoxer2);
    changePosition(20,10,boxer2);
    moveBoxer2 = 1;
  }

  if(keyDown("I") && moveBoxer2<=6)
  {
    boxer2.addImage(redBoxer3);
    changePosition(-50,10,boxer2);
    moveBoxer2 = moveBoxer2+1;
    //crowd.play();
  }

  drawSprites();

  textSize(30)
  fill("blue")
  text("Health: "+blueHealth,windowWidth/2-400,windowHeight-510);

  textSize(30)
  fill("red")
  text("Health: "+redHealth,windowWidth/2+130,windowHeight-510);
}

//function for changing the position if certain keys are pressed
function changePosition(x,y,boxer){
  boxer.x = boxer.x + x;
  boxer.y = boxer.y + y;
}