import {
  drawGrids,
  getRandomDirection,
  Ghost,
  hasEatenPacdot,
  hasEatenScoreBooster,
  incrementScore,
  isNextWallOrGhostHome,
  unScareGhosts
} from './helpers'

// Create a grid of 28 X 28 cells
const gameContainer = document.querySelector('.game-container')
const rows = 28
const cells = []
// prettier-ignore
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
  ]

// Create cell divs and add them to an array
for (let i = 0; i < rows * rows; i += 1) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cells.push(cell)
  gameContainer.appendChild(cell)
}

// Draw grids
drawGrids(layout, cells)

// Ghosts information
const ghosts = [new Ghost(375), new Ghost(380), new Ghost(403), new Ghost(408)]

// Place pacman in the grid
let pacIndex = 490
cells[pacIndex].classList.add('pacman')

// Game over text
const gameOverText = document.querySelector('.game-over-text')

let timerId = null

// Function to game over
const gameOver = (message, listenerFunction) => {
  // Remove event listener
  document.body.removeEventListener('keyup', listenerFunction)
  // Display message
  gameOverText.textContent = message
  gameOverText.classList.add('diplay-game-over-text')
  // Clear interval ids of all ghosts
  ghosts.forEach((ghost) => {
    clearInterval(ghost.intervalId)
  })
  // Clear timer id of scared ghosts
  clearTimeout(timerId)
  // Unscare ghosts right now
  unScareGhosts(ghosts)
}

// Number of pacdots and score boosters
let numOfPacDots = 234
let numOfScoreBoosters = 4

// Function that helps to move pacman
const movePacman = (event) => {
  // Remove pacman class from current pacIndex
  cells[pacIndex].classList.remove('pacman')
  switch (event.key) {
    case 'ArrowRight':
      if (pacIndex === 391) pacIndex = 364
      else if (!isNextWallOrGhostHome(cells, pacIndex + 1)) {
        pacIndex += 1
      }
      break

    case 'ArrowLeft':
      if (pacIndex === 364) pacIndex = 391
      else if (!isNextWallOrGhostHome(cells, pacIndex - 1)) {
        pacIndex -= 1
      }
      break

    case 'ArrowUp':
      if (!isNextWallOrGhostHome(cells, pacIndex - rows)) {
        pacIndex -= rows
      }
      break

    case 'ArrowDown':
      if (!isNextWallOrGhostHome(cells, pacIndex + rows)) {
        pacIndex += rows
      }
      break

    // No default
  }

  // Check if pacman has eaten a pacdot
  if (hasEatenPacdot(cells, pacIndex)) {
    // Decrement the number of pacdots
    numOfPacDots -= 1
  }

  // Check if pacman has eated a score booster
  const returnVal = hasEatenScoreBooster(cells, pacIndex, ghosts)
  if (typeof returnVal === 'number') {
    timerId = returnVal
    // Decrement the number of score boosters
    numOfScoreBoosters -= 1
  }

  // if (numOfPacDots === 0 && numOfScoreBoosters === 0) {
  if (numOfPacDots === 0 && numOfScoreBoosters === 0) {
    gameOver('You Won!', movePacman)
  }

  // Add pacman class to the next pacIndex
  cells[pacIndex].classList.add('pacman')
}

// Directions to move ghosts
const arrOfDirections = [1, -1, rows, -rows]

// Move ghosts
const moveGhosts = () => {
  ghosts.forEach((ghost) => {
    let directionIndex = getRandomDirection(arrOfDirections)
    ghost.intervalId = setInterval(() => {
      // Generate new directionIndex every time if ghost is inside ghost home
      if (cells[ghost.currentIndex].classList.contains('ghost-home')) {
        directionIndex = getRandomDirection(arrOfDirections)
      }
      // Find a direction where is no wall
      while (
        cells[ghost.currentIndex + arrOfDirections[directionIndex]].classList.contains('wall')
      ) {
        directionIndex = getRandomDirection(arrOfDirections)
      }

      // Remove ghost or scared-ghost class
      if (ghost.isScared) {
        // Bonus point when pacman eats a scared ghost
        cells[ghost.currentIndex].classList.contains('pacman') && incrementScore(200)
        cells[ghost.currentIndex].classList.remove('ghost')
        cells[ghost.currentIndex].classList.remove('scared-ghost')
      } else {
        cells[ghost.currentIndex].classList.contains('pacman') && gameOver('Game Over!', movePacman)
        cells[ghost.currentIndex].classList.remove('scared-ghost')
        cells[ghost.currentIndex].classList.remove('ghost')
      }

      // New ghost index
      ghost.currentIndex += arrOfDirections[directionIndex]

      // Add ghost or scared-ghost class
      ghost.isScared
        ? cells[ghost.currentIndex].classList.add('scared-ghost')
        : cells[ghost.currentIndex].classList.add('ghost')
    }, 200)
  })
}

// Function to restart the game
const resetGame = () => {
  // Hide game over text
  gameOverText.classList.remove('diplay-game-over-text')
  // Re-draw grids
  drawGrids(layout, cells)
  // Move ghosts to initial positions and timerIds to null
  ghosts.forEach((ghost) => {
    // Remove current ghosts or scared-ghosts class
    cells[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
    // Reset ghost positions
    ghost.currentIndex = ghost.startIndex
    // Clear and nullify interval ids
    clearInterval(ghost.intervalId)
    ghost.intervalId = null
  })
  // Reset score
  incrementScore(0, true)
  // Rest counts of pacdots and scoreboosters
  numOfPacDots = 234
  numOfScoreBoosters = 4
  // Reset pacman position
  cells[pacIndex].classList.remove('pacman')
  pacIndex = 490
  cells[pacIndex].classList.add('pacman')
}

// Handle clicking start/restart button
const startBtn = document.getElementById('start-btn')
startBtn.addEventListener('click', () => {
  startBtn.textContent = 'Restart'
  resetGame()
  // Move pacman via keyboard
  document.body.addEventListener('keyup', movePacman)
  moveGhosts()
})
