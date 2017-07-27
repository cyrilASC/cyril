function setup(){
    createCanvas(800,800);
}

var aliens = [[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true]];
var shipX = 400;
var shipY = 700;
var bullets = [];
var bSpeed = 4;
var score = 0;

function Bullet(x,y){
    this.x = x;
    this.y = y;
}

function draw(){
    background(0);
    fill(255);
    textSize(30);
    text("Score:",100,750);
    text(score,200,750);
    fill(0,255,0);
    for (var i=0;i<aliens.length; i++){
        for (var j=0; j<aliens[i].length; j++){
            if (aliens[i][j]){
                rect(55+92*j,55+92*i,46,46);
            }
        }
    }

    for (var k=0; k<bullets.length; k++){
        var bullet = bullets[k];
        if (bullet.y>0){
            for (var i=0;i<aliens.length; i++){
                for (var j=0; j<aliens[i].length; j++){
                    if (aliens[i][j]){
                        if ((bullet.x>55+92*j)&&(bullet.x<55+92*j+46)&&(bullet.y>55+92*i)&&(bullet.y<55+92*i+46)){
                            aliens[i][j] = false;
                            bullets.splice(k,1);
                            score++;
                        }
                    }
                }
            }
            bullet.y-=bSpeed;
            ellipse(bullet.x,bullet.y,10,10);
        }
        else{
            bullets.splice(0,1);
        }
    }

    fill(0,0,255);
    rect(shipX,shipY,50,50);
    
    if (keyIsDown(RIGHT_ARROW)){
        if (shipX<width-50){
            shipX+=3;
        }
    }
    if (keyIsDown(LEFT_ARROW)){
        if (shipX>0){
            shipX-=3;
        }
    }
}

function keyPressed(){
    if (keyCode==32){
        var b = new Bullet(shipX+25,shipY);
        bullets.push(b);
    }
}