class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;

            push()
            strokeWeight(8);
            stroke(51,24,7)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            pop()

    }
    image(this.sling1,200,20)
    image(this.sling2,170,20)
    }

    release(){
        this.chain.bodyA = null;
    }

    attach(object){
        this.chain.bodyA = object;
    }
    
}