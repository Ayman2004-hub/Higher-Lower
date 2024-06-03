console.log('Main loaded');

// Name players
const nameComputer = document.querySelector('.computer');
const namePlayer = document.querySelector('.player');

// buttons
const diceBtn = document.querySelector('.dice-button');
const higherBtn = document.querySelector('.higher-button');
const lowerBtn = document.querySelector('.lower-button');
const goBtn = document.querySelector('.go-button');

//credit system
let creditBot = 5;
let creditPlayer = 5;

//Text-allert
let textAlert = document.querySelector('.message-box');

// Variable for generating numbers
let computerRoll;
let playerRoll;

//dice player/computer and array for dices from 1 to 6
let computerDiceOne = document.querySelector('.computer-dice-one');
let playerDiceOne = document.querySelector('.player-dice-one');
const diceList = ['&#9856', '&#9857', '&#9858', '&#9859', '&#9860', '&#9861'];

//disable buttons untill pressed on go button
diceBtn.disabled = true;
higherBtn.disabled = true;
lowerBtn.disabled = true;

//connecting buttons for styling of page
styleOne = document.querySelector('.warm');
styleTwo = document.querySelector('.cool');

// eventlistener when button is pressed background-color and text-color turns warm for change of the page
styleOne.addEventListener('click', function () {
    document.body.style.setProperty('--text-color', '#393e46')
    document.body.style.setProperty('--background-color', '#f96d00')
});
// eventlistener when button is pressed background-color and text-color turns warm for change of the page
styleTwo.addEventListener('click', function () {
    document.body.style.setProperty('--text-color', '#9fd3c7')
    document.body.style.setProperty('--background-color', '#385170')
});

// math.random function generates a random number threw 1 to 6. + 1 to add a number because it starts from 0 to 5.
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Update function
function updateGame() {
    //player-credits and computer-credits changes text to actual credit-score  
    document.querySelector('.computer-credits').textContent = creditBot;
    document.querySelector('.player-credits').textContent = creditPlayer;

    //game-over if-statement if it hits the value 12
    //computer wins if the credit-score hits 12
    if (creditBot == 0) {
        higherBtn.disabled = true;
        lowerBtn.disabled = true;
        diceBtn.disabled = true;
        textAlert.textContent = 'The player has won the match, press on the go button to reset the game.';
        //reseting the game score to play again and enable the go button
        goBtn.disabled = false;
        creditBot = 5
        creditPlayer = 5
        //player wins if score credit-score 12
    } else if (creditPlayer == 0) {
        higherBtn.disabled = true;
        lowerBtn.disabled = true;
        diceBtn.disabled = true;
        textAlert.textContent = 'The computer has won the match, press on the go button to reset the game';
        //reseting the game score to play again and enable the go button
        goBtn.disabled = false;
        creditBot = 5
        creditPlayer = 5
    }
}

//start button function to start the game 
goBtn.addEventListener('click', function () {
    diceBtn.disabled = false;
    goBtn.disabled = true;
    textAlert.textContent = 'Your game has been started, Click on the (Throw dice) button';
    updateGame();
});

//Function dice-button to give you an text-alert if you want to throw higher or lower
diceBtn.addEventListener('click', function () {
    diceBtn.disabled = true;
    higherBtn.disabled = false;
    lowerBtn.disabled = false;
    textAlert.textContent = 'Choose (Higer) or (Lower) button'
    //generate number 1 to 6
    playerRoll = rollDice();
    computerRoll = rollDice();

    console.log(computerRoll + ' ' + 'computerRoll')
    console.log(playerRoll + ' ' + 'playerRoll')

    updateGame();
});

//function higher button
higherBtn.addEventListener('click', function () {
    // disable when pressed
    higherBtn.disabled = true;
    lowerBtn.disabled = true;
    diceBtn.disabled = false;

    // Access the computerRoll and playerRoll variables here.
    playerRoll;
    computerRoll;

    //dice roll innerHTML value worth from 1-6 
    document.querySelector('.player-dice-one').innerHTML = diceList[playerRoll - 1];
    document.querySelector('.computer-dice-one').innerHTML = diceList[computerRoll - 1];


    //if-statement if you think the value is higher then the computer
    if (playerRoll > computerRoll) {
        //Player wins
        creditBot -= 1;
        creditPlayer += 1;
        textAlert.textContent = 'Player Wins.';
        //Computer wins
    } else if (playerRoll < computerRoll) {
        creditPlayer -= 1;
        creditBot += 1;
        textAlert.textContent = 'Computer Wins.';
    } else if (playerRoll === computerRoll) {
        textAlert.textContent = 'Draw';
    }
    // Result of the game
    updateGame();
});

//function lower button
lowerBtn.addEventListener('click', function () {
    // disable when pressed
    higherBtn.disabled = true;
    lowerBtn.disabled = true;
    diceBtn.disabled = false;

    // Access the computerRoll and playerRoll variables here.
    playerRoll;
    computerRoll;

    //dice roll innerHTML function value from 1-6 
    document.querySelector('.player-dice-one').innerHTML = diceList[playerRoll - 1];
    document.querySelector('.computer-dice-one').innerHTML = diceList[computerRoll - 1];

    //if-statement if you think the value is lower then the computer
    if (playerRoll < computerRoll) {
        //Player wins
        creditBot -= 1;
        creditPlayer += 1;
        textAlert.textContent = 'Player Wins.';
        //Computer wins
    } else if (playerRoll > computerRoll) {
        creditPlayer -= 1;
        creditBot += 1;
        textAlert.textContent = 'Computer Wins.';
    } else if (playerRoll === computerRoll) {
        textAlert.textContent = 'Draw';
    }
    // Result of the game
    updateGame();
});

