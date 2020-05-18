var choices = ["rock","paper","scissors"];

function computerPlay(){

    return choices[Math.floor((Math.random() * 3))];

}

function playRound(playerMove,computerMove){


    if(computerMove=="rock"){
        if(playerMove=="scissors")
            return "lose";
        else if(playerMove=="paper")
            return "win";
        else
            return "draw";
    }

    else if(computerMove=="scissors"){
        if(playerMove=="scissors")
            return "draw";
        else if(playerMove=="paper")
            return "lose";
        else
            return "win";
    }
    else{
        if(playerMove=="scissors")
            return "win";
        else if(playerMove=="paper")
            return "draw";
        else
            return "lose";
    }
}

function gameInit(playerMove){

    computerMove = computerPlay();
    results = playRound(playerMove, computerMove);
    printResult(results, computerMove);

}

function printResult(results, computerMove){

    const container = document.querySelector('#res');
    container.textContent = 'Computer played ' + computerMove +', so you ' + results +'!';

}

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        gameInit(button.value);
    });
});
