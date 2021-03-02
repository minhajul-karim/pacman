import {
  eatBooster,
  eatPacdot,
  getRandomDirection,
  incrementScore,
  isNextWallOrGhostHome
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

// Add classes to cell divs
layout.forEach((item, index) => {
  switch (item) {
    case 0:
      cells[index].classList.add('pac-dot')
      break
    case 1:
      cells[index].classList.add('wall')
      break
    case 2:
      cells[index].classList.add('ghost-home')
      break
    case 3:
      cells[index].classList.add('score-booster')
      break
    default:
      cells[index].classList.add('empty')
  }
})

// Place pacman in the grid
let pacIndex = 490
cells[pacIndex].classList.add('pacman')

// Ghosts information
const ghosts = [
  { name: 'inky', startIndex: 375, intervalId: null, isScared: false },
  { name: 'pinky', startIndex: 380, intervalId: null, isScared: false },
  { name: 'blinky', startIndex: 403, intervalId: null, isScared: false },
  { name: 'blinky', startIndex: 408, intervalId: null, isScared: false }
]

// Variable to determine whether the game has started or not
let hasGameStarted = false

// Function that helps to move pacman
const movePacman = (event) => {
  if (hasGameStarted) {
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
    eatPacdot(cells, pacIndex)
    eatBooster(cells, pacIndex, ghosts)
    // Add pacman class to the next pacIndex
    cells[pacIndex].classList.add('pacman')
  }
}

// Move pacman via keyboard
document.body.addEventListener('keyup', movePacman)

// Directions to move ghosts
const arrOfDirections = [1, -1, rows, -rows]

// Function to game over
const gameOver = () => {
  document.body.removeEventListener('keyup', movePacman)
  document.querySelector('.game-over-text').classList.add('diplay-game-over-text')
  ghosts.forEach((ghost) => {
    clearInterval(ghost.intervalId)
  })
}

// Move ghosts
const moveGhosts = () => {
  ghosts.forEach((ghost) => {
    let directionIndex = getRandomDirection(arrOfDirections)
    ghost.intervalId = setInterval(() => {
      // Generate new directionIndex every time if ghost is inside ghost home
      if (cells[ghost.startIndex].classList.contains('ghost-home')) {
        directionIndex = getRandomDirection(arrOfDirections)
      }
      // Find a direction where is no wall
      while (cells[ghost.startIndex + arrOfDirections[directionIndex]].classList.contains('wall')) {
        directionIndex = getRandomDirection(arrOfDirections)
      }

      // Remove ghost or scared-ghost class
      if (ghost.isScared) {
        // Bonus point when pacman eats a scared ghost
        cells[ghost.startIndex].classList.contains('pacman') && incrementScore(200)
        cells[ghost.startIndex].classList.remove('ghost')
        cells[ghost.startIndex].classList.remove('scared-ghost')
      } else {
        cells[ghost.startIndex].classList.contains('pacman') && gameOver()
        cells[ghost.startIndex].classList.remove('scared-ghost')
        cells[ghost.startIndex].classList.remove('ghost')
      }

      // New ghost index
      ghost.startIndex += arrOfDirections[directionIndex]

      // Add ghost or scared-ghost class
      ghost.isScared
        ? cells[ghost.startIndex].classList.add('scared-ghost')
        : cells[ghost.startIndex].classList.add('ghost')
    }, 200)
  })
}

// Handle clicking start/restart button
const startBtn = document.getElementById('start-btn')
startBtn.addEventListener('click', () => {
  hasGameStarted = !hasGameStarted
  hasGameStarted && moveGhosts()
})
