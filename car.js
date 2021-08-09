img ="";
function preload(){
    img = loadImage("Car-car.jpg");
}
function setup(){
    canvas = createCanvas(650,400);
    canvas.center();
}
function draw(){
    image(img,0,0,650,550);
    fill("#006400");
    text("Car",45,70);
    noFill();
    stroke("#006400");
    rect(30,50,550,340);
}
