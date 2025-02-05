

function get_random_card(min,max){
    let random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    if(random_number>10){
        return 10
    } else if(random_number === 1 ){
        return 11 
    } else {
        return random_number
    }

 

      
      
  

}
let player={
    name:"Stones",
    chips: 145,
}
let card = []

let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let message_el = document.getElementById("message-el")
let sum_el = document.getElementById("sum_el")
cards_el = document.getElementById("card_el")
playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $ " + player.chips 


// logic of BlackJack
// The Whole Purpose Of Black Jack Is to ensure that You Dont Get A Card that is above 21 and it should also not  be less than 21
// Worse Case Scenario It Should Be As Close to 21 as possible.
function startGame(){
    let firstCard = get_random_card(1,13)
    let secondCard = get_random_card(1,13)
    card.push([firstCard,secondCard])
    sum = firstCard + secondCard


    
    renderGame()
}

function renderGame(){

    cards_el.textContent = " Cards: " 
    for(let i = 0; i < card.length; i++){
        cards_el.textContent += card[i] + "      "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        }
    message_el.innerText = message
    sum_el.textContent = " Sum :" + sum 
    
      

}

function New_card(){
    if(isAlive === true && sum !== 21 ){
        New_card()
    }
    let newCard = get_random_card(2,11)
    sum += newCard
    renderGame()

}

