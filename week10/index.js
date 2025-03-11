let dogName = "Boo";
let dogWeight = 23;


let puppyBodyShame = (dogName, dogWeight) => {
    if (dogWeight >= 20){
        console.log(dogName + ", you are a fat dog.");
    } else {
        console.log(dogName + ", you are skinny dog.");
    }
};

puppyBodyShame(dogName, dogWeight);
puppyBodyShame("Sparkle", 18);


deckOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]

let playCards = (deckOfCards) => {
    for (let card of deckOfCards){
        console.log(card);
    }
}
playCards(deckOfCards)


let milk = 2;
let flour = 4;
let bakingPowder = 0.5;
let sugar = 1;
let cum = 0.25;
let eggs = 3;

let bakeACake = () => {
    let wetIngredients = eggs + milk + cum + sugar;
    let dryIngredients = flour + bakingPowder;

    let halfRecipe = () => {
        let halfDry = dryIngredients / 2;
        let halfWet = wetIngredients / 2;
        console.log("Half Dry Ingredients:", halfDry, "g");
        console.log("Half Wet Ingredients:", halfWet, "g");
    };

    halfRecipe();
};

bakeACake();

scores = [1,2,3,4,5,6,7,8,9,10]

let i = 0;
let highScore = 0;

while (i < scores.length){
    console.log("bubble solution #" + i + " score " + scores[i]);

    if (scores[i] > highScore){
        highScore = scores[i]
    };

    i++;
}

// let percocet = "bath";

// drugs = [ "molly", "percocet"]

// let maskOff = [];

// for ( let i = 0; i < drugs.length; i++ ){
//     if (drugs[i]){
//         maskOff.push(i);
//     }
// }

// console.log(maskOff[])

let number = Array(1,2,3,4,5,6)
console.log(number)

let nums = new Array(5);
console.log(nums)

let arr = [1,2,3]

arr.push(4)

console.log(arr)

arr.splice(2,0,10,20)
console.log(arr)

let sliced = arr.slice(1,4)
console.log(sliced)


const multiply = (a,b) =>{
    c = a * b;
    console.log(`the product of ${a} and ${b} is ${c}`)
}

multiply(2,50)

let access = document.getElementById("code6");
let code = access.innerHTML();
code = code + " midnight";

alert(code)