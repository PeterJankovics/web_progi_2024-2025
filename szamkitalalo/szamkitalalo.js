let letrehoz;
let guesslistcontanier = document.querySelector(".guess-container");
let currentguessfield = document.querySelector(".js-guess-field");   
let newgamebutton = document.querySelector(".new-game-button");
function generate()
{
    return Math.floor(Math.random() * 100 -1);
}

function resetGame()
{
    // korabbi tippek torlese
    guesslistcontanier.innerHTML = "";
    currentguessfield.value = "";
    // input mezo tartalmanak a torlese
}
  

function start()
{
    resetGame()
    letrehoz = generate();
}
newgamebutton = addEventListener("click", start());


console.log(generate())
