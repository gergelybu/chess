const canvas = document.getElementById("myCanvas");
const CTX = canvas.getContext("2d");
const X = canvas.width / 8;
const Y = canvas.height / 8;
const PAWN = document.getElementById("pawn");
PAWN.onload = () => {
  setInterval(() => {
    drawImg();
  }, 200);
};
let currentX = canvas.width / 2;
let currentY = canvas.height / 2;
let draggable = false;

canvas.onmousedown = (e) => {
  console.log("onmousedown", e.layerX, e.layerY);
  if (
    e.layerX <= currentX + PAWN.width &&
    e.layerX >= currentX - PAWN.width &&
    e.layerY <= currentY + PAWN.height &&
    e.layerY >= currentY - PAWN.height
  ) {
    draggable = true;
    console.log("click image");
  } else {
    console.log("didn't click the image");
  }
};
canvas.onmousemove = (e) => {
  if (draggable) {
    currentX = e.layerX;
    currentY = e.layerY;
  }
};

canvas.onmouseup = (e) => {
  draggable = false;
};

canvas.onmouseout = (e) => {
  draggable = false;
};

function drawBoard() {
  CTX.fillRect(0, 0, X, Y);
  CTX.fillStyle = "#ffffff";
  for (let j = 0; j <= 8; j++) {
    for (let i = 0; i <= 8; i++) {
      CTX.fillRect(X * i, Y * j, X, Y);
      if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
        CTX.fillStyle = "#000000";
      } else {
        CTX.fillStyle = "#ffffff";
      }
    }
  }
}

function draw() {
  drawBoard();
}

function drawImg() {
  CTX.drawImage(PAWN, currentX - PAWN.width / 2, currentY - PAWN.height / 2);
}

draw();
