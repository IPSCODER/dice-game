let player1 = 0;
let player2 = 0;

// for player name
let player01 = prompt();
let player02 = prompt();
document.getElementById("player01").innerHTML = player01;
document.getElementById("player02").innerHTML = player02;
// end
// function for dice
function dice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    
    // storing dice value in player
    player1 = dice1;
    player2 = dice2;
    

      // dice board activity for png
    setTimeout( () =>{
    var diceImg1 = document.querySelector("#img1");
    var diceImg2 = document.querySelector("#img2");
    diceImg1.src = "iimg/" + player1 + ".png";
    diceImg2.src = "iimg/" + player2 + ".png";
  },300);





// applied condition 
  if (player1 < player2) {
    document.getElementById("result").innerHTML = `${player02}- Win The Match`;
  } else if (player1 > player2) {
    document.getElementById("result").innerHTML = `${player01}- Win The Match`;
  } else {
    document.getElementById("result").innerHTML = "Draw The Match";
  }
}
