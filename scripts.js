

let dealer_cards = [];
let player_cards = [];
let isAlive = true;
let roundFinished = false;

let playerCardsEl = document.getElementById("player-cards")
let dealerCardsEl = document.getElementById("dealer-cards")

function generateCard() {
    console.log("generating cards")
    cardValue = Math.floor(Math.random()*13)+1;
    if (cardValue > 10) cardValue = 10;
    console.log("generated card " + cardValue)
    return cardValue;
}

function startGame() {
    console.log("starting game")
    dealer_cards = []
    player_cards = []
    for (let i = 0; i<2; i++) {
        dealer_cards.push(generateCard())
        player_cards.push(generateCard())
        console.log("added a batch of cards")
    }
    renderGame()
}

function renderGame() {

    dealerCardsEl.textContent = "Cards:"
    playerCardsEl.textContent = "Cards:"
    if (roundFinished) {
        for (let card of dealer_cards) {
            dealerCardsEl.textContent += " " + card
        }
        for (let card of player_cards) {
            playerCardsEl.textContent += " " + card
        }
    }else {
        dealerCardsEl.textContent += " " + dealer_cards[0]
        for (let card of player_cards) {
            playerCardsEl.textContent += " " + card
        }
 
    }
}