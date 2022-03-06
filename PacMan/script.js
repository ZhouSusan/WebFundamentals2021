const tileSize = 32;
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.yellowDot = new Image();
    this.yellowDot.src = "images/yellowDot.png";

    this.wall = new Image();
    this.wall.src = "images/wall.png";

    this.pinkDot = new Image();
    this.pinkDot.src = "images/pinkDot.png";
  }

  map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  draw(ctx) {
    for (var row = 0; row < this.map.length; row++) {
      for (var column = 0; column < this.map[row.length]; column++) {
        var tile = this.map[row][column];
        if (tile === 1) {
          this.#drawWall();//private method
        }
      }
    }
  }
#drawWall(){}

  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }
}
const tileMap = new TileMap(tileSize);

function gameLoop() {
  tileMap.draw(ctx);
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75); //call this method every 75 per seconds
