class Boy{
    constructor(Boy, stoneObj){
        var options = {
            Boy: Boy,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        this.image=loadImage("Plucking mangoes/mango.png");
        World.add(world, this.Boy);
    }
        fly(){
            this.Boy.bodyA = null; 
        }
    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}