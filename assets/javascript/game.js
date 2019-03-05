//var for letters

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// tracking wins losse, and guesses
var wins = 0;
var losses = 0;
var guesses = 10;

//computer choice

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)

   // on key press function/user funct
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }else{
        guesses--;
        console.log(guesses)
    }

    if(guesses === 0){
        losses++;
        alert("You lose")
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
    
    } 
//elements
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}