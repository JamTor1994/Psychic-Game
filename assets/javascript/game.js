//alphabet set up
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
// win lose var
var wins= 0;
var losses=0;
var guess= 10;
// computer choice set up
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

//loging user inputs
document.onkeypress = function(event) {
    var userGues = event.key;
// setting wins and loses
els{
    guess--;
}
if ( guesses === 0) {
    losses ++
}
}
