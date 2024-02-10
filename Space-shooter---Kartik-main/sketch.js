var GameOn
var rocket
var playbutton,
aboutbutton,
asteroid,
asteroid2,
asteroid3;
var Gamestate = "1";
var score=0;

function preload(){
GameOn = loadImage("assets/Game On.gif");
playbuttonImg = loadImage("assets/play.png")
aboutbuttonImg = loadImage("assets/about.png")
asteroid = loadImage("assets/asteroid.png")
asteroid2 = loadImage("assets/Asteroid2.webp")
asteroid3 = loadImage("assets/Asteroid3.jpg")
spacebg = loadImage("assets/spaceimg.jpg")
rocketImg = loadImage("assets/rocket.jpg")
}

function setup(){

createCanvas(500,500);
playbutton = createImg("assets/play.png");
aboutbutton = createImg("assets/about.png");
playbutton.position(400,400);
playbutton.size(70,70)
playbutton.hide();
aboutbutton.position(30,30);
aboutbutton.size(50,50)
aboutbutton.hide();
}


function draw(){
if(Gamestate === "1"){
background(GameOn);
playbutton.show();
aboutbutton.show();
score.visible=false;
}
playbutton.mousePressed(()=>{

playbutton.hide();
aboutbutton.hide();
Gamestate="2";

})

aboutbutton.mousePressed(()=>{

    playbutton.hide();
    aboutbutton.hide();
    Gamestate="4";
    
    })
if (Gamestate==="4"){
aboutgame();
}
if (Gamestate==="2"){
    bg=createSprite(100,100,500,500);
    bg.addImg(spacebg)
    rocket=createSprite(100,100,150,150)
    rocket.addImg(rocketImg);
    Gamestate="3";
}
if(Gamestate==="3"){
    rocket.visible=true;
    bg.velocityY=5;
    if(bg.y>1000){
        bg.y=height/2
    }
}
if(keyDown(LEFT_ARROW)){
if(rocket.x>25){
    rocket.x=rocket.x-10
}
}
if(keyDown(RIGHT_ARROW)){
    if(rocket.x<70){
        rocket.x=rocket.x+10
    }
    }
    if(keyDown(SPACE)){
       spawnlaser();
       rocket.x=laser.x
        }
drawSprites()



}
function aboutgame(){

swal({
title:"How To Play",
text:"control the rocket , hit the alien spaceships and survive the asteroids .",
textAllign:"center",
confirmButtonText:"Let's Play ",
confirmButtonColor:"red",

},
   function ()  {
        Gamestate = "2"
    }
)
}