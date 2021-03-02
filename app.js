// const display1 = document.querySelector('#display1');
// const display2 = document.querySelector('#display2');

// const player1 = document.querySelector('#player1');
// const player2 = document.querySelector('#player2');
// const buttonR = document.querySelector('#buttonR');

// const setWinningSc = document.querySelector('#setWinningSc');

// let score1 = 0;
// let score2 = 0;
// let winningSc = 3;
// let gameOver = false;

// setWinningSc.addEventListener('change', function () {
//     winningSc = parseInt(this.value);
//     reset();
// })

// player1.addEventListener('click', function () {
//     // console.log('player1')
//     if (!gameOver) {
//         score1 += 1;
//         if (score1 === winningSc) {
//             gameOver = true;
//             display1.classList.add('has-text-success');
//             display2.classList.add('has-text-danger');
//             player1.disabled = true
//             player2.disabled = true
//         }
//         display1.textContent = score1;
//     }
// })

// player2.addEventListener('click', function () {
//     // console.log('player2')
//     if (!gameOver) {
//         score2 += 1;
//         if (score2 === winningSc) {
//             gameOver = true;
//             display2.classList.add('has-text-success');
//             display1.classList.add('has-text-danger');
//             player1.disabled = true
//             player2.disabled = true
//         }
//         display2.textContent = score2;
//     }
// })

// buttonR.addEventListener('click', reset);

// function reset() {
//     gameOver = false;
//     score1 = 0;
//     score2 = 0;
//     display1.textContent = 0;
//     display2.textContent = 0;
//     display1.classList.remove('has-text-success', 'has-text-danger');
//     display2.classList.remove('has-text-success', 'has-text-danger');
//     player1.disabled = false
//     player2.disabled = false
// }

//REFACTORING

const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const buttonR = document.querySelector('#buttonR');

const setWinningSc = document.querySelector('#setWinningSc');

let score1 = 0;
let score2 = 0;
let winningSc = 3;
let gameOver = false;

setWinningSc.addEventListener('change', function () {
    winningSc = parseInt(this.value);
    reset();
})

player1.addEventListener('click', function () {
    // console.log('player1')
    if (!gameOver) {
        score1 += 1;
        if (score1 === winningSc) {
            gameOver = true;
            display1.classList.add('has-text-success');
            display2.classList.add('has-text-danger');
            player1.disabled = true
            player2.disabled = true
        }
        display1.textContent = score1;
    }
})

player2.addEventListener('click', function () {
    // console.log('player2')
    if (!gameOver) {
        score2 += 1;
        if (score2 === winningSc) {
            gameOver = true;
            display2.classList.add('has-text-success');
            display1.classList.add('has-text-danger');
            player1.disabled = true
            player2.disabled = true
        }
        display2.textContent = score2;
    }
})

buttonR.addEventListener('click', reset);

function reset() {
    gameOver = false;
    score1 = 0;
    score2 = 0;
    display1.textContent = 0;
    display2.textContent = 0;
    display1.classList.remove('has-text-success', 'has-text-danger');
    display2.classList.remove('has-text-success', 'has-text-danger');
    player1.disabled = false
    player2.disabled = false
}
