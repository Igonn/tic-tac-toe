


function activeGameWindow() {

if(players[0].name === "" || players[1].name === "") {
    alert("Merci de renseigner vos noms")
    return
}


    gameWindow.style.display = "block"
}


function selectGameField(event) {

    this.textContent = players[activePlayer].symbol
    console.log(event)

}

