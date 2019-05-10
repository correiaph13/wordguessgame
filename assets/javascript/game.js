window.onload = function () {

    // var wordToGuess //wordToGuess
    
    var lettersGuessed = event.key;//letters guessed
    
    var letttersIncorrect = ["h","j"];
    
    var maxGuessNumber = 6 //number of guesses, lets say 6
    
    var guessesLeft = 1
    
    //obtain random word from wordbank in separate file
    var wordToGuess = words[Math.floor(Math.random() * words.length)];
    
    
    let wins = 4;
    let losses = 5;
    
          
      // // Create variables that hold references to the places in the HTML where we want to display things.
      //   var lettersGuessedText = document.getElementById("lettersGuessed");
      //   var lettersCorrectText = document.getElementById("lettersCorrect");
      //   var lettersIncorrectText = document.getElementById("letttersIncorrect");
    var winsText = document.getElementById("winsText");
    var lossesText = document.getElementById("lossesText");
    var wordToGuessText = document.getElementById("wordToGuess");
    var guessesLeftText = document.getElementById("guessesLeftText");
    var lettersIncorrectText = document.getElementById("lettersIncorrectText");
    var answerArrayText = document.getElementById("answerArrayText");
    
    var answerArray = [];{
    for (var i = 0; i < wordToGuess.word.length; i++) {
     answerArray[i] = "_";
    }
    var remainingLetters = wordToGuess.word.length;       
           
    }
    
    // Display the user and computer guesses, and wins/losses/ties
          winsText.textContent = "wins: " + wins;
          lossesText.textContent = "losses: " + losses;
          wordToGuessText.textContent = "your word is: " + wordToGuess.word;
          guessesLeftText.textContent = "remaining guesses: " + guessesLeft;
          lettersIncorrectText.textContent = "incorrect letters: "+ letttersIncorrect;
          answerArrayText.textContent = "Word to Guess: " + answerArray;
          
    // This function is run whenever the user presses a key.
           
    var guess = event.key;
    // if (guess === null) {
    // } else if (guess.length !== 1) {
    // console.log("Please enter a single letter.")
    // }
     
    
    // } else {
    // // Update the game state with the guess
    // }
    
    console.log(answerArray);
    
    console.log(wordToGuess.word);
    
    console.log(guess);
    
           
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    