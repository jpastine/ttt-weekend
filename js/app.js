// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality







/*--------------------- Constants --------------------------------*/


/*----------------- Variables (state) ----------------------------*/
let board = [null, null, null, null, null, null, null, null, null,]
console.log(board)
let turn = 1, winner = false, tie = false
console.log(turn, winner, tie)



/*------------- Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
console.log(squareEls);
const messageEl = document.getElementById('message')
console.log(messageEl)

/*------------------ Event Listeners -----------------------------*/



/*--------------------- Functions --------------------------------*/
function init() {
  console.log('This is the init function')
  
  
  render()
}
init()

function render() {

}

function updateBoard() {
  board.forEach(function(el, idx) {
    squareEls[idx]
    console.log(squareEls[idx])
  })
  
}
console.log(updateBoard())



