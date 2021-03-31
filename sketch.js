var trackI, track;
var robberI, robber;
var coinI, coin;
var energyI, energy;
var laserI, laser;
var coinGroup;
var laserGroup;
var score = 0 ;
var gameState;
var e;

function preload(){
robberI = loadAnimation("images/robber 1.png", "images/robber 2.png", "images/robber 3.png");
coinI = loadAnimation("images/coin 1.png","images/coin 2.png","images/coin 3.png","images/coin 4.png","images/coin 5.png","images/coin 6.png");
energyI = loadImage("images/energy drinks.png");
laserI = loadImage("images/laser.png");
trackI = loadImage("images/track.png");

}

function setup() {
  createCanvas(400, 800);
 
  track = createSprite(110,100,400,800);
  track.addImage("track",trackI);
  track.scale = 1;
  
  track.velocityY = 6;
  

  coinGroup = new Group();
  laserGroup = new Group();


  robber = createSprite(200,700,20,50);
  robber.addAnimation("running",robberI);

  fill ("white")
text("Score:" + score, 200 ,400)
}

function draw() {
  //robber.debug = true
  background(220);
  //console.log(e)

  //console.log(score)

  

  track.velocityY = 6;

  if (track.y > 1000){
    track.y = 200;
  }
  
  if(keyDown(39)&& robber.x < 390  ){
    robber.x = robber.x + 10
  }

  if (keyDown(37)&& robber.x > 10 ){
    robber.x = robber.x - 10
  }
  
  
  for (var i = 0; i < coinGroup.length; i++) {
  if(coinGroup.get(i).isTouching(robber)){
    coinGroup.get(i).remove()
    score =score+1;
}
}
spawnCoins();
spawnLaser();

if (coinGroup.isTouching(robber)){
  coinGroup.get(i).remove()
  score = score + 1;
}


drawSprites();
}

function spawnCoins(){
  if (frameCount % 60 === 0){
  coin = createSprite(random(50,350),100,0,0)
  coin.addAnimation("rotating",coinI)
  coin.scale = 0.5
  coin.velocityY = 6
  coin.lifetime = 110;

  coinGroup.add(coin);

  }
}

function spawnLaser(){
  if (frameCount % 80 === 0){
    laser = createSprite(random(50,350),100,0,0)
    laser.addImage(laserI)
    laser.scale = 0.15;
  
    laser.lifetime = 110;
    laser.velocityY = 12;
  
    laserGroup.add(laser);
  
    }
  }

