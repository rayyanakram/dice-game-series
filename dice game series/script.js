document.addEventListener('DOMContentLoaded', function() {
    const roll1 = document.getElementById('roll1');
    const roll2 = document.getElementById('roll2');
    const score1Total = document.getElementById('score1');
    const score2Total = document.getElementById('score2');
    const win = document.getElementById('winner');
    const matchCounter = document.getElementById('matchCounter');
     
    const imagesFolderPath = 'images/';

    let score1 = 0;
    let score2 = 0;
    let end = false;
    let gameOver = false;

    
    function rollDice(player) {
        if (!gameOver) {
            let diceRoll = Math.ceil(Math.random() * 6);
            let diceImage = `${imagesFolderPath}dice${diceRoll}.jpg`;
            let diceImageElement = document.createElement('img');
            diceImageElement.src = diceImage;

            if (player === 1) {
                document.getElementById('diceImage1').innerHTML = '';
                document.getElementById('diceImage1').appendChild(diceImageElement);
                
                if (diceRoll === 1) {
                    end = true;
                    win.textContent = 'Second player\'s turn';
                } else {
                    score1 += diceRoll;
                    score1Total.textContent = score1;
                }

            } else if (player === 2) {
                document.getElementById('diceImage2').innerHTML = '';
                document.getElementById('diceImage2').appendChild(diceImageElement);
               
                if (diceRoll === 1) {
                    gameOver = true;
                    if (score1 > score2) {
                        win.textContent = `Player 1 wins!`;
                    
                    } else {
                        win.textContent = `Player 2 wins!`;
                    }
            }
        }
    }
}

    roll1.addEventListener('click', function() {
        if (!gameOver && !end) {
            rollDice(1);
        }
    });

    roll2.addEventListener('click', function() {
        if (!gameOver && end) {
            rollDice(2);
        }
    });
});