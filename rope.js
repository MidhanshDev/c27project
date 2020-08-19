class Rope{
    constructor(body1, body2 ,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x: this.offsetX, y: this.offsetY,}
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

        rope1 = new rope1(bob1.body,roof.body,-35*2,8)
 	    rope2 = new rope2(bob2.body,roof.body,-35*2,8)
 	    rope3 = new rope3(bob3.body,roof.body,-35*2,8)
  	    rope4 = new rope4(bob4.body,roof.body,-35*2,8)
  	    rope5 = new rope5(bob5.body,roof.body,-35*2,8)
	
    }

}