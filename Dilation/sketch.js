function setup() {
  createCanvas(600,600);
  z=width/2;
  z_immobile = width/4;
  t=t_p=0;
  play = true;

  reset_button = createButton('Reset');
  reset_button.position(20,height-20);
  reset_button.mousePressed(reset);

  pause_button = createButton('Pause');
  pause_button.position(100,height-20);
  pause_button.mousePressed(pause);

  start_button = createButton('Start');
  start_button.position(180,height-20);
  start_button.mousePressed(start);

  speed_slider = createSlider(0,100,50,float);
  speed_slider.position(width/2+100,height-20);
}

function draw() {
  v = speed_slider.value() /100;
  dilation = sqrt(1/(1-pow(v,2)));
  console.log(dilation,1-pow(v,2),v);
  if (z>0 && play) {
    t_p += 1/(dilation*60);
    background(64, 64, 64);
    t+=1/60;
    //Observateur à côté du bouton
    push();
    translate(width/4,height/2);
    if (round(t) - t <= 0.0001) {
      fill(255);
    }
    else {
      fill(255,0,0);
    }
    ellipse(0,0,z_immobile,z_immobile);
    pop();

    //Observateur qui s'éloigne du bouton
    push();
    translate(3*width/4,height/2);
    if (round(t_p) - t_p <= 0.0001) {
      console.log(round(t_p)-t_p);
      fill(255);
    }
    else {
      fill(255,0,0);
    }
    ellipse(0,0,z,z);
    z -= v;
    pop();

  }
  push();
    fill(255,0,0);
    textSize(14);
    text("Temps perçu à côté du bouton : "+t.toFixed(2)+" s",20,20);
    text("Différence de temps entre les flash : 1 s",20,40);
    push();
      textAlign(CENTER,CENTER);
      fill(255);
      text("Vitesse : " + v.toFixed(2)+ "* c",width/2,height-20);
    pop();
    push();
      textAlign(LEFT);
      text("Temps perçu par l'observeur : "+t_p.toFixed(2)+" s",width/2+20,20);
      text("Différence de temps entre les flash : "+dilation.toFixed(2)+" s",width/2 +20,40);
    pop();
  pop();
}

function reset() {
  t=t_p=0;
  z=width/2;
}

function pause() {
  play = false;
}

function start() {
  play = true;

}
