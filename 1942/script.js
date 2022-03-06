var score = 0;

var hero = {
  x: 300,
  y: 400,
};

var bullets = [];
var fighterEnemies = [
  { x: 50, y: 50, destroyed: false},
  { x: 250, y: 50, destroyed: false },
  { x: 450, y: 250, destroyed: false },
  { x: 550, y: 250, destroyed: false },
  { x: 350, y: 150, destroyed: false },
  { x: 150, y: 200, destroyed: false },
  { x: 300, y: 200, destroyed: false },
];

var bossEnemies = [
  { x: 50, y: 150, destroyed: false},
  { x: 100, y: 80, destroyed: false },
];

function displayHero() {
  document.getElementById("hero").style["top"] = hero.y + "px";
  document.getElementById("hero").style["left"] = hero.x + "px";
}

function displayEnemies() {
  var output = "";
  for (var i = 0; i < fighterEnemies.length; i++) {
    output +=
      "<div class ='";
    if (fighterEnemies[i].destroyed == false) {
        output += "enemy1"
    } else {
        output += "destroyed"
    }
    output +=  "' style = 'top:" + fighterEnemies[i].y + "px; left:" + fighterEnemies[i].x + "px'></div>";
  }

  for (var j = 0; j < bossEnemies.length; j++) {
    output +=
      "<div class ='";
    if (bossEnemies[j].destroyed == false) {
        output += "enemy2"
    } else {
        output += "destroyed"
    }
    output +=  "' style = 'top:" + bossEnemies[j].y + "px; left:" + bossEnemies[j].x + "px'></div>";
  }
  document.getElementById("enemies").innerHTML = output;
  //console.log(output);
}


function moveEnemies() {
  for (var i = 0; i < fighterEnemies.length; i++) {
    fighterEnemies[i].y++;
    if (fighterEnemies[i].y > 550) {
      fighterEnemies[i].y = 0;
      fighterEnemies[i].x = Math.random() * 500;
    }
  }

  for (var j = 0; j < bossEnemies.length; j++) {
    bossEnemies[j].y++;
    if (bossEnemies[j].y > 550) {
      bossEnemies[j].y = 0;
      bossEnemies[j].x = Math.random() * 500;
    }
  }
}


function displayBullets() {
  var output = "";
  for (var i = 0; i < bullets.length; i++) {
    output +=
      "<div class ='bullet' style = 'top:" +
      bullets[i].y +
      "px; left:" +
      bullets[i].x +
      "px'></div>";
  }
  document.getElementById("bullets").innerHTML = output;
}

function moveBullets() {
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].y -= 5;
    if (bullets[i].y < 0) {
      bullets[i] = bullets[bullets.length - 1];
      bullets.pop();
      //console.log(bullets);
    }
  }
}

function displayScore() {
  document.getElementById("score").innerHTML = score;
}

function gameLoop() {
  displayHero();
  moveEnemies();
  displayEnemies();
  moveBullets();
  displayBullets();
  detectCollision();
  displayScore();
  playerCollision();
}
setInterval(gameLoop, 40);

function detectCollision() {
  for (var i = 0; i < bullets.length; i++) {
    for (var j = 0; j < fighterEnemies.length; j++) {
      if (Math.abs(bullets[i].x - fighterEnemies[j].x) < 10 &&
        Math.abs(bullets[i].y - fighterEnemies[j].y) < 10) {
        console.log("bullet", i, "and enemy", j, "collided");
        score += 10;
      }
    }
    for (var s = 0; s < bossEnemies.length; s++) {
      if (Math.abs(bullets[i].x - bossEnemies[s].x) < 40 &&
        Math.abs(bullets[i].y - bossEnemies[s].y) < 40) {
        console.log("bullet", i, "and boss", s, "collided");
        score += 10;
      }
    }  
  }    
}

function playerCollision() {
  for (var i = 0; i < fighterEnemies.length; i++) {
    if (Math.abs(hero.x - fighterEnemies[i].x) < 10 &&
      Math.abs(hero.y - fighterEnemies[i].y) < 10) {
      fighterEnemies[i].destroyed = true;
      var audio = new Audio('sound/mixkit-short-explosion-1694.wav');
      audio.play();
      console.log("hero and enemies", i, "collided");
      score -= 500;
    }
  }  

  for (var j = 0; j < bossEnemies.length; j++) {
    if (Math.abs(hero.x - bossEnemies[j].x) < 40 &&
      Math.abs(hero.y - bossEnemies[j].y) < 40) {
      bossEnemies[j].destroyed = true;
      var audio = new Audio('sound/mixkit-short-explosion-1694.wav');
      audio.play();
      console.log("hero and enemies", j, "collided");
      score -= 500;
    } 
  }  
}
 
document.onkeydown = function (e) {
  if (e.keyCode == 37) {
    //left
    hero.x -= 10;
  } else if (e.keyCode == 39) {
    //right
    hero.x += 10;
  } else if (e.keyCode == 38) {
    //up
    hero.y -= 10;
  } else if (e.keyCode == 40) {
    //down
    hero.y += 10;
  } else if (e.keyCode == 32) {
    bullets.push({ x: hero.x + 8, y: hero.y - 15 });
    displayBullets();
  }
};
