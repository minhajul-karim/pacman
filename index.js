/**
    0 - pac-dots
    1 - wall
    2 - ghost-home
    3 - score booster
    4 - empty
 */

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

// Ghosts information
const ghosts = [
  { name: 'inky', startIndex: 375, intervalId: null, isScared: false },
  { name: 'pinky', startIndex: 380, intervalId: null, isScared: false },
  { name: 'blinky', startIndex: 403, intervalId: null, isScared: false },
  { name: 'blinky', startIndex: 408, intervalId: null, isScared: false },
]

// Create cells
for (let i = 0; i < rows * rows; i += 1) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cells.push(cell)
  gameContainer.appendChild(cell)
}

// Add classes based on their number from layout
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

let pacIndex = 490
cells[pacIndex].classList.add('pacman')

// Function that checks if the next cell is a wall or ghost home
const isNextWallOrGhostHome = (nextPacIndex) => {
  if (
    !cells[nextPacIndex].classList.contains('wall') &&
    !cells[nextPacIndex].classList.contains('ghost-home')
  ) {
    return false
  }
  return true
}

const scoreText = document.getElementById('score-text')
let score = 0

// Function that increments score
const incrementScore = (newScore) => {
  score += newScore
  scoreText.textContent = score
}

// Function that helps pacman to eat pacdots
const eatPacdot = (pacIndx) => {
  if (cells[pacIndx].classList.contains('pac-dot')) {
    cells[pacIndx].classList.remove('pac-dot')
    incrementScore(1)
  }
}

// Function that scares ghosts
const scareGhosts = () => {
  ghosts.forEach((ghost) => {
    ghost.isScared = true
  })
}

// Function that un-scares ghosts
const unScareGhosts = () => {
  ghosts.forEach((ghost) => {
    ghost.isScared = false
  })
}

// Function that helps pacman to score booster
const eatBooster = (pacIndx) => {
  if (cells[pacIndx].classList.contains('score-booster')) {
    cells[pacIndx].classList.remove('score-booster')
    incrementScore(100)
    // Scare ghosts
    scareGhosts()
    // Un-scare ghosts after 10 seconds
    setTimeout(() => {
      unScareGhosts()
    }, 10000)
  }
}

// Function that helps to move pacman
const movePacman = (event) => {
  // Remove pacman class from current pacIndex
  cells[pacIndex].classList.remove('pacman')
  switch (event.key) {
    case 'ArrowRight':
      if (pacIndex === 391) pacIndex = 364
      else if (!isNextWallOrGhostHome(pacIndex + 1)) {
        pacIndex += 1
      }
      break

    case 'ArrowLeft':
      if (pacIndex === 364) pacIndex = 391
      else if (!isNextWallOrGhostHome(pacIndex - 1)) {
        pacIndex -= 1
      }
      break

    case 'ArrowUp':
      if (!isNextWallOrGhostHome(pacIndex - rows)) {
        pacIndex -= rows
      }
      break

    case 'ArrowDown':
      if (!isNextWallOrGhostHome(pacIndex + rows)) {
        pacIndex += rows
      }
      break

    // No default
  }
  eatPacdot(pacIndex)
  eatBooster(pacIndex)
  // Add pacman class to the next pacIndex
  cells[pacIndex].classList.add('pacman')
}

// Move pacman via keyboard
document.body.addEventListener('keyup', movePacman)

// Direction to move ghosts
const directions = [1, -1, rows, -rows]

// Function to generate a random direction
const getRandomDirection = () => Math.floor(Math.random() * directions.length)

// Function to game over
const gameOver = () => {
  document.body.removeEventListener('keyup', movePacman)
  document.querySelector('.game-over-text').classList.add('diplay-game-over-text')
  ghosts.forEach((ghost) => {
    clearInterval(ghost.intervalId)
  })
}

// Move ghosts
ghosts.forEach((ghost) => {
  let directionIndex = getRandomDirection()
  ghost.intervalId = setInterval(() => {
    // Generate new directionIndex every time if ghost is inside ghost home
    if (cells[ghost.startIndex].classList.contains('ghost-home')) {
      directionIndex = getRandomDirection()
    }
    // Find a direction where is no wall
    while (cells[ghost.startIndex + directions[directionIndex]].classList.contains('wall')) {
      directionIndex = getRandomDirection()
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
    ghost.startIndex += directions[directionIndex]

    // Add ghost or scared-ghost class
    ghost.isScared
      ? cells[ghost.startIndex].classList.add('scared-ghost')
      : cells[ghost.startIndex].classList.add('ghost')
  }, 200)
})

// Reload window
document.querySelector('.btn').addEventListener('click', () => {
  location.reload()
})
