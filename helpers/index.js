const scoreText = document.getElementById('score-text')
let score = 0

// Function that increments score
export const incrementScore = (newScore) => {
  score += newScore
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
export const eatPacdot = (cells, pacIndx) => {
  if (cells[pacIndx].classList.contains('pac-dot')) {
    cells[pacIndx].classList.remove('pac-dot')
    incrementScore(1)
  }
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
export const eatBooster = (cells, pacIndx, ghosts) => {
  if (cells[pacIndx].classList.contains('score-booster')) {
    cells[pacIndx].classList.remove('score-booster')
    incrementScore(100)
    // Scare ghosts
    scareGhosts(ghosts)
    // Un-scare ghosts after 10 seconds
    setTimeout(() => {
      unScareGhosts(ghosts)
    }, 10000)
  }
}

// Function to generate a random direction
export const getRandomDirection = (directions) => Math.floor(Math.random() * directions.length)
