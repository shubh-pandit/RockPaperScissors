var choices = ["rock","paper","scissors"];

function computerPlay(){

    return choices[Math.floor((Math.random() * 3))];

}

function playRound(playerMove,computerMove){

    computerMove = computerPlay();
    playerMove = playerPlay();

    if(computerMove=="rock")
}