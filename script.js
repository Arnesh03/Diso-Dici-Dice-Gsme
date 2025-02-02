'use strict';

// //selecting elements
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const current0el = document.getElementById('current--0');
// const current1el = document.getElementById('current--1');
// const diceEl = document.querySelector('.dice');
// const btnRoll = document.querySelector('.btn--roll');
// const btnNew = document.querySelector('.btn--new');
// const btnHold = document.querySelector('.btn--hold');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// const switchingPlayer = function () {
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   //Switching background
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };
// let scores = [0, 0],
//   currentScore = 0,
//   activePlayer = 0,
//   playing = true;
// //Starting condition
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0el.textContent = 0;
//   current1el.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// score0El.textContent = 0;
// score1El.textContent = 0;
// //Hidding dice
// diceEl.classList.add('hidden');

// //rolling a dice
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     //1. Generating a random number
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     //2.Dispalying the dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     //3.Check if rolled no. 1 , if true switch to next player
//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       //Switch player
//       switchingPlayer();
//     }
//   }
// });

// //Holding current score
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     //1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     //2. Check if player's score is >=100
//     if (scores[activePlayer] >= 100) {
//       //Finish the game
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//       diceEl.classList.add('hidden');
//     } else {
//       //switch to the next player
//       switchingPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//REVISION ㊫🔴

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
//Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchingPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for rolled 1: if true , switch to next player
    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switching player
      switchingPlayer();
    }
  }
});
//Holding button
btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to the active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.Check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //Else switch the player
      switchingPlayer();
    }
  }
});

//Implementing new game or resetting button
btnNew.addEventListener('click', init);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
