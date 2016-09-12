window.onload = function () {
  players = {
    playerOne: {
      div: document.getElementById("player1"),
      name: "Pokeball 1"
    },
    playerTwo: {
      div: document.getElementById("player2"),
      name: "Pokeball 2"
    }
  };
  startGame(players);
};


var players = {};

function startGame(players){
  players.playerOne.div.style.left = 0;
  players.playerTwo.div.style.left = 0;

  document.onkeydown = function(key) {
    players.playerOne.position = parseInt(players.playerOne.div.style.left, 10);
    players.playerTwo.position = parseInt(players.playerTwo.div.style.left, 10);
    checkWinner();
    movePlayer(key)
  };
};

function checkWinner(){
  if (players.playerOne.position + players.playerOne.div.offsetWidth >= window.innerWidth - 30) {
    setWinState(players.playerOne, players);
  };
  if (players.playerTwo.position + players.playerTwo.div.offsetWidth >= window.innerWidth - 30) {
    setWinState(players.playerTwo, players);
  };
};

function movePlayer(key) {
  switch(key.which) {
    case 90:
      var newPlayerOnePosition = players.playerOne.position += 30;
      players.playerOne.div.style.left = newPlayerOnePosition + "px";
      break;
    case 39:
      var newPlayerTwoPosition = players.playerTwo.position += 30;
      players.playerTwo.div.style.left = newPlayerTwoPosition + "px";
      break;
  };
};

function setWinState(player, players){
  document.onkeydown = null;
  var img = document.createElement("img");
  img.setAttribute("id", "winner");
  img.src = "http://i68.tinypic.com/2e6ao9x.jpg";
  document.getElementById("gameboard").appendChild(img);
  document.getElementsByIdName("gameboard").innerText = player.name + " Wins!!!!";
};
