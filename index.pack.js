/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(1);

// Create a grid of 28 X 28 cells
var gameContainer = document.querySelector('.game-container');
var rows = 28;
var cells = [];
// prettier-ignore
var layout = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// Create cell divs and add them to an array
for (var i = 0; i < rows * rows; i += 1) {
  var cell = document.createElement('div');
  cell.classList.add('cell');
  cells.push(cell);
  gameContainer.appendChild(cell);
}

// Draw grids
(0, _helpers.drawGrids)(layout, cells);

// Ghosts information
var ghosts = [new _helpers.Ghost(375), new _helpers.Ghost(380), new _helpers.Ghost(403), new _helpers.Ghost(408)];

// Place pacman in the grid
var pacIndex = 490;
cells[pacIndex].classList.add('pacman');

// Game over text
var gameOverText = document.querySelector('.game-over-text');

var timerId = null;

// Function to game over
var gameOver = function gameOver(message, listenerFunction) {
  // Remove event listener
  document.body.removeEventListener('keyup', listenerFunction);
  // Display message
  gameOverText.textContent = message;
  gameOverText.classList.add('diplay-game-over-text');
  // Clear interval ids of all ghosts
  ghosts.forEach(function (ghost) {
    clearInterval(ghost.intervalId);
  });
  // Clear timer id of scared ghosts
  clearTimeout(timerId);
  // Unscare ghosts right now
  (0, _helpers.unScareGhosts)(ghosts);
};

// Number of pacdots and score boosters
var numOfPacDots = 234;
var numOfScoreBoosters = 4;

// Function that helps to move pacman
var movePacman = function movePacman(event) {
  // Remove pacman class from current pacIndex
  cells[pacIndex].classList.remove('pacman');
  switch (event.key) {
    case 'ArrowRight':
      if (pacIndex === 391) pacIndex = 364;else if (!(0, _helpers.isNextWallOrGhostHome)(cells, pacIndex + 1)) {
        pacIndex += 1;
      }
      break;

    case 'ArrowLeft':
      if (pacIndex === 364) pacIndex = 391;else if (!(0, _helpers.isNextWallOrGhostHome)(cells, pacIndex - 1)) {
        pacIndex -= 1;
      }
      break;

    case 'ArrowUp':
      if (!(0, _helpers.isNextWallOrGhostHome)(cells, pacIndex - rows)) {
        pacIndex -= rows;
      }
      break;

    case 'ArrowDown':
      if (!(0, _helpers.isNextWallOrGhostHome)(cells, pacIndex + rows)) {
        pacIndex += rows;
      }
      break;

    // No default
  }

  // Check if pacman has eaten a pacdot
  if ((0, _helpers.hasEatenPacdot)(cells, pacIndex)) {
    // Decrement the number of pacdots
    numOfPacDots -= 1;
  }

  // Check if pacman has eated a score booster
  var returnVal = (0, _helpers.hasEatenScoreBooster)(cells, pacIndex, ghosts);
  if (typeof returnVal === 'number') {
    timerId = returnVal;
    // Decrement the number of score boosters
    numOfScoreBoosters -= 1;
  }

  // if (numOfPacDots === 0 && numOfScoreBoosters === 0) {
  if (numOfPacDots === 0 && numOfScoreBoosters === 0) {
    gameOver('You Won!', movePacman);
  }

  // Add pacman class to the next pacIndex
  cells[pacIndex].classList.add('pacman');
};

// Directions to move ghosts
var arrOfDirections = [1, -1, rows, -rows];

// Move ghosts
var moveGhosts = function moveGhosts() {
  ghosts.forEach(function (ghost) {
    var directionIndex = (0, _helpers.getRandomDirection)(arrOfDirections);
    ghost.intervalId = setInterval(function () {
      // Generate new directionIndex every time if ghost is inside ghost home
      if (cells[ghost.currentIndex].classList.contains('ghost-home')) {
        directionIndex = (0, _helpers.getRandomDirection)(arrOfDirections);
      }
      // Find a direction where is no wall
      while (cells[ghost.currentIndex + arrOfDirections[directionIndex]].classList.contains('wall')) {
        directionIndex = (0, _helpers.getRandomDirection)(arrOfDirections);
      }

      // Remove ghost or scared-ghost class
      if (ghost.isScared) {
        // Bonus point when pacman eats a scared ghost
        cells[ghost.currentIndex].classList.contains('pacman') && (0, _helpers.incrementScore)(200);
        cells[ghost.currentIndex].classList.remove('ghost');
        cells[ghost.currentIndex].classList.remove('scared-ghost');
      } else {
        cells[ghost.currentIndex].classList.contains('pacman') && gameOver('Game Over!', movePacman);
        cells[ghost.currentIndex].classList.remove('scared-ghost');
        cells[ghost.currentIndex].classList.remove('ghost');
      }

      // New ghost index
      ghost.currentIndex += arrOfDirections[directionIndex];

      // Add ghost or scared-ghost class
      ghost.isScared ? cells[ghost.currentIndex].classList.add('scared-ghost') : cells[ghost.currentIndex].classList.add('ghost');
    }, 200);
  });
};

// Function to restart the game
var resetGame = function resetGame() {
  // Hide game over text
  gameOverText.classList.remove('diplay-game-over-text');
  // Re-draw grids
  (0, _helpers.drawGrids)(layout, cells);
  // Move ghosts to initial positions and timerIds to null
  ghosts.forEach(function (ghost) {
    // Remove current ghosts or scared-ghosts class
    cells[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');
    // Reset ghost positions
    ghost.currentIndex = ghost.startIndex;
    // Clear and nullify interval ids
    clearInterval(ghost.intervalId);
    ghost.intervalId = null;
  });
  // Reset score
  (0, _helpers.incrementScore)(0, true);
  // Rest counts of pacdots and scoreboosters
  numOfPacDots = 234;
  numOfScoreBoosters = 4;
  // Reset pacman position
  cells[pacIndex].classList.remove('pacman');
  pacIndex = 490;
  cells[pacIndex].classList.add('pacman');
};

// Handle clicking start/restart button
var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function () {
  startBtn.textContent = 'Restart';
  resetGame();
  // Move pacman via keyboard
  document.body.addEventListener('keyup', movePacman);
  moveGhosts();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
var scoreText = document.getElementById('score-text');
var score = 0;

// Function that increments score
var incrementScore = exports.incrementScore = function incrementScore(newScore) {
  var resetScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  resetScore ? score = newScore : score += newScore;
  scoreText.textContent = score;
};

// Function that checks if the next cell is a wall or ghost home
var isNextWallOrGhostHome = exports.isNextWallOrGhostHome = function isNextWallOrGhostHome(cells, nextPacIndex) {
  if (!cells[nextPacIndex].classList.contains('wall') && !cells[nextPacIndex].classList.contains('ghost-home')) {
    return false;
  }
  return true;
};

// Function that helps pacman to eat pacdots
var hasEatenPacdot = exports.hasEatenPacdot = function hasEatenPacdot(cells, pacIndx) {
  if (cells[pacIndx].classList.contains('pac-dot')) {
    cells[pacIndx].classList.remove('pac-dot');
    incrementScore(1);
    return true;
  }
  return false;
};

// Function that scares ghosts
var scareGhosts = exports.scareGhosts = function scareGhosts(ghosts) {
  ghosts.forEach(function (ghost) {
    ghost.isScared = true;
  });
};

// Function that un-scares ghosts
var unScareGhosts = exports.unScareGhosts = function unScareGhosts(ghosts) {
  ghosts.forEach(function (ghost) {
    ghost.isScared = false;
  });
};

// Function that helps pacman to eat score booster
var hasEatenScoreBooster = exports.hasEatenScoreBooster = function hasEatenScoreBooster(cells, pacIndx, ghosts) {
  if (cells[pacIndx].classList.contains('score-booster')) {
    cells[pacIndx].classList.remove('score-booster');
    incrementScore(100);
    // Scare ghosts
    scareGhosts(ghosts);
    // Un-scare ghosts after 10 seconds
    var timerId = setTimeout(function () {
      unScareGhosts(ghosts);
    }, 10000);
    return timerId;
  }
  return false;
};

// Function to generate a random direction
var getRandomDirection = exports.getRandomDirection = function getRandomDirection(directions) {
  return Math.floor(Math.random() * directions.length);
};

// Class for ghosts

var Ghost = exports.Ghost = function Ghost(startIndex) {
  _classCallCheck(this, Ghost);

  this.startIndex = startIndex, this.currentIndex = startIndex, this.isScared = false, this.intervalId = null;
};

// Function to draw grids


var drawGrids = exports.drawGrids = function drawGrids(layout, cells) {
  layout.forEach(function (item, index) {
    switch (item) {
      case 0:
        cells[index].classList.add('pac-dot');
        break;
      case 1:
        cells[index].classList.add('wall');
        break;
      case 2:
        cells[index].classList.add('ghost-home');
        break;
      case 3:
        cells[index].classList.add('score-booster');
        break;
      default:
        cells[index].classList.add('empty');
    }
  });
};

/***/ })
/******/ ]);