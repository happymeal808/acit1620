let init = () =>{
    let planet = document.getElementById('green-planet');
    planet.innerHTML = "red alert, hit by a phaser fire";
}


window.onload = setTimeout(init, '3s')