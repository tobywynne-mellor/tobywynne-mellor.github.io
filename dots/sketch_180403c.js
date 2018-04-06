var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

  //initialise balls
  for(var i = 0; i < 100; i++)
  {
    var dir = Math.random() > 0.5 ? 1 : -1;
    var ball = {x:Math.random()*width, y:Math.random()*height, vx:Math.random()*2*dir, vy:Math.random()*2*dir};
    balls.push(ball);
    plotBall(ball);
  }
}

function draw() {
  clear();
  background(51);
  fill(255);
  textSize(32);
  text(Math.round(frameRate()), width/2, height/2);

  for(var i = 0; i < balls.length; i++)
  {
    var ball = balls[i];
    adjustBall(ball);
    plotBall(ball);
    drawLines(ball);
    moveDots(ball);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//function mouseClicked() {
//  var dir = Math.random() > 0.5 ? 1 : -1;
//  var ball = {x:mouseX, y:mouseY, vx:Math.random()*1.5*dir, vy:Math.random()*1.5*dir};
//  balls.push(ball);
//}

function moveDots(ball) {
  
  var radius = 100;
  var distance = dist(mouseX,mouseY, ball.x, ball.y);
  if(distance < radius)
  {
    var vX = ball.x - mouseX;
    var vY = ball.y - mouseY;
    var magV = sqrt(vX*vX + vY*vY);
    var aX = mouseX + vX / magV * radius;
    var aY = mouseY + vY / magV * radius;
    ball.x = aX;
    ball.y = aY;
  }
}
  

function plotBall(ball)
{
  fill(color(255,0,0));
  ellipse(ball.x,ball.y,2,2);
}

function adjustBall(ball)
{
  var dir = Math.random() > 0.5 ? 1 : -1;
  
  if(ball.x < 0)
  {
    ball.x = width;
    ball.vx = Math.random()*2*dir;
  }
  if(ball.x > width)
  {
    ball.x = 0;
    ball.vx = Math.random()*2*dir;
  }
  
  if(ball.y < 0)
  {
    ball.y = height;
    ball.vy = Math.random()*2*dir;
  }
  if(ball.y > height)
  {
    ball.y = 0;
    ball.vy = Math.random()*2*dir;
  }
  
  //if(ball.x < 0 || ball.x > height)
  //{
  //  ball.vx = ball.vx * -1;
  //  ball.
  //}
  //if(ball.y < 0 || ball.y > height)
  //{
  //  ball.vy = ball.vy * -1;
  //  ball.
  //}
  
  ball.x = ball.x + ball.vx;
  ball.y = ball.y + ball.vy;
}

function drawLines(ball){
  //line(x1,y1,x2,y2) loop through balls array
  for(var i = 0; i < balls.length; i++)
  {    
    var ball2 = balls[i];
    
    if(ball2.x == ball.x && ball2.y == ball.y)
    {
      continue;
    }
    var distance = dist(ball.x,ball.y,ball2.x,ball2.y);
    var len = 150;
    if(distance < len)
    {
      //stroke((distance/150) * 255);
      stroke(255,(distance/len) * 255,0, (255 - (distance/len)*255));
      strokeWeight((distance/len));
      line(ball.x,ball.y,ball2.x,ball2.y);
    }
  }  
}
