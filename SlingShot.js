class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            
           stroke(64,224,208);
           if(pointA.x<220){
               strokeWeight(4);
        line(pointA.x -20,pointA.y,pointB.x -10,pointB.y);
        line(pointA.x -20,pointA.y,pointB.x +30,pointB.y -3);
        image(this.sling,pointA.x -30,pointA.y -10,15,30);
           }
           else{
               strokeWeight(2);
               line(pointA.x +25, pointA.y, pointB.x -10, pointB.y);
               line(pointA.x +25, pointA.y, pointB.x +30, pointB.y -3);
               image(this.sling,pointA.x +25,pointA.y -10,15,30);
           }
        
         

        }    
    }
    
}