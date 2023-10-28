import '../style/styles.css';
import "https://esm.sh/bootstrap";

window.onload = function(){

    // arrays with the numbers and suits for each card   
let cardType = ["♥","♠️","♣️","♦"];
let cardNumber = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function randomElement(mainCard){
    return mainCard[Math.floor(Math.random() * mainCard.length)];
}
let center = randomElement (cardNumber);
let topSuit = randomElement(cardType);
let bottomSuit = randomElement(cardType);

const p1Element = document.getElementsByClassName("topSuit");
const p2Element = document.getElementsByClassName("cardNumber");
const p3Element = document.getElementsByClassName("bottomSuit");

p1Element[0].innerText = topSuit;
p2Element[0].innerText = center;
p3Element[0].innerText = bottomSuit;

function colorSuits (suit){
if (suit === "♦" || suit === "♥" ){
    return "red";
}
    else { return "black"; 
    }
}

p1Element[0].style.color = colorSuits (topSuit);
p2Element[0].style.color = colorSuits (center);
p3Element[0].style.color= colorSuits (bottomSuit);
};
        



         