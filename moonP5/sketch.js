let moon;
let img;

function preload(){
  moon= loadImage('img/moon-415501.jpg');
  img= loadImage('img/stars-1654074.jpg');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(0);
  noStroke();
  //set background image that rotates slowly on Z axis
  rotateZ(millis() / 20000);
  imageMode(CENTER);
  image(img, 100,100, 1000, 1000);
  //set identical image to background with shear function
  rotateZ(millis() / 20000);
  shearX(mouseY / 40);
  shearY(mouseX / 40);
  imageMode(CENTER);
  image(img, 100,100);
  //moon shear function responding to opposite mouse coordinates
  shearX(mouseX / 40);
  shearY(mouseY / 40);
  translate(width / 250, height / 250);
  texture(moon);
  rotateY(millis() / 2000);
  sphere(200);
}
