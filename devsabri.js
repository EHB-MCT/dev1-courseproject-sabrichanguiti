// Interactieve Design
// Sabri CHANGUITI - MCT

let bubbles = []; // hier bewaren we de bubbels


function setup() {
  createCanvas(windowWidth, windowHeight);

  // 100 bubbels maken
  for (let i = 0; i < 100; i++) {
    let bubble = {
      x: random(width),
      y: random(height),
      size: random(5, 50),
      speed: random(0.5, 2),
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];

    // verander kleur afhankelijk van cursorpositie
    let r = map(mouseX, 0, width, 255, 200)
    let g = map(mouseX, 0, width, 200, 200);
    let bl = map(mouseX, 0, width, 200, 255); 
    b.col = color(r, g, bl);

    // bubbels tekenen
    noStroke();
    fill(b.col);
    ellipse(b.x, b.y, b.size);

    // bubbels gaan omhoog
    b.y = b.y - b.speed;

    // als de bubbel boven is, terug naar startpositie
    if (b.y < 0) {
      b.y = height;
    }
  }
}