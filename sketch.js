var gamestate=0

function preload(){
  bg=loadImage("images/Backgrounds/black.png ")
  alein1IMG=loadImage("images/PNG/Enemies/enemyRed1.png")
  alein2IMG=loadImage("images/PNG/Enemies/enemyBlack1.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  invader=new Invader(300,alein1IMG)
  invader2=new Invader(800,alein2IMG);
  player=new Player(windowWidth/2,windowHeight-100,30,30)

}

function draw() {
  background(bg);  
  invader.initialiseAliens()
  invader.drawAliens();
  invader2.initialiseAliens()
  invader2.drawAliens();
  player.display();
  


  if(keyDown(LEFT_ARROW)){
    player.moveLeft()
  }
  else if(keyDown(RIGHT_ARROW)){
    player.moveRight()
  }
   if(keyDown(32)){
    player.shoot()

  }
}