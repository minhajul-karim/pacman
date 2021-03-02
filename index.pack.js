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

// Add classes to cell divs
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

// Place pacman in the grid
var pacIndex = 490;
cells[pacIndex].classList.add('pacman');

// Ghosts information
var ghosts = [{ name: 'inky', startIndex: 375, intervalId: null, isScared: false }, { name: 'pinky', startIndex: 380, intervalId: null, isScared: false }, { name: 'blinky', startIndex: 403, intervalId: null, isScared: false }, { name: 'blinky', startIndex: 408, intervalId: null, isScared: false }];

// Variable to determine whether the game has started or not
var hasGameStarted = false;

// Function that helps to move pacman
var movePacman = function movePacman(event) {
  if (hasGameStarted) {
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
    (0, _helpers.eatPacdot)(cells, pacIndex);
    (0, _helpers.eatBooster)(cells, pacIndex, ghosts);
    // Add pacman class to the next pacIndex
    cells[pacIndex].classList.add('pacman');
  }
};

// Move pacman via keyboard
document.body.addEventListener('keyup', movePacman);

// Directions to move ghosts
var arrOfDirections = [1, -1, rows, -rows];

// Function to game over
var gameOver = function gameOver() {
  document.body.removeEventListener('keyup', movePacman);
  document.querySelector('.game-over-text').classList.add('diplay-game-over-text');
  ghosts.forEach(function (ghost) {
    clearInterval(ghost.intervalId);
  });
};

// Move ghosts
var moveGhosts = function moveGhosts() {
  ghosts.forEach(function (ghost) {
    var directionIndex = (0, _helpers.getRandomDirection)(arrOfDirections);
    ghost.intervalId = setInterval(function () {
      // Generate new directionIndex every time if ghost is inside ghost home
      if (cells[ghost.startIndex].classList.contains('ghost-home')) {
        directionIndex = (0, _helpers.getRandomDirection)(arrOfDirections);
      }
      // Find a direction where is no wall
      while (cells[ghost.startIndex + arrOfDirections[directionIndex]].classList.contains('wall')) {
        directionIndex = (0, _helpers.getRandomDirection)(arrOfDirections);
      }

      // Remove ghost or scared-ghost class
      if (ghost.isScared) {
        // Bonus point when pacman eats a scared ghost
        cells[ghost.startIndex].classList.contains('pacman') && (0, _helpers.incrementScore)(200);
        cells[ghost.startIndex].classList.remove('ghost');
        cells[ghost.startIndex].classList.remove('scared-ghost');
      } else {
        cells[ghost.startIndex].classList.contains('pacman') && gameOver();
        cells[ghost.startIndex].classList.remove('scared-ghost');
        cells[ghost.startIndex].classList.remove('ghost');
      }

      // New ghost index
      ghost.startIndex += arrOfDirections[directionIndex];

      // Add ghost or scared-ghost class
      ghost.isScared ? cells[ghost.startIndex].classList.add('scared-ghost') : cells[ghost.startIndex].classList.add('ghost');
    }, 200);
  });
};

// Handle clicking start/restart button
var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function () {
  hasGameStarted = !hasGameStarted;
  hasGameStarted && moveGhosts();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var scoreText = document.getElementById('score-text');
var score = 0;

// Function that increments score
var incrementScore = exports.incrementScore = function incrementScore(newScore) {
  score += newScore;
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
var eatPacdot = exports.eatPacdot = function eatPacdot(cells, pacIndx) {
  if (cells[pacIndx].classList.contains('pac-dot')) {
    cells[pacIndx].classList.remove('pac-dot');
    incrementScore(1);
  }
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
var eatBooster = exports.eatBooster = function eatBooster(cells, pacIndx, ghosts) {
  if (cells[pacIndx].classList.contains('score-booster')) {
    cells[pacIndx].classList.remove('score-booster');
    incrementScore(100);
    // Scare ghosts
    scareGhosts(ghosts);
    // Un-scare ghosts after 10 seconds
    setTimeout(function () {
      unScareGhosts(ghosts);
    }, 10000);
  }
};

// Function to generate a random direction
var getRandomDirection = exports.getRandomDirection = function getRandomDirection(directions) {
  return Math.floor(Math.random() * directions.length);
};

/***/ })
/******/ ]);