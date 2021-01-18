var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var bellsound
var cyclistgroup,cyclist,cyclist1,cyclist2
var restart,restartimage
var gameover,gameoverimage
var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  bellsound= loadSound("salamisound-5494951-bicycle-bell-ring-the-bell.mp3")
  cyclist= loadImage("cyclist1.jpg")
  cyclist1= loadImage("images.png")
  cyclist2= loadImage("cyclist2.jpg")
  restartimage= loadImage("th.jpg")
gameoverimage= loadImage("th (2).jpg")
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;
  
  cyclistgroup = new Group()

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  restart = createSprite(250,200,20,20)
  restart.addImage(restartimage)
  restart.visible=false
  restart.scale=0.2
  
  gameover = createSprite(250,130,20,20)
  gameover.addImage(gameoverimage)
  gameover.visible=false
  gameover.scale=0.6
  
  mainCyclist.setCollider("circle",0,0,600)
  mainCyclist.debug=false
}

function draw() {             
  background(0);
  drawSprites(); 
  
  
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
   cycles()
    distance = distance + Math.round(getFrameRate()/60)

   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  path.velocityX = -(4+3*distance/100)
  if(path.x < 0 ){
    path.x = width/2;
    
    
  }
    
 }
  if(distance>0&&distance%200===0){
     bellsound.play()
     
     
     }
  
  else if(gameState===END){
  path.velocityX= 0
     
    cyclistgroup.setVelocityXEach(0)
   restart.visible=true
    gameover.visible=true
    fill("yellow")
    textSize=30
    text("Total score="+distance,250,100)
    
          }
 
  if (mainCyclist.isTouching(cyclistgroup)){
      gameState=END
     
      }
if(mousePressedOver(restart)){
   reset()
   
   }
     
 
  
  
  
}

function cycles(){
  if(frameCount% 60 === 0){
var cycle = createSprite(490,80,20,20)
cycle.velocityX=Math.round(random(-12,-14))
   cycle.y=Math.round(random(10,290))
    var rand = Math.round(random(1,3))
     switch(rand){
       case 1 : cycle.addImage(cyclist)
         break;
           case 2 : cycle.addImage(cyclist1)
         
         break; 
         case 3 : cycle.addImage(cyclist2)
         break;
         default:break;
         
     }
        
      cycle.scale=0.3
    cycle.lifetime=400
    cyclistgroup.add(cycle)
    }
      
      
      
      
      
      
      
      
      }
function reset(){
  gameState=PLAY
  cyclistgroup.destroyEach()
  gameover.visible=false
  restart.visible=false
  distance=0
  
}
  
  
  
  
  
  
  
  
  
  
  


