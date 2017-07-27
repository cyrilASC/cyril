function setup(){
    createCanvas(400,400);
}

var row1 = ["su","su","nu","nu"];
var row2 = ["nu","nu","su","nu"];
var row3 = ["su","nu","su","nu"];
var row4 = ["su","nu","nu","nu"];
var board = [row1,row2,row3,row4];

function draw(){
    for (var i=0; i<board.length; i++){
        for (var j=0; j<board[i].length; j++){
            if (board[i][j]=="nu"||board[i][j]=="su"){
                fill(200);
            }
            else if (board[i][j]=="nc"){
                fill(0);
            }
            else if (board[i][j]=="sc"){
                fill(255,0,0);
            }
            rect(j*100,i*100,100,100);
        }
    }
}

function mouseClicked(){ //this is a p5 function. in this function, we say what we want to happen when we click
    //if I click, I need to check what square I clicked in
    if (mouseX<100){ //if mouseX<100, then my mouse is in the first column
        if (mouseY<100){ //if mouseY<100, then my mouse is in the first row
            //so now I know I'm in the first row AND the first column
            //and I can change the string in that place
            board[0][0] = board[0][0].replace("u","c");//this method replaces the "u" in the string with a "c"
                                                       //i.e. "nu"->"nc" and "su"->"sc"
            //if .replace() is confusing, you could also use a conditional like in the multiline comment below
            /*if (board[0][0]=="nu"){
                board[0][0]="nc";
            }
            else if (board[0][0]=="su"){
                board[0][0]="sc";
            }*/
        }
        else if (mouseY<200){ //if mouseY wasn't less than 100, but it IS less than 200, then I must be in the second row
            board[1][0] = board[1][0].replace("u","c");
        }
        else if (mouseY<300){//if mouseY wasn't less than 200, but it IS less than 300, then I must be in the third row
            board[2][0] = board[2][0].replace("u","c");
        }
        else if  (mouseY<400){//if mouseY wasn't less than 300, but it IS less than 400, then I must be in the fourth row
            board[3][0] = board[3][0].replace("u","c");
        }
    }
    else if (mouseX<200){ //if mouseX wasn't less than 100, but it IS less than 200, then I must be in the second column
        //now we have all the same checks for the rows like before
        if (mouseY<100){
            board[0][1] = board[0][1].replace("u","c");
        }
        else if (mouseY<200){
            board[1][1] = board[1][1].replace("u","c");
        }
        else if (mouseY<300){
            board[2][1] = board[2][1].replace("u","c");
        }
        else if  (mouseY<400){
            board[3][1] = board[3][1].replace("u","c");
        }
    }
    else if (mouseX<300){
        if (mouseY<100){
            board[0][2] = board[0][2].replace("u","c");
        }
        else if (mouseY<200){
            board[1][2] = board[1][2].replace("u","c");
        }
        else if (mouseY<300){
            board[2][2] = board[2][2].replace("u","c");
        }
        else if  (mouseY<400){
            board[3][2] = board[3][2].replace("u","c");
        }
    }
    else if  (mouseX<400){
        if (mouseY<100){
            board[0][3] = board[0][3].replace("u","c");
        }
        else if (mouseY<200){
            board[1][3] = board[1][3].replace("u","c");
        }
        else if (mouseY<300){
            board[2][3] = board[2][3].replace("u","c");
        }
        else if  (mouseY<400){
            board[3][3] = board[3][3].replace("u","c");
        }
    }
}