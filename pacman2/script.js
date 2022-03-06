var pacmanScore = 0;
var msPacmanScore = 0;
var pacmanLives = 3;
var msPacmanLives = 3;

function randomNum() {
    var num = Math.floor(Math.random() * 3) + 1;
    return num;
  }

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'food',
    3:'cherries'
  }

function drawWorld() {
output = "";
for (var row = 0; row < world.length; row++) {
    output += "<div class = 'row'>";
    for (var x = 0; x < world[row].length; x++) {
    output += "<div class = '"+ worldDict[world[row][x]] +"'></div>" 
    //worldDict[world[row][x]];
    }
    output += "</div>";
}
document.getElementById("world").innerHTML = output;
}
drawWorld();

var pacman = {
x: 1,
y: 1
}

var msPacman = {
x: 2,
y: 7
}

var pinky = {
x: 4,
y: 6,
}

var blinky = {
x: 3,
y: 7,
}

var inky = {
x: 6,
y: 12
}

var clyde = {
x: 3,
y: 8
}

function drawPacman() {
document.getElementById('pacman').style.top = pacman.y * 40 + 'px';
document.getElementById('pacman').style.left = pacman.x * 40 + 'px';
}
drawPacman();

function drawMsPacman() {
document.getElementById('ms_pacman').style.top = msPacman.y * 40 + 'px';
document.getElementById('ms_pacman').style.left = msPacman.x * 40 + 'px';
}
drawMsPacman();

function drawPinky() {
document.getElementById('pinky').style.top = pinky.y * 40 + 'px';
document.getElementById('pinky').style.left = pinky.x * 40 + 'px';
}
drawPinky();

function drawBlinky() {
document.getElementById('blinky').style.top = blinky.y * 40 + 'px';
document.getElementById('blinky').style.left = blinky.x * 40 + 'px';
}
drawBlinky();

function drawInky() {
document.getElementById('inky').style.top = inky.y * 40 + 'px';
document.getElementById('inky').style.left = inky.x * 40 + 'px';
}
drawInky();

function drawClyde() {
document.getElementById('clyde').style.top = clyde.y * 40 + 'px';
document.getElementById('clyde').style.left = clyde.x * 40 + 'px';
}
drawClyde();


function updateWorld(keyStroke, worldObj, characterObj) {
    var characterPosition = worldObj[characterObj.y][characterObj.x-1];
    var characterPosition2 = worldObj[characterObj.y][characterObj.x+1];
    var characterPositionVertical = worldObj[characterObj.y-1][characterObj.x];
    var characterPositionVertical2 = worldObj[characterObj.y+1][characterObj.x];

    if (keyStroke == 37) {//Left
      if (characterPosition !== 1 && characterPosition == 2) {
      characterObj.x--;
      pacmanScore += 1;
      } else if (characterPosition !== 1 && characterPosition == 3) { 
        characterObj.x--;
        pacmanScore += 50;
      } else if (characterPosition !== 1){
        characterObj.x--;
        }
      } else if (keyStroke == 39) {//Right
       if (characterPosition2 !== 1 && characterPosition2 == 2) {
      characterObj.x++;
      pacmanScore+=1;
      } else if(characterPosition2 !== 1 && characterPosition2 == 3) {
      characterObj.x++;
      pacmanScore += 50;
      } else if (characterPosition2 !== 1) {
        characterObj.x++;
      }
    }
    else if (keyStroke == 38) {//Up
      if (characterPositionVertical !== 1 && characterPositionVertical == 2) {
      characterObj.y--;
      pacmanScore += 1;
      } else if (characterPositionVertical !== 1 && characterPositionVertical == 3) {
      characterObj.y--;
      pacmanScore += 50;
      } else if (characterPositionVertical !== 1) {
        characterObj.y--;
        }
      } else if(keyStroke == 40) {//Down
       if (characterPositionVertical2 !== 1 && characterPositionVertical2 == 2) {
      characterObj.y++;
      pacmanScore += 1;
      }
      else if(characterPositionVertical2 !== 1 && characterPositionVertical2 == 3){
        characterObj.y++;
        pacmanScore += 50;
      } else if (characterPositionVertical2 !== 1) {
        characterObj.y++;
      } 
    }

    if (keyStroke == 65) {//Left a
        if (characterPosition !== 1 && characterPosition == 2) {
        characterObj.x--;
        msPacmanScore += 1;
        } else if (characterPosition !== 1 && characterPosition == 3) { 
          characterObj.x--;
          msPacmanScore += 50;
        } else if (characterPosition !== 1){
          characterObj.x--;
          }
        } else if (keyStroke == 68) {//Right d
         if (characterPosition2 !== 1 && characterPosition2 == 2) {
        characterObj.x++;
        msPacmanScore+=1;
        } else if(characterPosition2 !== 1 && characterPosition2 == 3) {
        characterObj.x++;
        msPacmanScore += 50;
        } else if (characterPosition2 !== 1) {
          characterObj.x++;
        }
      }
      else if (keyStroke == 87) {//Up w
        if (characterPositionVertical !== 1 && characterPositionVertical == 2) {
        characterObj.y--;
        msPacmanScore += 1;
        } else if (characterPositionVertical !== 1 && characterPositionVertical == 3) {
        characterObj.y--;
        msPacmanScore += 50;
        } else if (characterPositionVertical !== 1) {
          characterObj.y--;
          }
        } else if(keyStroke == 83) {//Down S
         if (characterPositionVertical2 !== 1 && characterPositionVertical2 == 2) {
        characterObj.y++;
        msPacmanScore += 1;
        }
        else if(characterPositionVertical2 !== 1 && characterPositionVertical2 == 3){
          characterObj.y++;
          msPacmanScore += 50;
        } else if (characterPositionVertical2 !== 1) {
          characterObj.y++;
        } 
      }
  }


document.onkeydown = function(e) {

updateWorld(e.keyCode, world, pacman);
updateWorld(e.keyCode, world, msPacman);
updateWorld(e.keyCode, world, pinky);
updateWorld(e.keyCode, world, clyde);
updateWorld(e.keyCode, world, inky);
updateWorld(e.keyCode, world, blinky);
updateWorld(e.keyCode, world, blinky);
world[pacman.y][pacman.x] = 0;

function moveGhost(worldCallback, favoriteGhost, worldArr) {
    var randomMovement = [37, 38, 39, 40];
    var ghostMove = Math.floor(Math.random() * 3) + 0;
    var randmonGhostMove = randomMovement[ghostMove];
    worldCallback(randmonGhostMove,worldArr,favoriteGhost);
} 
moveGhost(updateWorld, pinky, world);
moveGhost(updateWorld, clyde, world);
moveGhost(updateWorld, blinky, world);
moveGhost(updateWorld, pinky, world);
moveGhost(updateWorld, inky, world);
moveGhost(updateWorld, inky, world);

drawPacman();
drawMsPacman();
drawPinky();
drawBlinky();
drawInky();
drawClyde();
drawWorld();

function eatPacman(pacmanObj, ghostObj) {
    if (pacmanObj.x === ghostObj.x && pacmanObj.y === ghostObj.y) {
        return true;
    }
    return false;
    }
    if (eatPacman(pacman, pinky) || eatPacman(pacman, blinky) ||  eatPacman(pacman, inky) ||  eatPacman(pacman, clyde)) {
        pacmanLives -= 1;
    } else if (eatPacman(msPacman, pinky) || eatPacman(msPacman, blinky) ||  eatPacman(msPacman, inky) ||  eatPacman(msPacman, clyde)) {
        msPacmanLives -=1;
    }
    if (pacmanLives === 0) {
        alert( `Game over, playerOne! Your final score was: ${pacmanScore}`);
    } else if (msPacmanLives === 0) {
        alert( `Game over, playerTwo! Your final score was: ${msPacmanScore}`);
    }
}
