function randomPokerCard() {
    const suits=[ '♦', '♥', '♠', '♣'];
    const values= ['2', '3', '4', '5', '6', '7', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    document.querySelector(".topSuit").innerHTML = randomSuit
    document.querySelector(".botSuit").innerHTML = randomSuit
    document.querySelector(".cardSuit".innerHTML = randomSuit

    if (randomSuit) *** "heart icon" || randomSuit *** 
}