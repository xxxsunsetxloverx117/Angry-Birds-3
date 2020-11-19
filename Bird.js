class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = []; // array 
    Matter.Body.setDensity(this.body,2.5)
  }




  display() {
    if(gameState === "onsling"){
      Matter.Body.setAngle(bird.body, 0)
    }
    super.display();
    if(this.body.position.x > 200 && this.body.velocity.x>5){
    var pos = [this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);
    }

    for(var i=0; i<this.trajectory.length; i= i + 1) {
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }

  }
}
