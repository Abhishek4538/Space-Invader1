class Invader{
    constructor(x,image){
        this.rowcount=8
        this.y=50
        this.x=x
        this.alienIMG=image
        this.aliens=[]
        this.columncount=6
        this.totalnumberofaliens=this.rowcount*this.columncount
    }
    initialiseAliens(){
        var x
        var y=this.y
        for(var i=0;i<this.rowcount;i++){
            y=y+40;
            x=this.x;
            
            for(var j=0;j<this.columncount;j++){
                var alien=new Alien(x,y,this.alienIMG)
                this.aliens.push(alien)
                x=x+50
            }
        }
        console.log(this.aliens)
    }
    drawAliens(){
        for(var i=0;i<this.totalnumberofaliens;i++){
            
            this.aliens[i].display();
        }
    }
};