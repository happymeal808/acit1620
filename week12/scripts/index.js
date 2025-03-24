function init(){
    let images = document.getElementsByTagName("img");
    for (let i = 0; i< images.length; i++){
        images[i].onclick = showAnswer;
    }
}

function showAnswer(event){
    let image = event.target;
    let name = image.id;
    name = "images/" + name + ".jpg";
    image.src = name;
}

window.addEventListener("DOMContentLoaded", init);