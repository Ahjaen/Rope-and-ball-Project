class rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            body1:bodyA,
            body2:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

    display(){
        var pointA = this.rope.body1.position;
        var pointB = this.rope.body2.position;

        strokeWeight(2);

        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }
}