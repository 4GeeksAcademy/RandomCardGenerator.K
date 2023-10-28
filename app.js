import '../style/styles.css';

    //This will include file.js into your bundle.
    import 'js/file2.js';
    
    //this will include the styles at index.css to your bundle.
    import '../styles/index.css';


window.onload = function(){

    window.genCard= function(){
    
        var suit = ["♥","♠️","♣️","♦"];
        var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    
            function randomCard(){
    
                var randomSuit = suit[Math.floor(Math.random()*suit.length)];
                var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
    
                document.querySelector(".icon").innerHTML = randomSuit;
                document.querySelector(".cardContentContainer").innerHTML = randomNumber;
                document.querySelector(".iconTwo").innerHTML = randomSuit;
    
                if (randomSuit=="♥" || randomSuit=="♦"){
                    document.querySelector("#maincardcontainer").style.color = "red";
                }
    
                else if (randomSuit=="♠" || randomSuit=="♣️"){
                    document.querySelector("#maincardcontainer").style.color = "black";
    
                }
    
            }
    
        randomCard();
    
    
        };
    
        window.genCard();
    };