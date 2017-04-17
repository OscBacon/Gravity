var rays = [645.280,486.132,434.046,410.17];
var min_wavelength = 400;
var box_size = 200;
var names = ["δ","γ","β","α"];
var c = 1;
function setup() {
  createCanvas(600,480);

  //speed_input = createInput(0.0,float);
  //speed_input.position(350,40);

  //speed_button = createButton('Apply');
  //speed_button.position(460,40);

  speed_input = createSlider(-10,10,0,float);
  speed_input.position(350,40);
  }

function draw() {
  background(255);
  stroke(0);
  strokeWeight(2);
  fill(0);
  rect(1,1,300,box_size);
  rect(1,251,300,box_size);
  line(301,box_size,301,251);
  line(1,box_size,1,251);
  strokeWeight(1);
  speed = speed_input.value()/100;
  text("Speed: " + speed + " * c",350,20);

  push();
  textAlign(LEFT,CENTER);
  text("400 nm",11,200,301,50);
  textAlign(RIGHT,CENTER);
  text("700 nm",1,200,290,50);
  textAlign(CENTER,CENTER);
  text("Wavelength",1,200,301,50);
  pop();


  for (var i = rays.length-1; i >= 0; i--) {
    ray_length = rays[i] * speed/c + rays[i];
    colorMode(HSB);
    ray_color = 255-map(ray_length,400,625,0,255);
    ray_i_color = 255-map(rays[i],400,625,0,255);
    //console.log(ray_color);
    stroke(ray_color,255,255);
    if (ray_length < 700) {
      line(ray_length-min_wavelength,0,ray_length-min_wavelength,box_size);
    }
    stroke(ray_i_color,255,255);
    line(rays[i]-min_wavelength,250,rays[i]-min_wavelength,250+box_size);

    stroke(0);
    text("λ"+names[i]+": " + rays[i].toFixed(2) + " nm", 320,100+(3-i)*20);
    text("Δλ"+names[i]+": " + (ray_length-rays[i]).toFixed(2) + " nm", 400,100+(3-i)*20);
  }


}
