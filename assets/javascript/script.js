window.onload = function () {

  // var wordToGuess //wordToGuess
  //letters guessed

  
  var maxGuessNumber = 6 
  
  //obtain random word from wordbank in separate file
  var wordToGuess = words[Math.floor(Math.random() * words.length)];
  
  
  let wins = 0;
  let losses = 0;
  
  
        
    // // Create variables that hold references to the places in the HTML where we want to display things.

  var winsText = document.getElementById("winsText");
  var lossesText = document.getElementById("lossesText");
  var wordToGuessText = document.getElementById("wordToGuess");
  var guessesLeftText = document.getElementById("guessesLeftText");
  var lettersIncorrectText = document.getElementById("lettersIncorrectText");
  var answerArrayText = document.getElementById("answerArrayText");
  var userGuessText = document.getElementById("userGuessText");
  var userText = document.getElementById("user-text");
  
  var answerArray = [];
  var wordHolder =[];
  
  for (var i = 0; i < wordToGuess.word.length; i++) 
  {
  answerArray[i] = "_";
  }
  var remainingLetters = wordToGuess.word.length;       
         
  
  document.onkeyup = function(event) {
    let userGuess = event.key;
    for (var j = 0; j < wordToGuess.word.length; j++);
     {
       if (wordToGuess.word[j] === userGuess) {
        answerArray[i] = wordToGuess.word[j];
        answerArrayText.textContent = "Word to Guess: " + answerArray.join(' ');
     remainingLetters--;
    }
    console.log(userGuess);
    console.log(answerArray);
    console.log(wordToGuess.word);
    console.log(answerArrayText.textContent = "Word to Guess: " + answerArray.join(' '));
    

       
  }};
  


  
  
  // Display the user and computer guesses, and wins/losses/ties
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        wordToGuessText.textContent = "your word is: " + wordToGuess.word;
        // guessesLeftText.textContent = "remaining guesses: " + guessesLeft;
        // lettersIncorrectText.textContent = "incorrect letters: "+ letttersIncorrect;
        answerArrayText.textContent = "Word to Guess: " + answerArray;
        

  
  
  console.log(answerArray);
  
  console.log(wordToGuess.word);

  };
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  