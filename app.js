let editedPlayer = 0
let activePlayer = 0


let players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    }
]




const playerConfigOverlay = document.getElementById("config-overlay")
const playerConfigBackdrop = document.getElementById("backdrop")
const formElement = document.querySelector("form")


const editPlayer1BtnElement = document.getElementById("edit-player-1-btn")
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn")
const cancelBtn = document.getElementById("cancel-player-btn")
const confirmBtn = document.getElementById("confirm-player-btn")
const showError = document.getElementById("config-error")


editPlayer1BtnElement.addEventListener("click", openPlayerConfig)
editPlayer2BtnElement.addEventListener("click", openPlayerConfig)


cancelBtn.addEventListener("click", closePlayerConfig)

playerConfigBackdrop.addEventListener("click", closePlayerConfig)


formElement.addEventListener("submit", savePlayerConfig)

/* ACTIVE GAME AREA */

const gameWindow = document.getElementById("active-game")
const startGameBtn = document.getElementById("btn-start")


startGameBtn.addEventListener("click", activeGameWindow)

const gameFieldElements = document.querySelectorAll("#game-board li")

for (const gameFieldElement of gameFieldElements) {
    
    gameFieldElement.addEventListener("click", selectGameField)

  

}

