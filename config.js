

function openPlayerConfig(event) {
    /* const selectedPlayerId = event.target.dataset.playerid */
   /*  editedPlayer = selectedPlayerId */
    editedPlayer = +event.target.dataset.playerid /* le "+" permet de transformer le string "1" en nombre/value 1 par ex */
    playerConfigOverlay.style.display = "block"
    playerConfigBackdrop.style.display = "block"
}



function closePlayerConfig() {
    playerConfigOverlay.style.display = "none"
    playerConfigBackdrop.style.display = "none"
    formElement.firstElementChild.classList.remove("error")
    showError.style.display = "none"
    formElement.firstElementChild.lastElementChild.value = ""
   /* formElement.getElementById("playername").value = "" */
}


function savePlayerConfig(event) {
    event.preventDefault()
    const formDataStorage = new FormData(event.target) /* indique qu'on va chercher à 
    cibler la Data sur un fichier donné */
    const enteredPlayerName = formDataStorage.get("playername").trim() /* Indique le "name" de la data qu'on cherche à cibler" */
    /* trim supprime les espaces dans les textes. Ex "   Alex   " -> "Alex"*/  

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error")
        showError.style.display = "block"
        return
    }

    const updatedPlayerData = document.getElementById("player-" + editedPlayer + "-data")
    updatedPlayerData.children[1].textContent = enteredPlayerName

    players = [editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig()

}

