class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 5,
            density :6
        }
        this.body = Matter.Bodies.circle(x,y,5,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("aw.png");
        World.add(world, this.body);
        
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,40,40);
rectMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
  }