function Pokemon(name,hp,atk,def){
	this.name = name;
	this.hp = hp;
	this.atk = atk;
	this.defense = def;
}

var pikachu = new Pokemon("pikachu",266,50,100);
var squirtle = new Pokemon("squirtle",150,25,90);
var bulbasaur = new Pokemon("bulbasaur",250,70,160);

var pokeRoster = [pikachu,squirtle,bulbasaur];

function printRoster(roster){
	console.log("Printing Roster!");
	for (var i=0; i<roster.length; i++){
		console.log(roster[i]);
	}
}

function pokemonAttacked(roster){
	for (var i=0; i<roster.length; i++){
		roster[i].hp = roster[i].hp - 10;
	}
	printRoster(roster);
}


printRoster(pokeRoster);
console.log("Calling pokemonAttacked()!");
pokemonAttacked(pokeRoster);