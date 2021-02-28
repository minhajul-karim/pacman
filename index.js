/**
    0 - pac-dots
    1 - wall
    2 - ghost-home
    3 - score booster
    4 - empty
 */

/**
 * TODO
 * Create ghosts
 * Eat score booster, earn 100 points & make ghosts scared for 10 sec
 * Eat ghost in this 10 seconds
 */

const gridsSection = document.querySelector('.grids')
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

// Create cells
for (let i = 0; i < rows * rows; i += 1) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cells.push(cell)
  gridsSection.appendChild(cell)
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

let pacIndex = 490 // 364 391
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

// Function that helps pacman to eat pacdots
const eatPacdot = (pacIndx) => {
  if (cells[pacIndx].classList.contains('pac-dot')) {
    cells[pacIndx].classList.remove('pac-dot')
    score += 1
    scoreText.textContent = score
  }
}

// Move pacman
document.body.addEventListener('keydown', (event) => {
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
  // Add pacman class to the next pacIndex
  cells[pacIndex].classList.add('pacman')
})
