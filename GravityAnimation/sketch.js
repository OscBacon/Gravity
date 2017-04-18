var g = "Gravity!";
var curIndex = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(3);
}
function draw() {
  background(50);
  fill(255);
  textSize(180);
  textAlign(CENTER, CENTER);
  text(
    g.substring(curIndex, curIndex+1),
    width/2, height/2);
  curIndex++;
  if (curIndex > g.length) {
    curIndex = 0;
  }
}
