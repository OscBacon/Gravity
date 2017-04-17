function Particle(origin) {
  this.angle = random(0,TWO_PI);
  this.z = random(height*4/400,height*8/400);
  this.pos = origin;
  // this.vel = createVector(0,0);
  this.vel = createVector(cos(this.angle),sin(this.angle));
  this.vel.mult(this.z/1000);


  this.update = function() {
    // this.vel.add(this.acc);
    this.vel.mult(1.05);
    this.pos.add(this.vel);
  }

  this.done = function() {
    if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    else {
      return false;
    }
  }
  this.show = function() {
    stroke(255);
    fill(255);
    ellipse(this.pos.x,this.pos.y,this.z,this.z);
  }

}
