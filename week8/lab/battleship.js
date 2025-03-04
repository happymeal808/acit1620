let randLocation = Math.floor(Math.random()*5);
let location1 = randLocation;
let location2 = location1 + 1;
let location3 = location2 + 1;


let guess;
let pastGuesses = [];
let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk){
    guess = prompt("please find the battleship (guess a number from 0-6).");
    guess = Number(guess);

    if ( guess < 0 || guess > 6 || isNaN(guess)) {
        alert("please enter a valid number you pile of cum.");
    } else if (pastGuesses.includes(guess)){
        alert("you already guessed there.")
    } else {
        pastGuesses.push(guess);
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3){
            alert("hit! wahoo");
            hits += 1;
            if (hits === 3){
                isSunk = true;
                alert("you sunk me ship arggg.");
            };
        } else {
            alert("miss");
        }
    }
}

let stats = "you took " + guesses + " guesses to sink the battleship, " + "which meants your accuracy was " + ((3/guesses) * 100) + "%.";

alert(stats);