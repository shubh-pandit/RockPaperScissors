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
    resultContainer.textContent = '';

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
    textContainer.textContent = '';
}

function gameInit(playerMove){
    
    computerMove = computerPlay();
    if(prevComputerMove!=null)
        resetGame(prevPlayerMove,prevComputerMove);
    results = playRound(playerMove, computerMove);
    imageSelectUser(playerMove);
    imageSelectComp(computerMove);
    printResult(results, computerMove);
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
