/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
const scoreText = document.getElementById('score-text')
let score = 0

// Function that increments score
export const incrementScore = (newScore, resetScore = false) => {
  resetScore ? (score = newScore) : (score += newScore)
  scoreText.textContent = score
}

// Function that checks if the next cell is a wall or ghost home
export const isNextWallOrGhostHome = (cells, nextPacIndex) => {
  if (
    !cells[nextPacIndex].classList.contains('wall') &&
    !cells[nextPacIndex].classList.contains('ghost-home')
  ) {
    return false
  }
  return true
}

// Function that helps pacman to eat pacdots
export const hasEatenPacdot = (cells, pacIndx) => {
  if (cells[pacIndx].classList.contains('pac-dot')) {
    cells[pacIndx].classList.remove('pac-dot')
    incrementScore(1)
    return true
  }
  return false
}

// Function that scares ghosts
export const scareGhosts = (ghosts) => {
  ghosts.forEach((ghost) => {
    ghost.isScared = true
  })
}

// Function that un-scares ghosts
export const unScareGhosts = (ghosts) => {
  ghosts.forEach((ghost) => {
    ghost.isScared = false
  })
}

// Function that helps pacman to eat score booster
export const hasEatenScoreBooster = (cells, pacIndx, ghosts) => {
  if (cells[pacIndx].classList.contains('score-booster')) {
    cells[pacIndx].classList.remove('score-booster')
    incrementScore(100)
    // Scare ghosts
    scareGhosts(ghosts)
    // Un-scare ghosts after 10 seconds
    const timerId = setTimeout(() => {
      unScareGhosts(ghosts)
    }, 10000)
    return timerId
  } 
  return false
}

// Function to generate a random direction
export const getRandomDirection = (directions) => Math.floor(Math.random() * directions.length)

// Class for ghosts
export class Ghost {
  constructor(startIndex) {
    this.startIndex = startIndex,
    this.currentIndex = startIndex,
    this.isScared = false,
    this.intervalId = null
  }
}

// Function to draw grids
export const drawGrids = (layout, cells) => {
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
}
