class Mango{
    constructor(x,y,r){
        var options={
            isStaic:true,
            restitution:0,
            friction:1,
            }            
        this.x=x;
        this.y=y;
        this.r=r;
        this.image-loadImage("Plucking mangoes/mongo.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body); 
    }
}
