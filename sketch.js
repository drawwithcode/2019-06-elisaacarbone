var gato;

function preload() {
  gato = loadImage('assets/gato.png');
}

function setup() {
  button = createButton("Click here to start");
  button.position(windowWidth/2 - 80, windowHeight/2 + 300);
  button.size(160, 40);
  button.mousePressed(starthere);
}

function draw() {
}

function starthere() {
  secButton = createButton("Ok, now click here!");
  secButton.position(100, 50);
  secButton.size(170, 40);
  secButton.mousePressed(secondStep);
}

function secondStep() {
  trdButton = createButton("Wanna see something fun?");
  trdButton.position(windowWidth - 300, windowHeight/2);
  trdButton.size(150, 60);
  trdButton.mousePressed(thirdStep);
}

function thirdStep() {
  lastButton = createButton("Click me, then!");
  lastButton.position(50, windowHeight/2 + 150);
  lastButton.size(140, 40);
  lastButton.mousePressed(magic);
}

function magic() {
  sel = createSelect();
  sel.option("Mmmh, you don't look convinced");
  sel.option('I am!');
  sel.position(windowWidth/2 + 100, 300);
  sel.size(300, 40)
  sel.changed(motivation);
}

function motivation() {
  input = createInput("Tell me you really wanna see this amazing stuff and I'll let you");
  input.position(50, 200);
  input.size(500, 30);
  input.changed(granfinale);
}

function granfinale() {
  createCanvas(windowWidth, windowHeight);

  button.remove();
  secButton.remove();
  trdButton.remove();
  lastButton.remove();
  sel.remove();
  input.remove();

  fill("#345995");
  rect(0,0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(gato, windowWidth/2, windowHeight/2, gato.width/2, gato.height/2);

  textAlign(CENTER);
  textSize(50);
  textFont('Quattrocento Sans');
  fill(255);
  text("U DUMB", windowWidth/2, windowHeight/2 + 400);
  console.log("funzia");

}
