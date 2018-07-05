//define a circle object
/*var circle = { 
    diameter:80,
    xCoor: 0,
    yCoor:0,
    color:[255,0,0], //RGB values give circle a red color
    xSpeed: 15,
    ySpeed: 15
}
//setup is run once at the beginning before we draw.
// Do not worry about the function setup there is one later below.
function setup() {
    createCanvas(640, 480);
    background(20,255, 46);
    frameRate(15);
}
*/
//ellipse(x,y,w)
//ellipse(x,y,w,h)
function Circle(x, y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color || [0,0,0]; //makes the default color black
    this.xSpeed = xSpeed || 5;
    this.ySpeed = ySpeed || 7;
}
var circle = new Circle(0,20, 80, [255,0,0], 8, 15);
var circle2 = new Circle(0,30,50,[0,0,0],15,20);
var circleList = [];
var balls = random([2,5,10,16]);

//inout the canvas width and height.
function setup () {
    createCanvas(parseInt(prompt("Input the Canvas Width.")), parseInt(prompt("Input the Canvas Height.")));
    background(backgroundTrail);
    for(var i = 0; i < balls; i++){//this spawns the different numbers of ball when you refresh the page.
        circleList.push(new Circle(random(0, width), random(0, height), random(0, 100), random(0, 255), random(0, 20), random(0, 20)));
    }
}
var backgroundTrail = [255,255,255];
function draw() {
    background(backgroundTrail);
    //loop fo number of circles
    for(var i = 0; i <circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);

        //if we hit the edge of the canvas
        if(circleList[i].xCoor >=640 || circleList[i].xCoor<0) {
            circleList[i].color = [random(0,255),random(0,255),random(0,255)];//make the circle black
            circleList[i].xSpeed = -circleList[i].xSpeed;//reverse direction
        }else if (circleList[i].xCoor <0){
            circleList[i].color = [random(0,255),random(0,255),random(0,255)];//make the circle blue
            circleList[i].xSpeed = -circleList[i].xSpeed;  
        }
        if (circleList[i].yCoor >=480){ //this is for the top and bottom of the canvas, I change the size of the circle and color if it hit the edge of the top or bottom
            circleList[i].diameter = random(10,110);
            circleList[i].color = [random(0,255),random(0,255),random(0,255)];
            circleList[i].ySpeed = -circleList[i].ySpeed;
         }else if (circleList[i].yCoor <0){
            circleList[i].diameter = (random(10,110));
            circleList[i].color = [random(0,255),random(0,255),random(0,255)];
            circleList[i].ySpeed = -circleList[i].ySpeed;  
         }
        circleList[i].xCoor += circleList[i].xSpeed;
        circleList[i].yCoor += circleList[i].ySpeed;
    }  
}
