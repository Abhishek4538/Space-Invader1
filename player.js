class Player{
    constructor(x,y,w,h){
        this.image= loadImage("images/PNG/playerShip1_green.png")
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.lasers=[]
        this.lives=3
        this.score=0
    }

    display(){
        image(this.image,this.x,this.y,this.w,this.h)
        this.drawLaser()
    }
    moveLeft(){
        this.x-=15
    }
    moveRight(){
        this.x+=15
    }
    shoot(){
        var laser1=new Laser(this.x,this.y)
        this.lasers.push(laser1)

    }
    drawLaser(){
        for(var i=0;i<this.lasers.length;i++){
            this.lasers[i].draw();
            this.lasers[i].y-=8
        }
    }
    updateLaser(){

    }
}