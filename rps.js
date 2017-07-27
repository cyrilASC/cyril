var userchoice = "p";

var choices = ["r","p","s"];
var compchoice = choices[Math.floor(Math.random()*3)];

console.log("user choice: "+userchoice);
console.log("computer choice: "+compchoice);

if (userchoice == compchoice) {
    console.log("draw game");
}
else if (userchoice=="r"){
    if (compchoice=="p"){
        console.log("computer wins");
    }
    else if (compchoice =="s"){
        console.log("human wins");
    }
    else{
        console.log("error! computer chose: "+compchoice);
    }
}
else if (userchoice=="p"){
    if (compchoice=="s"){
        console.log("computer wins");
    }
    else if (compchoice =="r"){
        console.log("human wins");
    }
    else{
        console.log("error! computer chose: "+compchoice);
    }
}