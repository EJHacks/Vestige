let cards = []



function setup(){
    createCanvas(800,800); 
    rectMode(CENTER);      
    textAlign(CENTER);     
}


function drawEmptyCardSlot(x,y){
    stroke(255);      
    fill(0);          
    rect(x,y,100,160); 
}



function drawCard(x,y,num,suit){
    fill(255); 
    rect(x,y,100,160); 
    if(suit == "HEARTS" || suit == "DIAMONDS"){
        fill(255,0,0); 
    } else {
        fill(0);       
    }
    textSize(20)       
    text(suit,x,y);      
    text(num,x,y + 30);  
}


function draw(){
    background(0); 
    for(i = 0; i < 5; i++){
        let x = width/8 + (i * (width/4) * 0.75);
        let y = height/2;
        if(cards[i] != undefined){
            drawCard(x, y, cards[i].value, cards[i].suit);
        }  else {
            drawEmptyCardSlot(x, y)
        }
    }
}