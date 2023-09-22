let r1 = 15;
let r2 = 5;
let step = 30;
let w = 600;
let h = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(238,218,1);
}

function draw() {
  fill(0);
  for (i=0; i<=windowWidth; i++){
    for (j=0; j<=windowHeight; j++){
      if (((i%2 == 0) && (j%2 == 0))||((i%2 == 1) && (j%2 == 1))){
        ellipse(i*step, j*step, r1);
      }
      else {
        ellipse(i*step, j*step, r2);
      }
    }
  }
}
