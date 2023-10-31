

window.onload = function(){

    // arrays with the numbers and suits for each card   
let cardType = ["♥","♠️","♣️","♦"];
let cardNumb = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];


function randomElement(){
    document.getElementById("cardNumber").innerHTML = 
    cardNumb[Math.floor(Math.random() * cardNumb.length)];
}

function randomSuits(){
    let selectedSuit = cardType[Math.floor(Math.random() * cardType.length)];
    let color = colorSuits(selectedSuit);
    document.getElementById("topSuit").innerHTML = selectedSuit;    
    document.getElementById("topSuit").style.color = color;  
    document.getElementById("bottomSuit").innerHTML = selectedSuit;
    document.getElementById("bottomSuit").style.color = color;
}

let cardNumber = randomElement(cardNumb);
let topSuit = randomSuits(cardType);
let bottomSuit = randomSuits(cardType);



function colorSuits(selectedSuit){
if (selectedSuit === "♦" || selectedSuit === "♥" ){
    return "red";
}
    else { return "black"; 
    }
}


};
        



         