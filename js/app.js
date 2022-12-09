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

/*------------------ Event Listeners -----------------------------*/
document.querySelector('section').addEventListener('click', handleClick)


/*--------------------- Functions --------------------------------*/
function init() {
  // board = [null, null, null, null, null, null, null, null, null]
  console.log('This is the init function')
  
  
  render()
  }
init()

function render() {
  updateBoard()
  updateMessage()
  handleClick()
  }

function updateBoard() {
  board.forEach(function(el,idx) {
    let square = squareEls[idx]
    if (board[idx] === null){
      square.textContent = 'null'
    } else if (board[idx] === 1) {
      square.textContent = 'A'
    } else if (board[idx] === -1) {
      square.textContent = 'B'
    }
  })
  
  }

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It is player ${turn}'s turn `
  } else if (winner === false && tie === true) {
    messageEl.textContent = "It's a tie!"
  } else {
    messageEl.textContent = `Congrats! Player ${turn} won!`
  }
  }

function handleClick(evt) {
  console.log('yay')
  //obtain the index of the square clicked
  const sqIdx = evt.target.id
  console.log(sqIdx)
  if (squareEls === sqIdx.value) {
    return
  } if (winner = true) {
    return
  }
  }

  function placePiece(idx) {
    board[idx] = turn
  }
  






  



