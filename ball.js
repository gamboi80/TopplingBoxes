class Ball{
    constructor(x, y, r){
        var options = {
            restitution:1,
            density:0.00001

        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        
       World.add(world,this.body)
       
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER);
        fill("green");
        ellipse(pos.x, pos.y, this.r, this.r);
    }

}