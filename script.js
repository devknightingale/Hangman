const COUNTRIES = ["UNITED STATES", "SOUTH KOREA", "JAPAN", "MEXICO", "KENYA", "ENGLAND"];
let word = ""; 
let splitWord = [];
var letterGuess = "";
let hangmanTilesNumber = 0; 
var livesLeft = 0; 
const livesArr = ["lifeone", "lifetwo", "lifethree"];
var currentLives = 2; 



function loseLife() { 

    var ancestor = document.getElementById("lives-container"); 
    var descendants = ancestor.getElementsByTagName("div"); 

    var life = document.getElementById(livesArr[currentLives]); 
    life.style.visibility = "hidden";  
    currentLives -= 1; 
}

function getRandomInt(max) { 
    return Math.floor(Math.random() * max); 
}

function newWord() { 
    word = COUNTRIES[getRandomInt(COUNTRIES.length)];
    trimSpaces(word); 
}

function trimSpaces(word) { 
    splitWord = word.replaceAll(" ", "").split('');    
    hangmanTilesNumber = splitWord.length; 
    return splitWord; 
}

function createHangmanTiles(hangmanTilesNumber) { 
    const container = document.querySelector(".hangman-tiles-container");
   
    // get rid of old tiles 
    const myNode = document.getElementById("hangman-tiles-container"); 
    while (myNode.firstChild) { 
        myNode.removeChild(myNode.lastChild);
    }

    // adds divs for each hangman tile 
    for (let i = 0; i < hangmanTilesNumber; i++) {
        var div = document.createElement("div");
        container.appendChild(div); 
        div.className = "hangman-tiles"; 
        
        // create letters inside the divs 
        var letter = document.createElement("p"); 
        div.appendChild(letter); 
        letter.className = "hangman-letters"; 
        letter.textContent = splitWord[i];
    }
}


function getLetterGuess(clicked_id) { 
    letterGuess = document.getElementById(clicked_id).innerText; 
    document.getElementById(clicked_id).className="guessed-letter-tiles";
    var ancestor = document.getElementById("hangman-tiles-container");
    var descendants = ancestor.getElementsByTagName("div"); 
    var guessedCorrectly = false; 
    // Loops through the array of "letter-tiles" div to find which matches the guessed letter (aka the clicked tile). 
    // Then, sets the display of that tile for a match to visible. 
    for (let i = 0; i < descendants.length; i++) {
        if (descendants[i].lastChild.innerText == letterGuess) { 
            // the only way to make this work was by using classes to change the display style, as .style did not work without having an id 
            descendants[i].lastChild.className = "hangman-letters-correct"
            descendants[i].className = "hangman-tiles-correct"; 
            guessedCorrectly = true; 
        } 
    }
    if (guessedCorrectly == false) { 
        console.log("no matches, life lost"); 
        if (currentLives > 0) { 
            loseLife(); 
        }
        else { 
            loseLife(); 
            alert("No lives left, game over! Resetting game."); 
            reset(); 
        }
        
    }
    
    
}

// TESTING PURPOSES ONLY 
function testButton() { 
    // testing purposes 
    for (let i = 0; i < splitWord.length; i++) { 
        console.log(splitWord[i]);
    }
    createHangmanTiles(hangmanTilesNumber); 
    console.log(hangmanTilesNumber);
}

function reset() { 
    // get new word
    word = COUNTRIES[getRandomInt(COUNTRIES.length)];

    //trimSpaces() will remove any spaces in the country name and push it together into a single contiguous string 
    trimSpaces(word); 

    // will create the "blank" tiles for the word to be guessed
    createHangmanTiles(hangmanTilesNumber); 

    // reset all letter tiles to full opacity for new word by resetting the class name to default
    var ancestor = document.getElementById("guess-container");
    var descendants = ancestor.getElementsByTagName("div"); 

    for (let i = 0; i < descendants.length; i++) { 
        if (descendants[i].className = "guessed-letter-tiles") { 
            descendants[i].className = "guess-letter-tiles";
        }
    }

    // // reset life hearts 
    resetHearts(); 
    
}

function resetHearts() { 
    
    for (let i = 0; i < livesArr.length; i++) { 
        var element = document.getElementById(livesArr[i]);
        element.style.visibility = "visible"; 
    }
}
