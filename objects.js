function Superhero(realName,power,deadRels){
    this.realName = realName;
    this.power = power;
    this.deadRels = deadRels;
}

//how to do it
var superman = new Superhero("Kal-el","mad OP",2);
var batman = new Superhero("Bruce Wayne","$$$",2);
var spiderman = new Superhero("Peter Parker","spider stuff",3);


//how NOT to do it
var deadpool = {
    "realName" : "Wade Wilson",
    "power" : "immortality",
    "deadRels" : "a lot"
}