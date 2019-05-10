window.onload = function () {


    var wordToGuess //wordToGuess
    
    var wordToGuessLength //length of word to wordToGuess
    
    var lettersInWordToGuess //letters in wordToGuess
    
    var lettersGuessed //letters guessed
    
    var lettersCorrect // correct and incorrect letters
    
    var letttersIncorrect
    
    var maxGuessNumber = 6 //number of guesses, lets say 6
    
    var guessesLeft 
    
    
    
    //obtain random word from wordbank in separate file
    var randomWord = words[Math.floor(Math.random() * words.length)];
    
    console.log(randomWord);
    console.log(words.length);
    
    
    };