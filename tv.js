img ="";
function preload(){
    img = loadImage("tv.jpg");
}
function setup(){
    canvas = createCanvas(650,400);
    canvas.center();
}
function draw(){
    image(img,0,0,650,400);
    fill("#006400");
    text("Television",80,70);
    noFill();
    stroke("#006400");
    rect(30,50,500,340);
}
