class Bob {
    constructor(x,y,radius){
    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:5.0
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);


    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("purple");
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius)
    pop();
    }

}