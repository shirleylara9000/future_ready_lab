//define a circle object
var circle = { 
    diameter:80,
    xCoor: 0,
    yCoor:0,
    color:[255,0,0], //RGB values give circle a red color
    xSpeed: 15,
    ySpeed: 15
}

//setup is run once at the beginning before we draw.
function setup() {
    createCanvas(640, 480);
    background(20,255, 46);
    frameRate(15);
}


function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);

    console.log("The x coordinate is" + circle.xCoor);
  
    //if we hit the edge of the canvas
    if(circle.xCoor >=640){
        circle.color = [random(0,255),random(0,255),random(0,255)];//makse the circe black
        circle.xSpeed = -circle.xSpeed;//reverse direction
    }else if (circle.xCoor <0){
        circle.color = [random(0,255),random(0,255),random(0,255)];//make the circle blue
        circle.xSpeed = -circle.xSpeed;  
    }
    if (circle.yCoor >=480){ //this is for the top and bottom of the canvas, I change the size of the circle and color if it hit the edge of the top or bottom
        circle.diameter = random(10,110);
        circle.color = [random(0,255),random(0,255),random(0,255)];
        circle.ySpeed = -circle.ySpeed;
     }else if (circle.yCoor <0){
        circle.diameter = (random(10,110));
        circle.color = [random(0,255),random(0,255),random(0,255)];
        circle.ySpeed = -circle.ySpeed;  
     }
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}