var choices = ["rock","paper","scissors"];

var prevPlayerMove = null
var prevComputerMove = null
var flag = true
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
function imageAnimateComputer(){
    const placeHolderContainer = document.querySelector('#compplaceholder');
    console.log('HERE');
    for (i = 0; i < choices.length; i++){
        const container = document.querySelector('#compdisp' + choices[i]);
        placeHolderContainer.style.opacity = "0";
        container.style.opacity = "1";
        placeHolderContainer.style.opacity = "1";
        container.style.opacity = "0";


    }
    
    

}
function computerMoveSelectionDelay(){

    const container = document.querySelector('#res');
    container.classList.add('fadeAnim');
    
    container.textContent = 'Computer is making its move!';
    var newNode = container.cloneNode(true);
    imageAnimateComputer();
    container.parentNode.replaceChild(newNode, container);


}

function imageSelectUser(playerMove){
    const container = document.querySelector('#userdisp' + playerMove);
    const placeHolderContainer = document.querySelector('#userplaceholder');
    placeHolderContainer.style.opacity = "0";
    container.style.opacity = "1"
    container.classList.add('rotateRight');
    container.style.transform = 'rotate(90deg)';

}

function imageSelectComp(computerMove){
    const container = document.querySelector('#compdisp' + computerMove);
    const placeHolderContainer = document.querySelector('#compplaceholder');
    placeHolderContainer.style.opacity = "0";
    container.style.opacity = "1"
    container.classList.add('rotateLeft');
    container.style.transform = 'rotate(-90deg)';
}

function resetGame(playerMove,computerMove){
    const resultContainer = document.querySelector('#res');
    resultContainer.textContent = '                             ';

    const compContainer = document.querySelector('#compdisp' + computerMove);
    const compPlaceHolderContainer = document.querySelector('#compplaceholder'); 
    compPlaceHolderContainer.style.opacity = "1";
    compContainer.style.opacity = "0"
    compContainer.classList.remove('rotateLeft');

    const userContainer = document.querySelector('#userdisp' + playerMove);
    const userPlaceHolderContainer = document.querySelector('#userplaceholder');
    userPlaceHolderContainer.style.opacity = "1";
    userContainer.style.opacity = "0"
    userContainer.classList.remove('rotateRight');

    const btns = document.querySelectorAll('button');
    btns.forEach((button)=>{
        button.classList.remove('selected');
    });

    const textContainer = document.querySelector('#res');
    if(flag)
        textContainer.classList.remove('fadeAnim1');
    else
        textContainer.classList.remove('fadeAnim2');
    textContainer.textContent = '                     ';
}

function updateScoreTable(results){

    var x = document.getElementById("scoreTable").rows[1].cells;
    let userScore = parseInt(x[0].innerHTML);
    let compScore = parseInt(x[1].innerHTML);

    if(results == "win"){
        userScore++;
        x[0].innerHTML = userScore.toString();
    }
    else if(results == "lose"){
        compScore++;
        x[1].innerHTML = compScore.toString();

    }
    else{
        userScore++;
        x[0].innerHTML = userScore.toString();
        compScore++;
        x[1].innerHTML = compScore.toString();

    }
}

function gameInit(playerMove){
    
    computerMove = computerPlay();
    if(prevComputerMove!=null)
        resetGame(prevPlayerMove,prevComputerMove);
    results = playRound(playerMove, computerMove);
    imageSelectUser(playerMove);
    computerMoveSelectionDelay();
    imageSelectComp(computerMove);
    printResult(results, computerMove);
    updateScoreTable(results);
    prevPlayerMove = playerMove;
    prevComputerMove = computerMove;
}
function printResult(results, computerMove){

    const container = document.querySelector('#res');
    container.classList.add('fadeAnim');

    container.textContent = 'Computer played ' + computerMove +', so you ' + results +'!';
    var newNode = container.cloneNode(true);
    container.parentNode.replaceChild(newNode, container);

}

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        gameInit(button.value);
        button.classList.add('selected');
        

    });


});
