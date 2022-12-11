// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality







/*--------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]




/*----------------- Variables (state) ----------------------------*/

let board = [null, null, null, null, null, null, null, null, null] 
let turn = 1 
let winner = false
let tie = false
console.log(turn, winner, tie)



/*------------- Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
console.log(squareEls);
const messageEl = document.getElementById('message')
console.log(messageEl)
const resetBtnEl = document.querySelector('button')

/*------------------ Event Listeners -----------------------------*/
document.querySelector('section').addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)

/*--------------------- Functions --------------------------------*/


function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  console.log('This is the init function')
  winner = false
  tie = false
  render()
}
init()

function render() {
  updateBoard()
  updateMessage()
}
  
function updateBoard() {
  board.forEach(function(el,idx) {
    let square = squareEls[idx]
    if (board[idx] === null){
      square.textContent = ''
    } else if (board[idx] === 1) {
      square.textContent = 'X'
    } else if (board[idx] === -1) {
      square.textContent = 'O'
    }
  })
}
  
function updateMessage() {
  let name
  if (turn === 1) {
    name = 'X'
  }  else {
    name = 'O'
  }
  if (winner === false && tie === false) {
    messageEl.textContent = `It is ${name}'s turn `
  } else if (winner === false && tie === true) {
    messageEl.textContent = "It's a tie!"
  } else {
    messageEl.textContent = `Congrats! ${name} won!`
    confetti.start(2000)
  }
}

function handleClick(evt) {
  if (winner === true) {
    return
  }
  console.log(evt.target)
  //obtain the index of the square clicked
  const sqIdx = evt.target.id
  let sliced = sqIdx.slice(sqIdx.length - 1)
  console.log(sliced)
  if (board[sliced] === null) {
    placePiece(sliced)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
  } if (winner === true) {
    return
  }
}

function placePiece(idx) {
    board[idx] = turn
    console.log(board)
    
}

  
function checkForTie() {
  if (!board.includes(null)) {
    tie = true
  }
}

function checkForWinner() {
  winningCombos.forEach(function(arr){
    let winning = 0
    arr.forEach(function(el){
      winning += board[el]
    })
    console.log('check winner', winning)
    if (Math.abs(winning) === 3) { 
        winner = true
    }
  })
}

function switchPlayerTurn(){
  if (winner === true){
    return
  } else {
    turn = turn * -1
  }
}



















