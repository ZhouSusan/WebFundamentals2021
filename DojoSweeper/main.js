var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(array) {
  var result = "";
  for(var i=0; i<array.length; i++) {
    for(var j=0; j<array[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}
    

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  gameOver(i, j);
  console.log({i, j});
  var totalNijas = 0;
  for (var row = i-1; row <= i+1; row++) {
    if (row <= -1 || row > randomDojo[i].length-1) {
      continue;
    } else {
      for (var column = j-1; column <= j+1; column++) {
        if (column <= -1 || column > randomDojo[i].length-1 && column > randomDojo[j].length-1) {
          continue;
        } else if (row == i && column == j) {
            continue;
        } else {
          totalNijas += parseInt(randomDojo[row][column]);
        }
      } 
    } 
  } 

  element.innerText = totalNijas;
  //alert(totalNijas);
}  

// at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
var randomDojo = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


function shuffleArr(arr) {
  var randomIndex, secondRandomIndex;
  var ninjasCount = 10;
  while (ninjasCount != 0) {
    randomIndex = Math.floor(Math.random() * 10);
    secondRandomIndex = Math.floor(Math.random() * 10);
    
    if (arr[secondRandomIndex][randomIndex] == 1) {
      continue;

    }
    ninjasCount--;
    arr[secondRandomIndex][randomIndex] = 1; 
  }
  return arr;
}

var updatedArr = shuffleArr(randomDojo);

function gameOver(i, j) {
  if(randomDojo[i][j] == 1) {
    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
  }
}
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(updatedArr);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(updatedArr); 