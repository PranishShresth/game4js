/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-1').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function playerChange()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function newGame()
{
    scores = [0, 0];
    roundScore = 0;

    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');

    if(activePlayer === 1)
        playerChange();

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
}

function rule()
{
    alert('Game Rules: \n -The game has 2 players, playing in rounds \n - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score \n    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it\'s the next player\'s turn \n     - The player can choose to \'Hold\', which means that his ROUND score gets added to his GLBAL score. After that, it\'s the next player\'s turn \n    - The first player to reach 100 points on GLOBAL score wins the game');
}

document.querySelector('.btn-roll').addEventListener('click', function()
{
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update the round score IF the rolled number is not a 1

    if (dice !== 1)
    {
        // Add score 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else
    {
        // Next player
        playerChange();
    }
}) ;

document.querySelector('.btn-hold').addEventListener('click', function()
{
    //What does clicking the hold buton do?

    //Add current score to the Global Score 
    scores[activePlayer] += roundScore;

    // Show the Global score in UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Check if the player won the game

    if(scores[activePlayer] >= 20)
    {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    }
    // Next player's turn
    else
        playerChange();
});

document.querySelector('.btn-new').addEventListener('click', newGame);

document.querySelector('.btn-rules').addEventListener('click', rule);