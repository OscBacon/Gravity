var particles = [];

function setup() {
  createCanvas(600,600);
  // createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  center = createVector(width/2,height/2);
  if (random(1)<0.3) {
    particles.push(new Particle(center));
  }
  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].done()) {
      particles.splice(i,1);
    }
  }
  stroke(255,0,0);
  fill(255,0,0);
  textAlign(CENTER,CENTER);
  textSize(16);
  text("Center of the expansion",width/2,height/2-40);
  ellipse(width/2,height/2,20,20);
}
