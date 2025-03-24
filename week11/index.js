let chevy = {
    make: "chevy",
    model: "bel air",
    color: "red",
    year: 1957,
    passengers: 2,
    convertible: false,
    mileage: 1021
};

let ford = {
    make: "Ford",
    model: "Mustang",
    color: "blue",
    year: 1967,
    passengers: 4,
    convertible: true,
    mileage: 34500
};

let dodge = {
    make: "Dodge",
    model: "Charger",
    color: "black",
    year: 1969,
    passengers: 4,
    convertible: false,
    mileage: 21800
};

let pontiac = {
    make: "Pontiac",
    model: "GTO",
    color: "orange",
    year: 1970,
    passengers: 4,
    convertible: true,
    mileage: 15800
};


let checkCarMilage = (car) =>{
    if (car.mileage > 10000){
        return false;
    } else if (car.year < 1960){
        return false;
    }

    let worthALook = checkCarMilage(dodge);

    if (worthALook){
        console.log("you gotta check out this " + dodge.make + " " + dodge.model + ".")
    }
}

checkCarMilage(pontiac)

const shuffle = (list) => {
    templist = list

    let currentIndex = templist.length
    let randomIndex

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        const temp = templist[currentIndex]
        templist[currentIndex] = templist[randomIndex]
        templist[randomIndex] = temp 
    }
    return templist
}

function makeCar() {
    let makes = ["Chevy", "Pontiac"];
    let models = ["Bel Air", "GTO"];
    let years = [1955, 1970];
    let colors = ["Red", "Pink"];

    let random1 = Math.floor(Math.random() * makes.length);
    let random2 = Math.floor(Math.random() * models.length);
    let random3 = Math.floor(Math.random() * years.length);
    let random4 = Math.floor(Math.random() * colors.length);

    let car = {
        make: makes[random1],
        model: models[random2],
        year: years[random3],
        color: colors[random4]
    }
    console.log(car)

    return car;
}

makeCar()

