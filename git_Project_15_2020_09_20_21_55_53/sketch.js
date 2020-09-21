var PLAY=1;
var END = 0;
var gameState = 1;
var sword_image;
var fruit1,fruit2,fruit3,fruit4;
var monsterImage, monsterAnim;
var sword;
var GameOver, GameOverImage;

var fruity, rA; 

var position, enemyPos;


var gameOverSound, fruitSound;

var score = 0;



 


function preload(){
  
 sword_image = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  monsterImage = loadImage("Bomb.png");
  
  GameOverImage = loadImage("gameover.png");
  
  fruitSound = loadSound("cut.mp4");
  gameOverSound = loadSound("gameOver.mp3");
}

function setup(){
createCanvas(600,600);
  
  sword = createSprite(300,300,20,20);
  sword.addImage(sword_image);
  sword.scale = 0.5;
  


fruitGroup = new Group();
  enemyGroup = new Group();
 
}





function draw(){
  background("lightBlue");
  
  text (score,580,30);
 
  
  
  if(gameState === PLAY)
  {
    
     
  sword.y = World.mouseY;
    sword.x = World.mouseX;
    
    
 fruits();
    enemy();
    
    
    
   
    if (fruitGroup.isTouching(sword))
        {    
        fruitGroup.destroyEach();
          
          fruitSound.play();
        score = score + 1;
          
          
        
        }
    
       if (enemyGroup.isTouching(sword))
       {
         
         gameOverSound.play();
         gameState = END
         
       }
    
    
  }
  
  else if 
    
    (gameState === END)
  
  {

  fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    sword.visible = false;
    
    GameOver = createSprite (300,300,20,20);
    GameOver.addImage(GameOverImage);
    
    
    
    
  }
  
  
  drawSprites();
  
  
  
}



function fruits(){
  
  
  if (World.frameCount%80 === 0) 
  {  
   

    {
      position = Math.round(random(1,2));
     fruity =createSprite(600,300,20,20);
        fruity.scale = 0.2;
        
        r = Math.round(random(1,4));
        
        
        if (position == 1)
        {
          fruity.x = 600;
          fruity.velocityX = (-7 + (score/4));

        }
        else {
          if(position == 2)
          {
            fruity.x = 0;
            fruity.velocityX = (7+(score/4));
          }
        }
        
        
        if (r == 1)
        {fruity.addImage(fruit1)}
        else if (r == 2)
        {fruity.addImage(fruit2)}
        else if (r == 3)
        {fruity.addImage(fruit3)}
        else if (r == 4)
        {fruity.addImage(fruit4)}
        
        fruity.y = Math.round(random(50,340));
 
  
  fruity.lifetime = 100;
        fruitGroup.add(fruity);
      }
    
 

}
}

function enemy(){
  
 if (World.frameCount%200 === 0)
   
 {
 var monster = createSprite (600,300,20,20);
   monster.addImage(monsterImage);
   monster.y = Math.round(random(100,300));
   
   monster.lifetime = 100;
   monster.scale = 0.15;
   monster.velocityX = (-10 + (score/10));
   
   enemyGroup.add(monster);
   
 }
  
  
  
  
  
}