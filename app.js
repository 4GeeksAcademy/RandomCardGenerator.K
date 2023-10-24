import '../style/styles.css';

    //This will include file.js into your bundle.
    import 'js/file2.js';
    
    //this will include the styles at index.scss to your bundle.
    import '../styles/index.scss';


window.onload = function(){
    console.log('Random Card Gen');

    document.querySelector('card').classList.add('genRandS');
    document.querySelector('card').innerHTML = ('genRandNum');
 
};

    let genRandNum = () =>{
        let numbers =["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        let indexNumbers = Math.floor(Math.random()) * numbers.length);
        return numbers[indexNumbers];
    };

    let genRandS = () => {        
    let suit =["diamond", "spades", "hearts", "clubs",];
    let indexSuit = Math.floor(Math.random()* suit.length);

    return suit[indexSuit];
    };

        let numb = Math.floor(Math.random()* 12);
    };
        
        return numbers[numb];
};    
    let genRandSuit = () =>{    
        let suit = ["&spades;", "&clubs;","&hearts;","&diams;"];
        let indexSuit = Math.floor(Math.random()*suit.length);
        return suit[indexSuit];
};
