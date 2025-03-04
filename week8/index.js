let scoops = 5;

while (scoops > 0){
    document.write("Another scoop! <br>");
    if (scoops < 3){
        alert("Ice cream is running low!");
    } else if (scoops >= 5){
        alert("Eat faster.");
    }
    scoops = scoops - 1;
}

