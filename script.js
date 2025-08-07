let deckID; 
let remainingCards;
let score = 0; 

let cardRanks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE"
]

let scoreRanks = [
    10,   
    20,   
    30,   
    40,   
    50,   
    60,   
    70,   
    80,   
    100, 
    125,  
    150,  
    200,  
    400   
]



async function drawCards(){
    let url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=5`;
    const response = await fetch(url); 
    console.log(response);

    const data = await response.json();
    console.log(data);

    cards = [] 

    for(i = 0; i < data.cards.length; i++){
        cards[i] = data.cards[i]
    }
    
    remainingCards = data.remaining; 
    document.getElementById("remainingCards").innerHTML = "Cards remaining: " + remainingCards;
}



async function createDeck(callback){
    let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const response = await fetch(url); 
    console.log(response);

    const data = await response.json();
    console.log(data);

    deckID = data.deck_id; 

    callback(); 
}


createDeck(() => {
    drawCards();
})


function scoreCards(){  
    if(cards.length == 0){
        alert("Refresh the page to start a new game")
        return;
    }

    let highestValue = cards[0].value
    for(i = 0; i < cards.length; i++){
        if(cardRanks.indexOf(cards[i].value) > cardRanks.indexOf(highestValue)){
            highestValue = cards[i].value
        }
    }

    score += scoreRanks[cardRanks.indexOf(highestValue)]
    console.log(highestValue)
    document.getElementById("score").innerHTML = "Score: " + score;
    drawCards(); 
}



let drawButton = document.getElementById("draw-button");
drawButton.onclick = drawCards

let scoreButton = document.getElementById("score-button");
scoreButton.onclick = scoreCards